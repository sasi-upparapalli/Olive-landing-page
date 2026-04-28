import React from 'react';
import styles from './Hero.module.css';
import PhoneMockup from './PhoneMockup';

const AVATAR_COLORS = ['#d4a843', '#8bc34a', '#ef9a9a', '#90caf9', '#ce93d8'];

function AvatarGroup() {
  return (
    <div className={styles.socialProof}>
      <div className={styles.avatarGroup}>
        {AVATAR_COLORS.map((color, i) => (
          <div
            key={i}
            className={styles.avatar}
            style={{
              background: color,
              zIndex: AVATAR_COLORS.length - i,
              marginLeft: i === 0 ? 0 : -10,
            }}
          >
            <svg viewBox="0 0 24 24" fill="white" width="16" height="16">
              <circle cx="12" cy="8" r="4"/>
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
            </svg>
          </div>
        ))}
      </div>
      <span className={styles.socialProofText}>Trusted by thousands of healthy families</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <AvatarGroup />

        <h1 className={styles.headline}>
          The Safest Way to<br />
          Shop for Groceries
        </h1>

        <p className={styles.subheadline}>
          Use the Olive Food Scanner App to Instantly Eliminate<br />
          Harmful Ingredients from Your Family's Diet and Get<br />
          Expert-Backed Food Insights
        </p>

        <div className={styles.ctaGroup}>
          <a href="/" className={styles.downloadBtn}>
            {/* Apple icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Download for iOS
          </a>
          
        </div>
        <div className={styles.ctaGroup}> <a href="/" className={styles.downloadBtn}> {/* Windows icon */} <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"> <path d="M2 3.5l9-1.3v9.3H2V3.5zm11 8V2l11-1.6v11.1H13zM2 12.5h9v9.3l-9-1.3v-8zm11 0h11v11.1L13 22v-9.5z"/> </svg> Download for Windows </a> </div>
        <a href="/" className={styles.communityLink}>
            Join the Olive Community
            <span className={styles.arrow}>→</span>
          </a>
      </div>
      

      <div className={styles.phoneWrapper}>
        <PhoneMockup />
      </div>
    </section>
  );
}
