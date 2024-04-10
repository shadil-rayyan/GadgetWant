import FrameComponent8 from "../components/frame-component8";
import FrameComponent6 from "../components/frame-component6";
import FrameComponent5 from "../components/frame-component5";
import styles from "./admin-dashboard.module.css";

const AdminDashboard = () => {
  return (
    <div className={styles.adminDashboard}>
      <img
        className={styles.leftSidebarIcon}
        loading="lazy"
        alt=""
        src="/left-sidebar.svg"
      />
      <main className={styles.frameParent}>
        <FrameComponent8 />
        <section className={styles.frameGroup}>
          <FrameComponent6 />
          <FrameComponent5 />
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
