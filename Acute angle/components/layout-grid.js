import { useMemo } from "react";
import styles from "./layout-grid.module.css";

const LayoutGrid = ({ sold, propMinWidth }) => {
  const soldStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.layoutGrid}>
      <div className={styles.sortWrapper}>
        <img
          className={styles.sortIcon}
          loading="lazy"
          alt=""
          src="/sort.svg"
        />
      </div>
      <h2 className={styles.sold} style={soldStyle}>
        {sold}
      </h2>
    </div>
  );
};

export default LayoutGrid;
