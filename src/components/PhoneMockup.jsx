import React, { useEffect, useRef } from 'react';
import styles from './PhoneMockup.module.css';

/* ── Product cards shown in the carousel ── */
const PRODUCTS = [
  {
    name: 'Raincoast Crisps, Fig and Olive',
    brand: 'Lesley Stowe',
    score: 46,
    scoreColor: '#e05030',
    label: 'Avoid',
    bg: '#d8c8b0',
    accentBg: '#c4b09a',
  },
  {
    name: 'Late July Organic Sea Salt Tortilla Chips',
    brand: 'Late July',
    score: 72,
    scoreColor: '#e8a020',
    label: 'Ok',
    bg: '#f0e0b0',
    accentBg: '#e0c888',
  },
  {
    name: 'Gradea Raw Pure Jersey Milk',
    brand: 'Gradea',
    score: 88,
    scoreColor: '#48a060',
    label: 'Good',
    bg: '#d0e8d8',
    accentBg: '#b8d8c0',
  },
  {
    name: 'LÄRABAR Fruit & Nut Bar',
    brand: 'Larabar',
    score: 91,
    scoreColor: '#48a060',
    label: 'Great',
    bg: '#e8d8c0',
    accentBg: '#d8c0a0',
  },
  {
    name: 'Annie\'s Homegrown Mac & Cheese',
    brand: "Annie's",
    score: 58,
    scoreColor: '#e8a020',
    label: 'Fair',
    bg: '#f0d8b0',
    accentBg: '#e0c090',
  },
];

/* ── Inline SVG product illustrations ── */
function ProductIllustration({ product, size = 90 }) {
  return (
    <svg viewBox="0 0 90 70" width={size} height={Math.round(size * 0.78)} fill="none">
      <rect width="90" height="70" rx="8" fill={product.bg}/>
      <rect x="12" y="10" width="66" height="44" rx="6" fill={product.accentBg}/>
      <rect x="22" y="18" width="46" height="28" rx="4" fill={product.bg} opacity="0.7"/>
      <text x="45" y="33" textAnchor="middle" fontSize="7" fontWeight="700"
        fill="#5a4030" fontFamily="sans-serif" letterSpacing="0.3">
        {product.brand.toUpperCase().slice(0, 8)}
      </text>
      <text x="45" y="44" textAnchor="middle" fontSize="5.5"
        fill="#7a6050" fontFamily="sans-serif">
        {product.name.split(' ').slice(0, 3).join(' ')}
      </text>
    </svg>
  );
}

/* ── Score dot ── */
function ScoreDot({ color }) {
  return (
    <span style={{
      display: 'inline-block',
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: color,
      marginRight: 5,
      flexShrink: 0,
    }}/>
  );
}

