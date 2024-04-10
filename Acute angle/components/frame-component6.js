import LayoutGrid from "./layout-grid";
import FrameComponent7 from "./frame-component7";
import styles from "./frame-component6.module.css";

const FrameComponent6 = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.revenueByDeviceParent}>
            <h3 className={styles.revenueByDevice}>Revenue by device</h3>
            <div className={styles.frameContainer}>
              <div className={styles.moreParent}>
                <h3 className={styles.more}>More</h3>
                <div className={styles.arrowRightWrapper}>
                  <img
                    className={styles.arrowRightIcon}
                    loading="lazy"
                    alt=""
                    src="/arrowright.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.frameGroup}>
              <div className={styles.frameWrapper1}>
                <div className={styles.frameParent1}>
                  <div className={styles.ellipseParent}>
                    <div className={styles.frameItem} />
                    <div className={styles.dataAggregator}>
                      <div className={styles.filterParent} />
                      <div className={styles.filterParent1} />
                      <div className={styles.valueSetter}>64%</div>
                    </div>
                  </div>
                  <div className={styles.frameInner} />
                </div>
              </div>
              <div className={styles.dataComparer}>
                <div className={styles.inputProcessor}>
                  <div className={styles.outputCollector}>
                    <div className={styles.outputCollectorInner}>
                      <div className={styles.ellipseDiv} />
                    </div>
                    <div className={styles.desktop}>Desktop</div>
                  </div>
                  <div className={styles.nestedBranch}>
                    <div className={styles.sortedDataWrapper}>
                      <div className={styles.sortedData} />
                    </div>
                    <div className={styles.mobile}>Mobile</div>
                  </div>
                </div>
                <div className={styles.inputMap}>
                  <div className={styles.outputMap}>
                    <div className={styles.dataTransformer}>
                      <div className={styles.div}>$830.03</div>
                    </div>
                    <div className={styles.wrapper}>
                      <div className={styles.div1}>$755.75</div>
                    </div>
                  </div>
                  <div className={styles.frameParent2}>
                    <div className={styles.errorHandlingWrapper}>
                      <div className={styles.errorHandling}>64.2%</div>
                    </div>
                    <div className={styles.dataStorage}>
                      <div className={styles.dataRetrieval}>48.6%</div>
                    </div>
                  </div>
                </div>
                <div className={styles.dataValidation} />
                <div className={styles.dataProcessing}>
                  <div className={styles.dataOutput}>
                    <div className={styles.dataInputWrapper}>
                      <div className={styles.dataInput} />
                    </div>
                    <div className={styles.dataOutput1}>
                      <div className={styles.tablet}>Tablet</div>
                    </div>
                    <div className={styles.dataStreams}>$550.81</div>
                  </div>
                  <div className={styles.dataBuffers}>
                    <div className={styles.dataFormats}>
                      <div className={styles.dataIntegration} />
                    </div>
                    <div className={styles.dataSynchronization}>
                      <div className={styles.unknown}>Unknown</div>
                    </div>
                    <div className={styles.dataFiltering}>$150.84</div>
                  </div>
                </div>
                <div className={styles.dataSorting}>
                  <div className={styles.div2}>15.3%</div>
                  <div className={styles.dataIndexing}>
                    <div className={styles.dataSearching}>8.6%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dataMerging}>
          <div className={styles.dataSplitting}>
            <div className={styles.dataCombining} />
            <div className={styles.dataCombining1} />
            <div className={styles.dataMapping}>
              <img
                className={styles.dataMappingChild}
                alt=""
                src="/rectangle-346.svg"
              />
              <div className={styles.dataRouting}>
                <div className={styles.dataSlicing}>
                  <div className={styles.dataDicing}>
                    <h2 className={styles.product}>Product</h2>
                  </div>
                  <h2 className={styles.price}>Price</h2>
                  <LayoutGrid sold="Sold" />
                  <div className={styles.frameParent3}>
                    <LayoutGrid sold="Profit" propMinWidth="64px" />
                    <div className={styles.sortWrapper}>
                      <img
                        className={styles.sortIcon}
                        loading="lazy"
                        alt=""
                        src="/sort.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.dataRoutingInner}>
                  <div className={styles.frameParent4}>
                    <div className={styles.ellipseWrapper}>
                      <img
                        className={styles.ellipseIcon}
                        loading="lazy"
                        alt=""
                        src="/ellipse-5@2x.png"
                      />
                    </div>
                    <div className={styles.decoAccessoryWrapper}>
                      <div className={styles.decoAccessory}>Deco accessory</div>
                    </div>
                    <div className={styles.container}>
                      <div className={styles.div3}>$21.19</div>
                    </div>
                    <div className={styles.frame}>
                      <div className={styles.div4}>409</div>
                    </div>
                    <div className={styles.div5}>$1822.87</div>
                  </div>
                </div>
              </div>
              <FrameComponent7 />
              <div className={styles.dataMappingInner}>
                <FrameComponent7 propWidth="unset" propFlex="1" />
              </div>
            </div>
            <div className={styles.dataCombining2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent6;
