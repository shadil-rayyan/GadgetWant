import SectionTabpanel from "./section-tabpanel";
import Layout1 from "./layout1";
import Layout from "./layout";
import styles from "./frame-component2.module.css";

const FrameComponent2 = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.sectionHeading3PopularWrapper}>
        <h1 className={styles.sectionHeading}>Popular Products</h1>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameWrapper}>
          <div className={styles.sectionTabpanelParent}>
            <div className={styles.sectionTabpanel}>
              <div className={styles.divproductImgWrapper}>
                <img
                  className={styles.divproductImgIcon}
                  loading="lazy"
                  alt=""
                  src="/divproductimg@2x.png"
                />
              </div>
              <div className={styles.link}>
                <img className={styles.icon} alt="" src="/icon-3.svg" />
                <b className={styles.add}>Add</b>
              </div>
              <div className={styles.heading2LinkSeedsOfChParent}>
                <b className={styles.heading2Container}>
                  <p className={styles.seedsOfChange}>Seeds of Change</p>
                  <p className={styles.organicQuinoe}>Organic Quinoe</p>
                </b>
                <div className={styles.frameContainer}>
                  <div className={styles.frameDiv}>
                    <div className={styles.frameWrapper1}>
                      <div className={styles.starConfiguratorParent}>
                        <div className={styles.starConfigurator}>
                          <div className={styles.divproductRateWrapper}>
                            <img
                              className={styles.divproductRateIcon}
                              alt=""
                              src="/divproductrate@2x.png"
                            />
                          </div>
                          <div className={styles.div}>(4.0)</div>
                        </div>
                        <div className={styles.parent}>
                          <b className={styles.b}>$28.85</b>
                          <div className={styles.sphereCluster}>
                            <b className={styles.b1}>$32.8</b>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className={styles.link1}>
                      <img className={styles.icon1} alt="" src="/icon-3.svg" />
                      <b className={styles.add1}>Add</b>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <SectionTabpanel
              divproductImg="/divproductimg-1@2x.png"
              divproductRate="/divproductrate-1@2x.png"
            />
            <SectionTabpanel
              divproductImg="/divproductimg-2@2x.png"
              divproductRate="/divproductrate-1@2x.png"
              propMinWidth="229px"
              propAlignSelf="stretch"
              propColor="#3bb77e"
            />
            <Layout1
              icon="/icon-7.svg"
              divproductImg1="/divproductimg-3@2x.png"
            />
            <Layout divproductImg="/divproductimg-4@2x.png" />
          </div>
        </div>
        <div className={styles.animation}>
          <SectionTabpanel
            divproductImg="/divproductimg-5@2x.png"
            divproductRate="/divproductrate@2x.png"
            propMinWidth="unset"
            propAlignSelf="unset"
            propColor="#0d6efd"
          />
          <SectionTabpanel
            divproductImg="/divproductimg-6@2x.png"
            divproductRate="/divproductrate-1@2x.png"
            propMinWidth="unset"
            propAlignSelf="unset"
            propColor="#0d6efd"
          />
          <SectionTabpanel
            divproductImg="/divproductimg-7@2x.png"
            divproductRate="/divproductrate-1@2x.png"
            propMinWidth="unset"
            propAlignSelf="unset"
            propColor="#0d6efd"
          />
          <Layout1
            icon="/icon-13.svg"
            divproductImg1="/divproductimg-8@2x.png"
            propMinWidth="unset"
            propColor="#0d6efd"
            propBackgroundColor="#0d6efd"
            propColor1="#0d6efd"
            propColor2="#0d6efd"
          />
          <Layout
            divproductImg="/divproductimg-9@2x.png"
            propMinWidth="unset"
            propColor="#0d6efd"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
