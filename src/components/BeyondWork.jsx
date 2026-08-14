import { useEffect, useRef } from 'react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';
import { FiArrowLeft, FiArrowUpRight, FiHeart, FiMic, FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { favorites, filmNotes, nowNotes, wallPosters, watchArchive } from '../data/beyondWork';
import AppLink from './AppLink';

const spring = { stiffness: 95, damping: 24, mass: 0.7 };

function PosterWall() {
  const wallRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const smoothX = useSpring(pointerX, spring);
  const smoothY = useSpring(pointerY, spring);
  const rotateX = useTransform(smoothY, [0, 1], [4, -4]);
  const rotateY = useTransform(smoothX, [0, 1], [-6, 6]);

  const handlePointerMove = (event) => {
    if (reduceMotion || event.pointerType !== 'mouse') return;
    const bounds = wallRef.current?.getBoundingClientRect();
    if (!bounds) return;
    pointerX.set((event.clientX - bounds.left) / bounds.width);
    pointerY.set((event.clientY - bounds.top) / bounds.height);
  };

  const resetPointer = () => {
    pointerX.set(0.5);
    pointerY.set(0.5);
  };

  return (
    <div
      ref={wallRef}
      className="bw-wall-stage"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      aria-hidden="true"
    >
      <motion.div
        className="bw-poster-wall"
        style={reduceMotion ? undefined : { rotateX, rotateY }}
      >
        {wallPosters.map(({ title, image }, index) => (
          <figure
            className={`bw-wall-poster bw-wall-poster-${index + 1}`}
            key={title}
            style={{ '--poster-index': index }}
          >
            <img
              src={image}
              alt=""
              width="360"
              height="506"
              decoding="async"
              fetchPriority={index < 4 ? 'high' : 'auto'}
            />
          </figure>
        ))}
      </motion.div>
    </div>
  );
}

function BeyondHeader() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="bw-header">
      <nav className="bw-nav" aria-label="Beyond work navigation">
        <AppLink to="/" className="bw-back-link">
          <FiArrowLeft aria-hidden="true" />
          <span>Back to work</span>
        </AppLink>
        <span className="bw-nav-title">Beyond work</span>
        <button type="button" className="spatial-icon-button" onClick={toggleTheme} aria-label="Toggle theme">
          {isDark ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
        </button>
      </nav>
    </header>
  );
}

function FavouriteStory({ item, index, reduceMotion }) {
  return (
    <motion.article
      className={`bw-favourite ${index < 2 ? 'is-anchor' : ''}`}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.04, 0.2), ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="bw-favourite-poster">
        <img src={item.image} alt={`${item.title} poster`} width="360" height="506" loading="lazy" decoding="async" />
        <span>{String(index + 1).padStart(2, '0')}</span>
      </div>
      <div className="bw-favourite-copy">
        <p>{item.signal}</p>
        <h3>{item.title}</h3>
        <div>{item.note}</div>
      </div>
    </motion.article>
  );
}

