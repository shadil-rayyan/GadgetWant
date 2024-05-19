import SectionTabpanel from "./section-tabpanel";
import Layout11 from "./layout1";
import Layout1 from "./layout";

const FrameComponent1 = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-[43px] max-w-full text-left text-13xl text-darkslategray font-quicksand mq750:gap-[21px]">
      <div className="flex flex-row items-start justify-start py-0 px-0.5">
        <h1 className="m-0 relative text-inherit leading-[40px] font-bold font-inherit mq450:text-lgi mq450:leading-[23px] mq1050:text-7xl mq1050:leading-[31px]">
          Popular Products
        </h1>
      </div>
      <div className="w-[1271.6px] overflow-x-auto flex flex-col items-start justify-start gap-[30px] max-w-full text-sm font-lato">
        <div className="w-[1271.6px] flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border">
          <div className="flex-1 flex flex-row items-start justify-start gap-[25.4px] max-w-full">
            <div className="flex-[0.8416] rounded-mini bg-white box-border overflow-hidden flex flex-col items-end justify-start pt-[45.6px] pb-[21px] pr-5 pl-[15px] gap-[48.4px] min-w-[229px] max-w-[234px] text-white border-[1px] border-solid border-whitesmoke-300 mq450:pt-[30px] mq450:pb-5 mq450:box-border">
              <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[5px] pl-2.5">
                <img
                  className="h-[181.6px] w-[181.6px] relative rounded-mini overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/divproductimg@2x.png"
                />
              </div>
              <div className="h-9 rounded bg-royalblue hidden flex-row items-start justify-start py-[9px] px-5 box-border gap-[5px]">
                <img
                  className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
                  alt=""
                  src="/icon-3.svg"
                />
                <b className="relative leading-[17px] inline-block min-w-[26.3px]">
                  Add
                </b>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[15px] text-base text-darkslategray font-quicksand">
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
                              src="/divproductrate@2x.png"
                            />
                          </div>
                          <div className="relative leading-[17px] inline-block min-w-[28px]">
                            (4.0)
                          </div>
                        </div>
                        <div className="flex flex-row items-end justify-start gap-[10.4px] text-lg text-royalblue font-quicksand">
                          <b className="relative leading-[24px] inline-block min-w-[56px] whitespace-nowrap">
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
                    <button className="cursor-pointer [border:none] pt-[9px] pb-2.5 pr-[19.6px] pl-5 bg-royalblue rounded flex flex-row items-start justify-start gap-[5px] shrink-0 [debug_commit:f6aba90] z-[1] hover:bg-dodgerblue">
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
            <SectionTabpanel
              divproductImg="/divproductimg-1@2x.png"
              divproductRate="/divproductrate-1@2x.png"
            />
            <SectionTabpanel
              divproductImg="/divproductimg-2@2x.png"
              divproductRate="/divproductrate-1@2x.png"
              propMinWidth="229px"
              propAlignSelf="stretch"
              propColor="#3bb77e"
            />
            <Layout11
              icon="/icon-7.svg"
              divproductImg1="/divproductimg-3@2x.png"
            />
            <Layout1 divproductImg="/divproductimg-4@2x.png" />
          </div>
        </div>
        <div className="w-[1269.6px] flex flex-row items-start justify-start gap-[25.4px]">
          <SectionTabpanel
            divproductImg="/divproductimg-5@2x.png"
            divproductRate="/divproductrate@2x.png"
            propMinWidth="unset"
            propAlignSelf="unset"
            propColor="#0d6efd"
          />
          <SectionTabpanel
            divproductImg="/divproductimg-6@2x.png"
            divproductRate="/divproductrate-1@2x.png"
            propMinWidth="unset"
            propAlignSelf="unset"
            propColor="#0d6efd"
          />
          <SectionTabpanel
            divproductImg="/divproductimg-7@2x.png"
            divproductRate="/divproductrate-1@2x.png"
            propMinWidth="unset"
            propAlignSelf="unset"
            propColor="#0d6efd"
          />
          <Layout11
            icon="/icon-13.svg"
            divproductImg1="/divproductimg-8@2x.png"
            propMinWidth="unset"
            propColor="#0d6efd"
            propBackgroundColor="#0d6efd"
            propColor1="#0d6efd"
            propColor2="#0d6efd"
          />
          <Layout1
            divproductImg="/divproductimg-9@2x.png"
            propMinWidth="unset"
            propColor="#0d6efd"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
