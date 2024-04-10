import { useMemo } from "react";
import styles from "./section-tabpanel.module.css";

const SectionTabpanel = ({
  divproductImg,
  divproductRate,
  propMinWidth,
  propAlignSelf,
  propColor,
}) => {
  const sectionTabpanelStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const bStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={styles.sectionTabpanel} style={sectionTabpanelStyle}>
      <div className={styles.divproductImgWrapper} style={frameDivStyle}>
        <img className={styles.divproductImgIcon} alt="" src={divproductImg} />
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
                      src={divproductRate}
                    />
                  </div>
                  <div className={styles.div}>(4.0)</div>
                </div>
                <div className={styles.parent}>
                  <b className={styles.b} style={bStyle}>
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
  );
};

export default SectionTabpanel;
