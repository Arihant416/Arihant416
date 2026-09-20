import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

const PALETTE = {
  dark: {
    background: 0x0b0d12,
    graphite: 0x2d3442,
    cobalt: 0x607fe8,
    coral: 0xe97862,
    lineOpacity: 0.34,
    blueOpacity: 0.7,
    coralOpacity: 0.64,
    gridOpacity: 0.08,
  },
  light: {
    background: 0xf2f4f7,
    graphite: 0xaeb8c8,
    cobalt: 0x3156c8,
    coral: 0xc6533d,
    lineOpacity: 0.42,
    blueOpacity: 0.5,
    coralOpacity: 0.45,
    gridOpacity: 0.1,
  },
};

export default function SpatialScene({ reduceMotion = false }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const { isDark } = useTheme();
  const isDarkRef = useRef(isDark);
  isDarkRef.current = isDark;

  // Build the scene once per mount (and when motion preference changes).
  // Theme changes are applied in place by the effect below, without a new WebGL context.
  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return undefined;

    setReady(false);
    setFailed(false);

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: window.devicePixelRatio < 2,
        powerPreference: 'high-performance',
      });
    } catch {
      setFailed(true);
      return undefined;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 40);
    camera.position.set(0, 0, 10);
    scene.fog = new THREE.Fog(0x000000, 10, 19);

    const stage = new THREE.Group();
    scene.add(stage);

    const geometries = [];
    const rememberGeometry = (geometry) => {
      geometries.push(geometry);
      return geometry;
    };

    const lineMaterial = new THREE.LineBasicMaterial({ transparent: true });
    const blueMaterial = new THREE.MeshBasicMaterial({ transparent: true });
    const coralMaterial = new THREE.MeshBasicMaterial({ transparent: true });

    const frameGeometry = rememberGeometry(new THREE.EdgesGeometry(new THREE.BoxGeometry(6.8, 4.8, 1.8)));
    const frame = new THREE.LineSegments(frameGeometry, lineMaterial);
    frame.position.set(1.4, -0.25, -1.2);
    stage.add(frame);

    const addRoute = (points, routeMaterial) => {
      const curve = new THREE.CatmullRomCurve3(points.map((point) => new THREE.Vector3(...point)));
      const route = new THREE.Mesh(
        rememberGeometry(new THREE.TubeGeometry(curve, 52, 0.018, 5, false)),
        routeMaterial,
      );
      stage.add(route);
      return route;
    };

    const routes = [
      addRoute([[-0.4, 1.55, -0.7], [0.8, 1.55, -0.7], [1.8, 1.25, -0.7], [2.35, 0.65, -0.7]], blueMaterial),
      addRoute([[3.8, 1.2, -0.85], [4.15, 0.45, -0.85], [4.15, -0.55, -0.85], [3.55, -1.15, -0.85]], coralMaterial),
    ];

    const finGeometry = rememberGeometry(new THREE.BoxGeometry(0.28, 4.5, 0.12));
    const fins = [
      { position: [0.1, 0.35, -1.8], rotation: [-0.02, -0.12, -0.05], material: lineMaterial },
      { position: [4.35, 0.5, -1.65], rotation: [0.04, 0.18, 0.1], material: blueMaterial },
      { position: [4.85, -1.35, -1.95], rotation: [0.06, -0.08, 1.35], material: coralMaterial },
    ].map((config) => {
      const fin = new THREE.Mesh(finGeometry, config.material);
      fin.position.set(...config.position);
      fin.rotation.set(...config.rotation);
      fin.userData.baseZ = config.position[2];
      stage.add(fin);
      return fin;
    });

    const grid = new THREE.GridHelper(18, 18);
    grid.rotation.x = Math.PI / 2;
    grid.position.z = -2.8;
    grid.material.transparent = true;
    stage.add(grid);

    const render = () => renderer.render(scene, camera);

    const applyTheme = (mode) => {
      const colors = PALETTE[mode];
      scene.fog.color.setHex(colors.background);
      lineMaterial.color.setHex(colors.graphite);
      lineMaterial.opacity = colors.lineOpacity;
      blueMaterial.color.setHex(colors.cobalt);
      blueMaterial.opacity = colors.blueOpacity;
      coralMaterial.color.setHex(colors.coral);
      coralMaterial.opacity = colors.coralOpacity;
      grid.material.color.setHex(colors.graphite);
      grid.material.opacity = colors.gridOpacity;
      render();
    };

    let pointerX = 0;
    let pointerY = 0;
    const handlePointer = (event) => {
      pointerX = (event.clientX / window.innerWidth - 0.5) * 2;
      pointerY = (event.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('pointermove', handlePointer, { passive: true });

    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      if (!width || !height) return;
      const mobile = width < 720;
      const tablet = width >= 720 && width < 1040;

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, mobile ? 1.2 : 1.5));
      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();

      if (mobile) {
        stage.scale.setScalar(0.72);
        stage.position.set(0.15, -1.15, 0);
      } else if (tablet) {
        stage.scale.setScalar(0.86);
        stage.position.set(0.65, -0.75, 0);
      } else {
        stage.scale.setScalar(1);
        stage.position.set(1.65, -0.05, 0);
      }
      render();
    };

    // Animation loop only runs while the hero is on screen and the tab is visible.
    let animationFrame = null;
    let onScreen = true;
    const tick = (time) => {
      const seconds = time * 0.001;
      stage.rotation.y += ((pointerX * 0.025) - stage.rotation.y) * 0.035;
      stage.rotation.x += ((pointerY * -0.012) - stage.rotation.x) * 0.035;
      fins.forEach((fin, index) => {
        fin.position.z = fin.userData.baseZ + Math.sin(seconds * 0.28 + index) * 0.035;
      });
      routes.forEach((route, index) => {
        route.position.y = Math.sin(seconds * 0.38 + index) * 0.014;
      });
      render();
      animationFrame = window.requestAnimationFrame(tick);
    };
    const start = () => {
      if (reduceMotion || animationFrame !== null || !onScreen || document.hidden) return;
      animationFrame = window.requestAnimationFrame(tick);
    };
    const stop = () => {
      if (animationFrame !== null) window.cancelAnimationFrame(animationFrame);
      animationFrame = null;
    };

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      if (onScreen) start();
      else stop();
    });
    visibilityObserver.observe(container);

    const handleVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener('visibilitychange', handleVisibility);

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    sceneRef.current = { applyTheme };
    applyTheme(isDarkRef.current ? 'dark' : 'light');
    resize();
    setReady(true);
    start();

    return () => {
      sceneRef.current = null;
      stop();
      visibilityObserver.disconnect();
      resizeObserver.disconnect();
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('pointermove', handlePointer);
      geometries.forEach((geometry) => geometry.dispose());
      [lineMaterial, blueMaterial, coralMaterial].forEach((material) => material.dispose());
      grid.geometry.dispose();
      grid.material.dispose();
      renderer.dispose();
    };
  }, [reduceMotion]);

  useEffect(() => {
    sceneRef.current?.applyTheme(isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div ref={containerRef} className={`spatial-scene ${ready ? 'is-ready' : ''} ${failed ? 'has-failed' : ''}`}>
      <div className="spatial-scene-fallback" aria-hidden="true" />
      <canvas ref={canvasRef} aria-hidden="true" />
    </div>
  );
}
