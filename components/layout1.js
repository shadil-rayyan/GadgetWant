import { useMemo } from "react";

const Layout11 = ({
  icon,
  divproductImg1,
  propMinWidth,
  propColor,
  propBackgroundColor,
  propColor1,
  propColor2,
}) => {
  const layoutStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const b1Style = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const linkStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const addStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const b2Style = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  return (
    <div
      className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[229px] max-w-[234px] text-left text-sm text-darkgray font-lato"
      style={layoutStyle}
    >
      <div className="self-stretch rounded-mini bg-white overflow-hidden flex flex-row items-start justify-start border-[1px] border-solid border-whitesmoke-300">
        <img
          className="h-[181.6px] w-[181.6px] relative rounded-mini overflow-hidden shrink-0 object-cover hidden"
          alt=""
          src="/divproductimg1@2x.png"
        />
        <div className="h-[31px] w-[60.2px] rounded-tl-mini rounded-tr-none rounded-br-xl rounded-bl-none bg-hotpink hidden flex-col items-center justify-start py-[7px] px-0 box-border text-xs text-white">
          <div className="relative leading-[15px] inline-block min-w-[20.6px]">
            Hot
          </div>
        </div>
        <div className="h-[15px] relative text-xs leading-[24px] hidden items-center min-w-[31.4px]">
          Snack
        </div>
        <b className="relative text-base leading-[19.2px] hidden font-quicksand text-darkslategray">
          <p className="m-0">Seeds of Change</p>
          <p className="m-0">Organic Quinoe</p>
        </b>
        <img
          className="h-3 w-[60px] relative object-cover hidden"
          alt=""
          src="/divproductrate-1@2x.png"
        />
        <div className="h-[17px] relative leading-[24px] text-silver hidden items-center min-w-[28px]">
          (4.0)
        </div>
        <b
          className="relative text-lg leading-[24px] hidden font-quicksand text-mediumseagreen min-w-[56px] whitespace-nowrap"
          style={b1Style}
        >
          $28.85
        </b>
        <b className="h-[18px] relative [text-decoration:line-through] leading-[24px] hidden font-quicksand items-center min-w-[35.3px] whitespace-nowrap">
          $32.8
        </b>
        <div
          className="h-9 rounded bg-honeydew hidden flex-row items-start justify-start py-[9px] px-5 box-border gap-[5px] text-mediumseagreen"
          style={linkStyle}
        >
          <img
            className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
            alt=""
            src={icon}
          />
          <b
            className="relative leading-[17px] inline-block min-w-[26.3px]"
            style={addStyle}
          >
            Add
          </b>
        </div>
        <div className="flex-1 rounded-mini bg-white overflow-hidden flex flex-col items-start justify-start pt-[20.6px] px-0 pb-[21px] gap-[48.4px] z-[2] text-base text-darkslategray font-quicksand border-[1px] border-solid border-whitesmoke-300 mq450:pt-5 mq450:pb-5 mq450:box-border">
          <div className="self-stretch bg-white overflow-hidden flex flex-row items-start justify-start pt-[25px] px-[25px] pb-0">
            <img
              className="h-[181.6px] w-[181.6px] relative rounded-mini overflow-hidden shrink-0 object-cover"
              alt=""
              src={divproductImg1}
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-5 pl-[15px]">
            <div className="flex-1 flex flex-col items-start justify-start gap-[15px]">
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
                          style={b2Style}
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
      </div>
    </div>
  );
};

export default Layout11;
