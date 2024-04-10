import styles from "./table-table.module.css";

const TableTable = () => {
  return (
    <section className={styles.tableTable}>
      <div className={styles.categporiesNavogation}>
        <div className={styles.divcard1}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <div className={styles.heading6LinkMilksAndWrapper}>
            <b className={styles.heading6}>{`Home `}</b>
          </div>
        </div>
        <div className={styles.divcard11}>
          <img className={styles.vectorIcon1} alt="" src="/vector-1.svg" />
          <div className={styles.heading6LinkWinesWrapper}>
            <b className={styles.heading61}>Travelling</b>
          </div>
        </div>
        <div className={styles.divcard12}>
          <img
            className={styles.figureIcon}
            loading="lazy"
            alt=""
            src="/figure@2x.png"
          />
          <div className={styles.heading6LinkClothingWrapper}>
            <b className={styles.heading6Container}>
              <p className={styles.clothing}>{`Clothing &`}</p>
              <p className={styles.beauty}>Beauty</p>
            </b>
          </div>
        </div>
        <div className={styles.divcard13}>
          <img className={styles.vectorIcon2} alt="" src="/vector-2.svg" />
          <div className={styles.heading6LinkPetFoodsWrapper}>
            <b className={styles.heading62}>Gift item</b>
          </div>
        </div>
        <div className={styles.divcard14}>
          <img className={styles.figureIcon1} alt="" src="/figure-1.svg" />
          <div className={styles.heading6LinkPackagedWrapper}>
            <b className={styles.heading63}>Pet accesooried</b>
          </div>
        </div>
        <div className={styles.divcard15}>
          <img className={styles.figureIcon2} alt="" src="/figure-2@2x.png" />
          <div className={styles.heading6LinkBakingWrapper}>
            <b className={styles.heading64}>Kitchen finds</b>
          </div>
        </div>
        <div className={styles.divcard16}>
          <img className={styles.figureIcon3} alt="" src="/figure-3@2x.png" />
          <div className={styles.heading6LinkVegetablesWrapper}>
            <b className={styles.heading65}>Decoration</b>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TableTable;
