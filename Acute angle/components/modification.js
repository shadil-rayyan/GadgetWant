import styles from "./modification.module.css";

const Modification = () => {
  return (
    <div className={styles.modification}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.clipPathGroupWrapper}>
              <img
                className={styles.clipPathGroup}
                loading="lazy"
                alt=""
                src="/clip-path-group@2x.png"
              />
            </div>
            <div className={styles.sitelogo}>
              <div className={styles.sitelogoChild} />
              <div className={styles.sitelogoItem} />
              <div className={styles.sitelogoInner} />
              <h3 className={styles.sitelogo1}>Gadgets need</h3>
            </div>
          </div>
          <div className={styles.menuheaderWrapper}>
            <div className={styles.menuheader}>
              <div className={styles.about}>About</div>
              <div className={styles.features}>Features</div>
              <div className={styles.pricing}>Pricing</div>
              <div className={styles.gallery}>Gallery</div>
              <div className={styles.team}>Team</div>
            </div>
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.button}>
            <div className={styles.contactUs}>Contact Us</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modification;
