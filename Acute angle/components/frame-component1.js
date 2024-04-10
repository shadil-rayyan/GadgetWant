import styles from "./frame-component1.module.css";

const FrameComponent1 = () => {
  return (
    <div className={styles.shapeTransformerInner}>
      <div className={styles.productCardParent}>
        <div className={styles.productCard}>
          <img
            className={styles.banner1pngIcon}
            alt=""
            src="/banner1png@2x.png"
          />
          <h2 className={styles.ourProductAre}>Our product are unique</h2>
          <div className={styles.linkWrapper}>
            <button className={styles.link}>
              <b className={styles.shopNow}>Shop Now</b>
              <img
                className={styles.ifiRsArrowSmallRightIcon}
                alt=""
                src="/ifirsarrowsmallright.svg"
              />
            </button>
          </div>
        </div>
        <div className={styles.functionTree}>
          <div className={styles.techCard}>
            <img
              className={styles.banner2pngIcon}
              alt=""
              src="/banner2png@2x.png"
            />
            <h2 className={styles.bringTechTo}>Bring Tech to you life</h2>
            <div className={styles.constantValue}>
              <button className={styles.link1}>
                <b className={styles.shopNow1}>Shop Now</b>
                <img
                  className={styles.ifiRsArrowSmallRightIcon1}
                  alt=""
                  src="/ifirsarrowsmallright.svg"
                />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.giftSectionCardWrapper}>
          <div className={styles.giftSectionCard}>
            <img
              className={styles.banner3pngIcon}
              alt=""
              src="/banner3png@2x.png"
            />
            <h2 className={styles.theGiftYou}>
              The Gift you imagine find it here
            </h2>
            <div className={styles.linkContainer}>
              <button className={styles.link2}>
                <b className={styles.shopNow2}>Shop Now</b>
                <img
                  className={styles.ifiRsArrowSmallRightIcon2}
                  alt=""
                  src="/ifirsarrowsmallright.svg"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
