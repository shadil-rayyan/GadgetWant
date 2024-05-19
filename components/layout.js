import { useMemo } from "react";

const Layout1 = ({ divproductImg, propMinWidth, propColor }) => {
  const layout1Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const b3Style = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div
      className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[229px] max-w-[234px] text-left text-base text-darkslategray font-quicksand"
      style={layout1Style}
    >
      <div className="self-stretch rounded-mini bg-white overflow-hidden flex flex-col items-end justify-start pt-[45.6px] pb-[21px] pr-5 pl-[15px] gap-[48.4px] border-[1px] border-solid border-whitesmoke-300 mq450:pt-[30px] mq450:pb-5 mq450:box-border">
        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[5px] pl-2.5">
          <img
            className="h-[181.6px] w-[181.6px] relative rounded-mini overflow-hidden shrink-0 object-cover"
            alt=""
            src={divproductImg}
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
          <b className="relative leading-[19.2px]">
            <p className="m-0">Seeds of Change</p>
            <p className="m-0">Organic Quinoe</p>
          </b>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[5px] text-sm text-silver font-lato">
            <div className="flex-1 flex flex-row items-end justify-start gap-[5px]">
              <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-2">
                <div className="flex flex-col items-start justify-start gap-[2.4px] shrink-0 [debug_commit:f6aba90]">
                  <div className="w-[98px] flex flex-row items-start justify-start gap-[10px]">
                    <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                      <img
                        className="self-stretch h-3 relative max-w-full overflow-hidden shrink-0 object-cover"
                        alt=""
                        src="/divproductrate-1@2x.png"
                      />
                    </div>
                    <div className="relative leading-[17px] inline-block min-w-[28px]">
                      (4.0)
                    </div>
                  </div>
                  <div className="flex flex-row items-end justify-start gap-[10.4px] text-lg text-mediumseagreen font-quicksand">
                    <b
                      className="relative leading-[24px] inline-block min-w-[56px] whitespace-nowrap"
                      style={b3Style}
                    >
                      $28.85
                    </b>
                    <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px text-sm text-darkgray">
                      <b className="h-[18px] relative [text-decoration:line-through] leading-[24px] flex items-center shrink-0 min-w-[35.3px] whitespace-nowrap">
                        $32.8
                      </b>
                    </div>
                  </div>
                </div>
              </div>
              <button className="cursor-pointer [border:none] pt-[9px] pb-2.5 pr-[19.6px] pl-5 bg-royalblue rounded flex flex-row items-start justify-start gap-[5px] shrink-0 [debug_commit:f6aba90] hover:bg-dodgerblue">
                <img
                  className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
                  alt=""
                  src="/icon-3.svg"
                />
                <b className="relative text-sm leading-[17px] inline-block font-lato text-white text-left min-w-[26.3px]">
                  Add
                </b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout1;
