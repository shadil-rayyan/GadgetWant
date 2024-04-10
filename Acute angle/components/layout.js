import { useMemo } from "react";
import styles from "./layout.module.css";

const Layout = ({ divproductImg, propMinWidth, propColor }) => {
  const layout1Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const b3Style = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={styles.layout} style={layout1Style}>
      <div className={styles.sectionTabpanel}>
        <div className={styles.divproductImgWrapper}>
          <img
            className={styles.divproductImgIcon}
            alt=""
            src={divproductImg}
          />
        </div>
        <div className={styles.heading2LinkSeedsOfChParent}>
          <b className={styles.heading2Container}>
            <p className={styles.seedsOfChange}>Seeds of Change</p>
            <p className={styles.organicQuinoe}>Organic Quinoe</p>
          </b>
          <div className={styles.frameWrapper}>
            <div className={styles.frameParent}>
              <div className={styles.frameContainer}>
                <div className={styles.starConfiguratorParent}>
                  <div className={styles.starConfigurator}>
                    <div className={styles.divproductRateWrapper}>
                      <img
                        className={styles.divproductRateIcon}
                        alt=""
                        src="/divproductrate-1@2x.png"
                      />
                    </div>
                    <div className={styles.div}>(4.0)</div>
                  </div>
                  <div className={styles.parent}>
                    <b className={styles.b} style={b3Style}>
                      $28.85
                    </b>
                    <div className={styles.sphereCluster}>
                      <b className={styles.b1}>$32.8</b>
                    </div>
                  </div>
                </div>
              </div>
              <button className={styles.link}>
                <img className={styles.icon} alt="" src="/icon-3.svg" />
                <b className={styles.add}>Add</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