export default function BeyondWork() {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const canonical = document.querySelector('link[rel="canonical"]');
    const previousDescription = description?.getAttribute('content');
    const previousCanonical = canonical?.getAttribute('href');

    document.title = 'Beyond Work | Arihant Jain';
    description?.setAttribute('content', 'The stories, anime, music, and everyday life Arihant Jain returns to away from backend engineering.');
    canonical?.setAttribute('href', 'https://arihant416.vercel.app/beyond-work');

    return () => {
      document.title = previousTitle;
      if (previousDescription) description?.setAttribute('content', previousDescription);
      if (previousCanonical) canonical?.setAttribute('href', previousCanonical);
    };
  }, []);

  return (
    <div className="bw-page">
      <BeyondHeader />
      <main>
        <section className="bw-hero" id="top">
          <div className="bw-hero-copy">
            <motion.p
              className="section-kicker"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
            >
              The off-screen side
            </motion.p>
            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              Stories I keep coming back to.
            </motion.h1>
            <motion.p
              className="bw-hero-intro"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              Suspense, long mysteries, anime, and the occasional action K-drama. I am much better at starting a rewatch than choosing something new.
            </motion.p>
            <motion.p
              className="bw-watch-label"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.24, duration: 0.5 }}
            >
              My top three rewatches
            </motion.p>
            <motion.ul
              className="bw-watch-signals"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.26, duration: 0.5 }}
              aria-label="Rewatch highlights"
            >
              <li><strong>01</strong> Person of Interest</li>
              <li><strong>02</strong> Supernatural</li>
              <li><strong>03</strong> Haikyu!!</li>
            </motion.ul>
          </div>
          <PosterWall />
        </section>

        <section className="bw-section bw-favourites-section" aria-labelledby="favourites-heading">
          <header className="bw-section-heading">
            <p className="section-kicker">Always in rotation</p>
            <h2 id="favourites-heading">The ones that stayed.</h2>
            <p>Not a ranking. Just the stories I can talk about for far too long.</p>
          </header>
          <div className="bw-favourites-grid">
            {favorites.map((item, index) => (
              <FavouriteStory item={item} index={index} key={item.title} reduceMotion={reduceMotion} />
            ))}
          </div>
        </section>

        <section className="bw-section bw-archive-section" aria-labelledby="archive-heading">
          <header className="bw-section-heading">
            <p className="section-kicker">The wider shelf</p>
            <h2 id="archive-heading">A lot more screen time.</h2>
            <p>Thrillers usually win. Strong characters keep me around.</p>
          </header>
          <div className="bw-archive" role="list">
            {watchArchive.map(({ title, image }, index) => (
              <figure className={`bw-archive-item is-offset-${index % 4}`} key={title} role="listitem">
                <img src={image} alt="" width="360" height="506" loading="lazy" decoding="async" />
                <figcaption>{title}</figcaption>
              </figure>
            ))}
          </div>
          <p className="bw-art-credit">
            Poster data and artwork via <a href="https://www.tvmaze.com/api" target="_blank" rel="noopener noreferrer">TVMaze</a>.
          </p>
        </section>

        <section className="bw-section bw-movies-section" aria-labelledby="movies-heading">
          <header className="bw-section-heading">
            <p className="section-kicker">Films</p>
            <h2 id="movies-heading">A few I return to.</h2>
            <p>Series usually win the evening. These films still make a very convincing case.</p>
          </header>
          <div className="bw-movie-ledger">
            {filmNotes.map(({ title, films, note }, index) => (
              <article className="bw-movie-row" key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <p>{title}</p>
                  <h3>{films}</h3>
                </div>
                <p>{note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bw-section bw-now-section" aria-labelledby="now-heading">
          <header className="bw-section-heading">
            <p className="section-kicker">Right now</p>
            <h2 id="now-heading">A few things in progress.</h2>
            <p>What I am learning and thinking about at the moment.</p>
          </header>
          <div className="bw-now-list">
            {nowNotes.map(({ label, title, note }, index) => (
              <motion.article
                className="bw-now-item"
                key={label}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <p>{label}</p>
                  <h3>{title}</h3>
                  <div>{note}</div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="bw-life-section" aria-labelledby="life-heading">
          <div className="bw-life-heading">
            <p className="section-kicker">Away from the screen</p>
            <h2 id="life-heading">The parts that matter more.</h2>
          </div>
          <article className="bw-life-note">
            <FiHeart aria-hidden="true" />
            <p className="bw-life-label">Fatherhood</p>
            <h3>Most of life outside work is being a dad.</h3>
            <div>Working remotely lets me stay close to the everyday moments. I value that more than any hobby.</div>
          </article>
          <article className="bw-life-note">
            <FiMic aria-hidden="true" />
            <p className="bw-life-label">Music</p>
            <h3>I used to front a college band.</h3>
            <div>Rock still feels like home: Radiohead, Creed, Green Day, Linkin Park, and The Beatles. Indian indie is just as personal, especially Mohan Kannan's voice, Agnee, and Euphoria; Maaeri and Mehfuz are permanent favourites.</div>
            <a href="https://instagram.com/arihantsings" target="_blank" rel="noopener noreferrer">
              @arihantsings <FiArrowUpRight aria-hidden="true" />
            </a>
          </article>
        </section>
      </main>

      <footer className="bw-footer">
        <p>&copy; {new Date().getFullYear()} Arihant Jain</p>
        <AppLink to="/">Return to the portfolio <FiArrowUpRight aria-hidden="true" /></AppLink>
      </footer>
    </div>
  );
}
