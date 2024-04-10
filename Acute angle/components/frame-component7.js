import { useMemo } from "react";
import styles from "./frame-component7.module.css";

const FrameComponent7 = ({ propWidth, propFlex }) => {
  const frameDiv1Style = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
    };
  }, [propWidth, propFlex]);

  return (
    <div className={styles.frameParent} style={frameDiv1Style}>
      <div className={styles.frameGroup}>
        <div className={styles.ellipseWrapper}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/ellipse-5@2x.png"
          />
        </div>
        <div className={styles.decoAccessory}>Deco accessory</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.div}>$21.19</div>
      </div>
      <div className={styles.container}>
        <div className={styles.div1}>409</div>
      </div>
      <div className={styles.div2}>$1822.87</div>
    </div>
  );
};

export default FrameComponent7;
