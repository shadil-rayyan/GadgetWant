import { useMemo } from "react";
import styles from "./layout1.module.css";

const Layout1 = ({
  icon,
  divproductImg1,
  propMinWidth,
  propColor,
  propBackgroundColor,
  propColor1,
  propColor2,
}) => {
  const layoutStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const b1Style = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const linkStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const addStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const b2Style = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  return (
    <div className={styles.layout} style={layoutStyle}>
      <div className={styles.sectionTabpanel}>
        <img
          className={styles.divproductImgIcon}
          alt=""
          src="/divproductimg@2x.png"
        />
        <div className={styles.spanhot}>
          <div className={styles.hot}>Hot</div>
        </div>
        <div className={styles.linkSnack}>Snack</div>
        <b className={styles.heading2Container}>
          <p className={styles.seedsOfChange}>Seeds of Change</p>
          <p className={styles.organicQuinoe}>Organic Quinoe</p>
        </b>
        <img
          className={styles.divproductRateIcon}
          alt=""
          src="/divproductrate-1@2x.png"
        />
        <div className={styles.div}>(4.0)</div>
        <b className={styles.b} style={b1Style}>
          $28.85
        </b>
        <b className={styles.b1}>$32.8</b>
        <div className={styles.link} style={linkStyle}>
          <img className={styles.icon} alt="" src={icon} />
          <b className={styles.add} style={addStyle}>
            Add
          </b>
        </div>
        <div className={styles.sectionTabpanel1}>
          <div className={styles.divproductImgActionWrap}>
            <img
              className={styles.divproductImgIcon1}
              alt=""
              src={divproductImg1}
            />
          </div>
          <div className={styles.connectors}>
            <div className={styles.heading2LinkSeedsOfChParent}>
              <b className={styles.heading2Container1}>
                <p className={styles.seedsOfChange1}>Seeds of Change</p>
                <p className={styles.organicQuinoe1}>Organic Quinoe</p>
              </b>
              <div className={styles.frameWrapper}>
                <div className={styles.frameParent}>
                  <div className={styles.frameContainer}>
                    <div className={styles.starConfiguratorParent}>
                      <div className={styles.starConfigurator}>
                        <div className={styles.divproductRateWrapper}>
                          <img
                            className={styles.divproductRateIcon1}
                            alt=""
                            src="/divproductrate-1@2x.png"
                          />
                        </div>
                        <div className={styles.div1}>(4.0)</div>
                      </div>
                      <div className={styles.parent}>
                        <b className={styles.b2} style={b2Style}>
                          $28.85
                        </b>
                        <div className={styles.sphereCluster}>
                          <b className={styles.b3}>$32.8</b>
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
        </div>
      </div>
    </div>
  );
};

export default Layout1;
