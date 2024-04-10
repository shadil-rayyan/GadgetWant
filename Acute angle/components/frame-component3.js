import styles from "./frame-component3.module.css";

const FrameComponent3 = () => {
  return (
    <section className={styles.desktop1Inner}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.backgroundCoverParent}>
            <div className={styles.backgroundCover} />
            <div className={styles.frameGroup}>
              <div className={styles.heading1FreshVegetablesWrapper}>
                <h1 className={styles.heading1Container}>
                  <span>
                    <p className={styles.freshVegetables}>Fresh Vegetables</p>
                    <p className={styles.bigDiscount}>Big discount</p>
                  </span>
                </h1>
              </div>
              <div className={styles.imageProcessor}>
                <div className={styles.listManager}>
                  <img
                    className={styles.arrowLeftIcon}
                    loading="lazy"
                    alt=""
                    src="/arrow-left.svg"
                  />
                  <div className={styles.outputDisplay}>
                    <h1 className={styles.saveUpTo}>
                      Save up to 50% off on your first order
                    </h1>
                  </div>
                </div>
                <img
                  className={styles.arrowRightIcon}
                  loading="lazy"
                  alt=""
                  src="/arrow-right.svg"
                />
              </div>
            </div>
            <div className={styles.functionCaller}>
              <div className={styles.form}>
                <input
                  className={styles.input}
                  placeholder="Your emaill address"
                  type="text"
                />
                <button className={styles.button}>
                  <div className={styles.subscribe}>Subscribe</div>
                </button>
              </div>
            </div>
            <div className={styles.tab1Of2Wrapper}>
              <div className={styles.tab1Of2} />
            </div>
          </div>
        </div>
        <h1 className={styles.heading3}>Shop by Categories</h1>
      </div>
    </section>
  );
};

export default FrameComponent3;
