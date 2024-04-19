import { useMemo } from "react";

const FrameComponent71 = ({ propWidth, propFlex }) => {
  const frameDiv1Style = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
    };
  }, [propWidth, propFlex]);

  return (
    <div
      className="w-[617px] flex flex-row items-end justify-between gap-[20px] max-w-full text-right text-sm text-typography-2 font-inter mq800:flex-wrap"
      style={frameDiv1Style}
    >
      <div className="flex flex-row items-end justify-start gap-[13px] text-left">
        <div className="h-[68px] w-[59px] flex flex-col items-start justify-end pt-0 px-0 pb-[19px] box-border">
          <img
            className="self-stretch flex-1 relative rounded-[50%] max-w-full overflow-hidden max-h-full object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/ellipse-5@2x.png"
          />
        </div>
        <div className="relative leading-[88px] inline-block min-w-[107px] z-[1]">
          Deco accessory
        </div>
      </div>
      <div className="w-[54px] flex flex-col items-start justify-end pt-0 pb-1.5 pr-3 pl-0 box-border">
        <div className="self-stretch relative leading-[88px] inline-block min-w-[42px] whitespace-nowrap z-[1]">
          $21.19
        </div>
      </div>
      <div className="w-[52px] flex flex-col items-start justify-end pt-0 pb-[5px] pr-[25px] pl-0 box-border">
        <div className="self-stretch relative leading-[88px] inline-block min-w-[27px] z-[1]">
          409
        </div>
      </div>
      <div className="w-[62px] relative leading-[88px] flex items-center min-w-[62px] whitespace-nowrap z-[1]">
        $1822.87
      </div>
    </div>
  );
};

export default FrameComponent71;