/* ── Single product card inside the phone ── */
function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      {/* Top image carousel strip */}
      <div className={styles.cardImgStrip} style={{ background: `linear-gradient(135deg, ${product.bg} 0%, ${product.accentBg} 100%)` }}>
        {/* Side ghost images */}
        <div className={styles.cardGhostImg} style={{ left: 8, opacity: 0.4, transform: 'scale(0.8)' }}>
          <ProductIllustration product={PRODUCTS[(PRODUCTS.indexOf(product) + 4) % PRODUCTS.length]} size={64}/>
        </div>
        <div className={styles.cardMainImg}>
          <ProductIllustration product={product} size={90}/>
        </div>
        <div className={styles.cardGhostImg} style={{ right: 8, opacity: 0.4, transform: 'scale(0.8)' }}>
          <ProductIllustration product={PRODUCTS[(PRODUCTS.indexOf(product) + 1) % PRODUCTS.length]} size={64}/>
        </div>
        {/* scroll indicator */}
        <div className={styles.scrollDots}>
          <span className={styles.dotActive}/>
          <span className={styles.dot}/>
          <span className={styles.dot}/>
        </div>
      </div>

      {/* Card content */}
      <div className={styles.cardBody}>
        <div className={styles.cardHeader}>
          <div className={styles.cardThumb} style={{ background: product.accentBg }}>
            <ProductIllustration product={product} size={40}/>
          </div>
          <div className={styles.cardInfo}>
            <div className={styles.cardName}>{product.name}</div>
            <div className={styles.cardBrand}>{product.brand}</div>
          </div>
          <div className={styles.cardActions}>
            <button className={styles.iconBtn} aria-label="Like">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="1.8">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </button>
            <button className={styles.iconBtn} aria-label="Share">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="1.8">
                <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Score */}
        <div className={styles.scoreRow}>
          <ScoreDot color={product.scoreColor}/>
          <span className={styles.scoreText}>{product.score}/100</span>
          <span className={styles.scoreLabel}>{product.label}</span>
        </div>

        {/* Oliver says */}
        <div className={styles.oliverBox}>
          <div className={styles.oliverHeader}>
            <div className={styles.oliverAvatar}>
              <svg viewBox="0 0 20 22" width="20" height="22" fill="none">
                <ellipse cx="10" cy="14" rx="8" ry="8" fill="#4a6b25"/>
                <ellipse cx="10" cy="13" rx="6" ry="7" fill="#5a8030"/>
                <circle cx="7.5" cy="12" r="1.1" fill="#1a2010"/>
                <circle cx="12.5" cy="12" r="1.1" fill="#1a2010"/>
                <path d="M7.5 15.5Q10 17.5 12.5 15.5" stroke="#1a2010" strokeWidth="0.8" strokeLinecap="round" fill="none"/>
                <path d="M10 6Q12 3 15 2" stroke="#4a6b25" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                <ellipse cx="15.5" cy="2" rx="2.5" ry="1.3" fill="#6ab030" transform="rotate(-25 15.5 2)"/>
              </svg>
            </div>
            <span className={styles.oliverName}>Oliver Says:</span>
          </div>
          <p className={styles.oliverText}>
            "This product's low score mainly comes from the processed sugars, like honey and brown sugar, which can impact your family's health when consumed frequently, especially for kids who are still developing."
          </p>
        </div>

        <div className={styles.breakdownRow}>Breakdown</div>
      </div>
    </div>
  );
}

/* ── Main Phone Mockup ── */
export default function PhoneMockup() {
  const trackRef = useRef(null);
  const currentRef = useRef(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const CARD_WIDTH = track.children[0]?.offsetWidth + 16 || 310; // card + gap
    const TOTAL = PRODUCTS.length;
    let pos = 0;
    let paused = false;

    function step() {
      if (!paused) {
        pos += 0.4; // px per frame — slow drift
        if (pos >= CARD_WIDTH * TOTAL) pos = 0;
        track.style.transform = `translateX(-${pos}px)`;
      }
      rafRef.current = requestAnimationFrame(step);
    }

    rafRef.current = requestAnimationFrame(step);

    // Pause on hover
    track.addEventListener('mouseenter', () => { paused = true; });
    track.addEventListener('mouseleave', () => { paused = false; });

    return () => {
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Duplicate cards for seamless loop
  const loopedProducts = [...PRODUCTS, ...PRODUCTS];

  return (
    <div className={styles.phoneScene}>
      {/* Side ghost phones */}
      <div className={`${styles.sidePhone} ${styles.leftPhone}`}>
        <div className={styles.sidePhoneShell}>
          <div className={styles.sidePhoneContent}/>
        </div>
      </div>
      <div className={`${styles.sidePhone} ${styles.rightPhone}`}>
        <div className={styles.sidePhoneShell}>
          <div className={styles.sidePhoneContent}/>
        </div>
      </div>

      {/* Main phone */}
      <div className={styles.phone}>
        <div className={styles.notch}/>

        {/* Scrolling carousel of product cards */}
        <div className={styles.carouselViewport}>
          <div className={styles.carouselTrack} ref={trackRef}>
            {loopedProducts.map((p, i) => (
              <div className={styles.carouselItem} key={i}>
                <ProductCard product={p}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
