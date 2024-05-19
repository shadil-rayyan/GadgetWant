import FrameComponent8 from "../components/frame-component8";
import FrameComponent7 from "../components/frame-component6";
import FrameComponent51 from "../components/frame-component5";

const AdminDashboard = () => {
  return (
    <div className="w-full relative bg-whitesmoke-200 overflow-hidden flex flex-row items-start justify-start py-0 pr-3.5 pl-[130px] box-border gap-[16px] leading-[normal] tracking-[normal] mq1350:flex-wrap mq1350:pl-[65px] mq1350:box-border mq800:pl-8 mq800:box-border">
      <img
        className="ml-[-153px] h-[1369px] w-[137px] relative shrink-0 [debug_commit:f6aba90]"
        loading="lazy"
        alt=""
        src="/left-sidebar.svg"
      />
      <main className="h-[1340px] w-[1296px] flex flex-col items-start justify-start pt-[394px] px-0 pb-0 box-border gap-[79px] shrink-0 [debug_commit:f6aba90] mq1350:pt-64 mq1350:box-border mq800:gap-[39px] mq800:pt-[166px] mq800:box-border mq450:gap-[20px] mq1125:h-auto">
        <FrameComponent8 />
        <section className="self-stretch flex flex-col items-start justify-start gap-[29px] shrink-0 [debug_commit:f6aba90]">
          <FrameComponent7 />
          <FrameComponent51 />
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
