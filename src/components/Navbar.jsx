import React, { useState, useRef, useEffect } from 'react';
import styles from './Navbar.module.css';
import OliveLogo from './OliveLogo';

const SOLUTIONS_ITEMS = [
  {
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
        <rect width="32" height="32" rx="8" fill="#fef3e2"/>
        <path d="M10 22c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d48020" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="16" cy="12" r="3" stroke="#d48020" strokeWidth="1.8"/>
        <path d="M8 18l2-2M24 18l-2-2" stroke="#d48020" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Allergy Scanning',
    desc: 'Scan groceries and even bottled water to reveal hidden ingredients',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
        <rect width="32" height="32" rx="8" fill="#f0f8e8"/>
        <path d="M8 20l4-8 3 5 2-3 3 6" stroke="#4a7c20" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="22" cy="12" r="3" fill="#b8d890" stroke="#4a7c20" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Gluten Free Scanning',
    desc: 'Wheat, barley, rye, or their derivatives, the scanner flags any gluten-containing ingredients',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
        <rect width="32" height="32" rx="8" fill="#fdf0f0"/>
        <ellipse cx="16" cy="18" rx="6" ry="7" stroke="#c04040" strokeWidth="1.8"/>
        <path d="M13 12c1-3 5-3 6 0" stroke="#c04040" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Dairy and Lactose Scanning',
    desc: 'Detect common dairy-derived ingredients like casein, whey, lactose, and more',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
        <rect width="32" height="32" rx="8" fill="#eef6f0"/>
        <rect x="9" y="10" width="14" height="12" rx="2" stroke="#2e7d52" strokeWidth="1.8"/>
        <path d="M12 14h8M12 17h5" stroke="#2e7d52" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="22" cy="22" r="4" fill="#2e7d52"/>
        <path d="M20 22l1.5 1.5L24 20" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Ingredient Checking',
    desc: 'Decode complex ingredient labels in seconds, with easy-to-understand alerts.',
  },
];

const BLOG_ITEMS = [
  {
    bgColor: '#c8d8a0',
    title: 'Modern-Day Miracle in Salinas, California',
    desc: "One author's journey from faith-based organic advocacy to witnessing a…",
  },
  {
    bgColor: '#d4b898',
    title: "We Bought Eggs From Every Store… What We Discovered About 'Pasture-Free,' 'Free-Range,' and 'Cage-Free' Will SHOCK You!",
    desc: 'Not all eggs are created equal. We decoded the confusing labels on egg…',
  },
];

const FOOD_ITEMS = [
  { emoji: '🥣', label: 'Breakfast Cereals', bg: '#fef3e2' },
  { emoji: '🥫', label: 'Sauces And Condiments', bg: '#fde8e8' },
  { emoji: '🥨', label: 'Snacks Salty', bg: '#fff8e0' },
  { emoji: '🍬', label: 'Snacks Sweet', bg: '#fce4f4' },
  { emoji: '🍦', label: 'Ice Cream And Frozen Dairy', bg: '#e8f4fe' },
  { emoji: '🍼', label: 'Baby And Infant Food', bg: '#eef8e8' },
];

const NAV_LINKS = [
  { label: 'Solutions', hasDropdown: true },
  { label: 'Features', hasDropdown: false },
  { label: 'Pricing', hasDropdown: false },
  { label: 'Blog', hasDropdown: true },
  { label: 'Restaurants', hasDropdown: false },
  { label: 'Food', hasDropdown: true },
];

function SolutionsDropdown() {
  return (
    <div className={`${styles.dropdown} ${styles.solutionsDropdown}`}>
      <div className={styles.solutionsLeft}>
        {SOLUTIONS_ITEMS.map((item) => (
          <a href="/" key={item.title} className={styles.solutionItem}>
            <span className={styles.solutionIconWrap}>{item.icon}</span>
            <div>
              <div className={styles.solutionTitle}>{item.title}</div>
              <div className={styles.solutionDesc}>{item.desc}</div>
            </div>
          </a>
        ))}
      </div>
      <div className={styles.solutionsRight}>
        <div className={styles.featuredCard}>
          <div className={styles.featuredCardImg} style={{ background: 'linear-gradient(135deg, #a8c870 0%, #6a9e40 100%)' }}>
            <svg viewBox="0 0 200 120" width="100%" height="100%">
              <rect width="200" height="120" fill="url(#farmGrad)"/>
              <defs>
                <linearGradient id="farmGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#87ceeb"/>
                  <stop offset="50%" stopColor="#98d060"/>
                  <stop offset="100%" stopColor="#5a8030"/>
                </linearGradient>
              </defs>
              {/* Simple farm illustration */}
              <rect x="0" y="70" width="200" height="50" fill="#6a9e40"/>
              <rect x="0" y="60" width="200" height="15" fill="#7ab050"/>
              {[0,1,2,3,4,5,6].map(i => (
                <rect key={i} x={i*30} y="55" width="4" height="25" fill="#4a7020" opacity="0.7"/>
              ))}
              <rect x="0" y="0" width="200" height="60" fill="#87ceeb" opacity="0.7"/>
            </svg>
          </div>
          <div className={styles.featuredCardLabel}>
            Modern-Day Miracle in Salinas, California →
          </div>
        </div>
      </div>
    </div>
  );
}

