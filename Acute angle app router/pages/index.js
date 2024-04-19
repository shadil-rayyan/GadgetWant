import FrameComponent41 from "../components/frame-component4";
import FrameComponent3 from "../components/frame-component3";
import TableTable from "../components/table-table";
import FrameComponent1 from "../components/frame-component2";
import FrameComponent4 from "../components/frame-component1";
import FrameComponent5 from "../components/frame-component";
import Modification from "../components/modification";

const Desktop = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[34px] pb-[67px] pr-[1.5px] pl-0.5 box-border gap-[29.6px] leading-[normal] tracking-[normal]">
      <FrameComponent41 />
      <FrameComponent3 />
      <TableTable />
      <section className="self-stretch flex flex-row items-start justify-end pt-0 px-10 pb-[75.9px] box-border max-w-full lg:pb-[49px] lg:box-border mq750:pb-8 mq750:box-border">
        <div className="w-[1335.3px] flex flex-col items-start justify-start gap-[60px] max-w-full mq750:gap-[30px]">
          <FrameComponent1 />
          <FrameComponent4 />
        </div>
      </section>
      <FrameComponent5 />
      <Modification />
    </div>
  );
};

export default Desktop;
