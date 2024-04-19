import { useMemo } from "react";

const LayoutGrid = ({ sold, propMinWidth }) => {
  const soldStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="flex flex-row items-start justify-start gap-[13px] text-left text-5xl text-typography-3 font-inter">
      <div className="flex flex-col items-start justify-start pt-6 px-0 pb-0">
        <img
          className="w-8 h-10 relative z-[1]"
          loading="lazy"
          alt=""
          src="/sort.svg"
        />
      </div>
      <h2
        className="m-0 relative text-inherit leading-[88px] font-semibold font-inherit inline-block min-w-[52px] z-[1]"
        style={soldStyle}
      >
        {sold}
      </h2>
    </div>
  );
};

export default LayoutGrid;
