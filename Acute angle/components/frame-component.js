import styles from "./frame-component.module.css";

const FrameComponent = () => {
  return (
    <section className={styles.newslatterCallingWrapper}>
      <div className={styles.newslatterCalling}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameWrapper}>
            <div className={styles.heading2StayHomeGetYoParent}>
              <h1 className={styles.heading2Container}>
                <p
                  className={styles.stayHome}
                >{`Stay home & get your daily`}</p>
                <p className={styles.needsFromOur}>needs from our shop</p>
              </h1>
              <div className={styles.startYourDaily}>
                Start You'r Daily Shopping with Gadgets need
              </div>
            </div>
          </div>
          <div className={styles.form}>
            <div className={styles.input}>
              <div className={styles.divplaceholder}>
                <div className={styles.yourEmaillAddress}>
                  Your emaill address
                </div>
              </div>
            </div>
            <button className={styles.button}>
              <b className={styles.subscribe}>Subscribe</b>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