function BlogDropdown() {
  return (
    <div className={`${styles.dropdown} ${styles.blogDropdown}`}>
      <div className={styles.blogGrid}>
        {BLOG_ITEMS.map((item) => (
          <a href="/" key={item.title} className={styles.blogItem}>
            <div className={styles.blogThumb} style={{ background: item.bgColor }}>
              {item.bgColor === '#c8d8a0' ? (
                <svg viewBox="0 0 120 80" width="100%" height="100%">
                  <rect width="120" height="80" fill="#87ceeb" opacity="0.5"/>
                  <rect x="0" y="45" width="120" height="35" fill="#6a9e40"/>
                  {[0,1,2,3].map(i => (
                    <rect key={i} x={i*32} y="38" width="3" height="20" fill="#4a7020" opacity="0.7"/>
                  ))}
                </svg>
              ) : (
                <svg viewBox="0 0 120 80" width="100%" height="100%">
                  <rect width="120" height="80" fill="#c8a878"/>
                  <ellipse cx="40" cy="45" rx="20" ry="15" fill="#d4b898"/>
                  <ellipse cx="70" cy="50" rx="15" ry="12" fill="#b8906c"/>
                  <ellipse cx="90" cy="42" rx="18" ry="14" fill="#c8a070"/>
                  {[30,55,75].map((cx, i) => (
                    <ellipse key={i} cx={cx} cy={40+i*3} rx="8" ry="6" fill="#8B6040" opacity="0.6"/>
                  ))}
                </svg>
              )}
            </div>
            <div className={styles.blogTextWrap}>
              <div className={styles.blogTitle}>{item.title}</div>
              <div className={styles.blogDesc}>{item.desc}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function FoodDropdown() {
  return (
    <div className={`${styles.dropdown} ${styles.foodDropdown}`}>
      <div className={styles.foodGrid}>
        {FOOD_ITEMS.map((item) => (
          <a href="/" key={item.label} className={styles.foodItem}>
            <span className={styles.foodIconBox} style={{ background: item.bg }}>
              {item.emoji}
            </span>
            <span className={styles.foodLabel}>{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  function toggleDropdown(label) {
    setOpenDropdown((prev) => (prev === label ? null : label));
  }

  function renderDropdown(label) {
    if (openDropdown !== label) return null;
    if (label === 'Solutions') return <SolutionsDropdown />;
    if (label === 'Blog') return <BlogDropdown />;
    if (label === 'Food') return <FoodDropdown />;
    return null;
  }

  return (
    <nav className={styles.navbar} ref={navRef}>
      <div className={styles.navInner}>
        <a href="/" className={styles.logo}><OliveLogo /></a>

        <ul className={styles.navLinks}>
          {NAV_LINKS.map((link) => (
            <li key={link.label} className={styles.navItem}>
              <button
                className={`${styles.navLink} ${openDropdown === link.label ? styles.navLinkActive : ''}`}
                onClick={() => link.hasDropdown ? toggleDropdown(link.label) : null}
              >
                {link.label}
                {link.hasDropdown && (
                  <span className={`${styles.chevron} ${openDropdown === link.label ? styles.chevronUp : ''}`}>
                    <svg width="11" height="7" viewBox="0 0 12 8" fill="none">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                )}
              </button>
              {renderDropdown(link.label)}
            </li>
          ))}
        </ul>

        <div className={styles.navActions}>
          <a href="/" className={styles.signIn}>Sign in</a>
          <a href="/" className={styles.ctaBtn}>
            Get Olive
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <button className={styles.hamburger} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          <span className={`${styles.bar} ${mobileOpen ? styles.barOpen1 : ''}`} />
          <span className={`${styles.bar} ${mobileOpen ? styles.barOpen2 : ''}`} />
          <span className={`${styles.bar} ${mobileOpen ? styles.barOpen3 : ''}`} />
        </button>
      </div>

      {mobileOpen && (
        <div className={styles.mobileMenu}>
          {NAV_LINKS.map((link) => (
            <a key={link.label} href="/" className={styles.mobileLink}>{link.label}</a>
          ))}
          <div className={styles.mobileCtas}>
            <a href="/" className={styles.signIn}>Sign in</a>
            <a href="/" className={styles.ctaBtn}>Get Olive →</a>
          </div>
        </div>
      )}
    </nav>
  );
}
