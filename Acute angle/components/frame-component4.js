import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./frame-component4.module.css";

const FrameComponent4 = () => {
  const router = useRouter();

  const onAcconutIconClick = useCallback(() => {
    router.push("/admin-dashboard");
  }, [router]);

  return (
    <header className={styles.numberCruncherWrapper}>
      <div className={styles.numberCruncher}>
        <div className={styles.webnameAndLogoWrapper}>
          <div className={styles.webnameAndLogo}>
            <img
              className={styles.logoIcon}
              loading="lazy"
              alt=""
              src="/logo@2x.png"
            />
            <h2 className={styles.gadgetsNeed}>Gadgets Need</h2>
          </div>
        </div>
        <div className={styles.joiner}>
          <div className={styles.searchForItemBox}>
            <div className={styles.mapper}>
              <div className={styles.options}>
                <div className={styles.div}>
                  <b className={styles.allCategories}>All Categories</b>
                </div>
                <b className={styles.allCategories1}>All Categories</b>
              </div>
            </div>
            <div className={styles.selector}>
              <img
                className={styles.icon}
                loading="lazy"
                alt=""
                src="/icon.svg"
              />
            </div>
            <input
              className={styles.input}
              placeholder="Search for items..."
              type="text"
            />
          </div>
          <div className={styles.encoderDecoder}>
            <div className={styles.encoderDecoderParser}>
              <div className={styles.comparator}>
                <div className={styles.youLocationText}>
                  <img className={styles.icon1} alt="" src="/icon-1.svg" />
                  <div className={styles.yourLocation}>Your Location</div>
                  <div className={styles.filterMapper}>
                    <img className={styles.icon2} alt="" src="/icon-2.svg" />
                  </div>
                </div>
              </div>
              <div className={styles.encoderDecoderParserInner}>
                <div className={styles.forestParent}>
                  <div className={styles.forest}>
                    <div className={styles.loopBranch}>
                      <img
                        className={styles.headerIcon}
                        loading="lazy"
                        alt=""
                        src="/header@2x.png"
                      />
                      <div className={styles.header}>
                        <div className={styles.div1}>6</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.header1}>Wishlist</div>
                </div>
              </div>
              <div className={styles.encoderDecoderParserChild}>
                <div className={styles.frameParent}>
                  <div className={styles.headerParent}>
                    <div className={styles.header2}>
                      <div className={styles.div2}>2</div>
                    </div>
                    <div className={styles.iconCartsvgParent}>
                      <img
                        className={styles.iconCartsvg}
                        loading="lazy"
                        alt=""
                        src="/iconcartsvg@2x.png"
                      />
                      <div className={styles.headerWrapper}>
                        <div className={styles.header3}>Cart</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.graphLoopParent}>
                    <div className={styles.graphLoop}>
                      <img
                        className={styles.acconutIcon}
                        loading="lazy"
                        alt=""
                        src="/acconut@2x.png"
                        onClick={onAcconutIconClick}
                      />
                    </div>
                    <div className={styles.acconut}>Account</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent4;
