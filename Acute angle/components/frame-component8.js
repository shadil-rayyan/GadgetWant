import styles from "./frame-component8.module.css";

const FrameComponent8 = () => {
  return (
    <section className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.frameContainer}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.dashboardWrapper}>
              <h2 className={styles.dashboard}>DashBoard</h2>
            </div>
            <div className={styles.image41Parent}>
              <img
                className={styles.image41Icon}
                alt=""
                src="/image-41@2x.png"
              />
              <div className={styles.searchWrapper}>
                <div className={styles.search}>Search...</div>
              </div>
              <div className={styles.frameItem} />
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.frameDiv}>
                <div className={styles.frameParent1}>
                  <div className={styles.ellipseParent}>
                    <div className={styles.frameInner} />
                    <img
                      className={styles.image37Icon}
                      loading="lazy"
                      alt=""
                      src="/image-37@2x.png"
                    />
                  </div>
                  <div className={styles.ellipseGroup}>
                    <div className={styles.ellipseDiv} />
                    <img
                      className={styles.image39Icon}
                      loading="lazy"
                      alt=""
                      src="/image-39@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.ellipseContainer}>
                  <div className={styles.frameChild1} />
                  <img
                    className={styles.image40Icon}
                    loading="lazy"
                    alt=""
                    src="/image-40@2x.png"
                  />
                </div>
                <div className={styles.shadilWrapper}>
                  <h3 className={styles.shadil}>SHADIL</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent3}>
          <div className={styles.rectangleGroup}>
            <div className={styles.rectangleDiv} />
            <h2 className={styles.orders}>Orders</h2>
            <div className={styles.wrapper}>
              <div className={styles.div}>920</div>
            </div>
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.frameChild2} />
            <h2 className={styles.revenue}>Revenue</h2>
            <div className={styles.container}>
              <div className={styles.div1}>$7,825</div>
            </div>
          </div>
          <div className={styles.rectangleParent1}>
            <div className={styles.frameChild3} />
            <h2 className={styles.conversion}>Conversion</h2>
            <div className={styles.frame}>
              <div className={styles.div2}>28%</div>
            </div>
          </div>
          <div className={styles.rectangleParent2}>
            <textarea className={styles.rectangleTextarea} rows={9} cols={15} />
            <h2 className={styles.visitor}>Visitor</h2>
            <div className={styles.kWrapper}>
              <div className={styles.k}>15.5K</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent8;
