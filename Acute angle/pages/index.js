import FrameComponent4 from "../components/frame-component4";
import FrameComponent3 from "../components/frame-component3";
import TableTable from "../components/table-table";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import Modification from "../components/modification";
import styles from "./index.module.css";

const Desktop = () => {
  return (
    <div className={styles.desktop1}>
      <FrameComponent4 />
      <FrameComponent3 />
      <TableTable />
      <section className={styles.shapeTransformerWrapper}>
        <div className={styles.shapeTransformer}>
          <FrameComponent2 />
          <FrameComponent1 />
        </div>
      </section>
      <FrameComponent />
      <Modification />
    </div>
  );
};

export default Desktop;
