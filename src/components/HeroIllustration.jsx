import { useState } from 'react';

export default function HeroIllustration() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);

  return (
    <div className={`spatial-visual ${isLoaded ? 'is-loaded' : ''} ${showGreeting ? 'is-greeting' : ''}`}>
      <img
        className="spatial-illustration"
        src="/backend-engineer-illustration.webp"
        width="1280"
        height="853"
        alt=""
        decoding="async"
        fetchPriority="high"
        onLoad={() => setIsLoaded(true)}
      />
      <button
        type="button"
        className="spatial-person-hotspot"
        aria-label="Say hello to Arihant"
        aria-pressed={showGreeting}
        onPointerEnter={(event) => {
          if (event.pointerType === 'mouse') setShowGreeting(true);
        }}
        onPointerLeave={(event) => {
          if (event.pointerType === 'mouse') setShowGreeting(false);
        }}
        onPointerUp={(event) => {
          if (event.pointerType === 'touch' || event.pointerType === 'pen') {
            setShowGreeting((visible) => !visible);
          }
        }}
        onFocus={() => setShowGreeting(true)}
        onBlur={() => setShowGreeting(false)}
      >
        <span aria-hidden="true">Hi :)</span>
      </button>
    </div>
  );
}
