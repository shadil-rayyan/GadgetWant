const FrameComponent3 = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-[34.4px] pr-[33px] pl-8 box-border max-w-full text-left text-53xl text-darkslategray font-quicksand">
      <div className="flex-1 flex flex-col items-start justify-start gap-[43px] max-w-full mq750:gap-[21px]">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-4 box-border max-w-full">
          <div className="flex-1 bg-lightskyblue-200 flex flex-col items-start justify-start pt-[55.5px] px-[13px] pb-[19px] box-border gap-[59px] max-w-full mq750:gap-[29px] mq750:pt-9 mq750:pb-5 mq750:box-border">
            <div className="self-stretch h-[501px] relative bg-lightskyblue-200 hidden" />
            <div className="w-[1306px] flex flex-col items-start justify-start gap-[15.5px] max-w-full">
              <div className="flex flex-row items-start justify-start py-0 pr-[78px] pl-[78.2px] box-border max-w-full mq750:pl-[39px] mq750:pr-[39px] mq750:box-border">
                <h1 className="m-0 h-[162px] relative text-inherit leading-[72px] font-bold font-inherit flex items-center z-[1] mq450:text-24xl mq450:leading-[43px] mq1050:text-39xl mq1050:leading-[58px]">
                  <span>
                    <p className="m-0">Fresh Vegetables</p>
                    <p className="m-0">Big discount</p>
                  </span>
                </h1>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-11xl text-gray-200 font-lato mq750:flex-wrap">
                <div className="w-[572.2px] flex flex-row items-end justify-start gap-[41.2px] max-w-full mq750:flex-wrap mq750:gap-[21px]">
                  <img
                    className="h-[45px] w-[37px] relative rounded-3xl-5 z-[1]"
                    loading="lazy"
                    alt=""
                    src="/arrow-left.svg"
                  />
                  <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[5.5px] box-border min-w-[321px] max-w-full">
                    <h1 className="m-0 relative text-inherit leading-[24px] font-normal font-inherit z-[1] mq450:text-lg mq450:leading-[14px] mq1050:text-5xl mq1050:leading-[19px]">
                      Save up to 50% off on your first order
                    </h1>
                  </div>
                </div>
                <img
                  className="h-[45px] w-[37px] relative rounded-3xl-5 z-[1]"
                  loading="lazy"
                  alt=""
                  src="/arrow-right.svg"
                />
              </div>
            </div>
            <div className="w-[606px] flex flex-row items-start justify-start pt-0 px-[78px] pb-[7px] box-border max-w-full mq750:pl-[39px] mq750:pr-[39px] mq750:box-border">
              <div className="flex-1 rounded-31xl bg-white flex flex-row flex-wrap items-center justify-start py-0 px-0 box-border max-w-full [row-gap:20px] z-[1]">
                <input
                  className="w-full [border:none] [outline:none] bg-[transparent] h-16 flex-1 rounded-tl-31xl rounded-tr-none rounded-br-none rounded-bl-31xl flex flex-col items-end justify-center py-[22.5px] px-[58px] box-border bg-[url('/input1@3x.png')] bg-cover bg-no-repeat bg-[top] font-lato text-base text-gray-100 min-w-[190px]"
                  placeholder="Your emaill address"
                  type="text"
                />
                <button className="cursor-pointer [border:none] py-[22px] px-10 bg-steelblue-200 w-[157.6px] rounded-31xl flex flex-col items-center justify-center box-border hover:bg-steelblue-100">
                  <div className="self-stretch h-5 relative text-base tracking-[0.5px] leading-[24px] font-medium font-quicksand text-white text-center flex items-center justify-center shrink-0 min-w-[77.9px]">
                    Subscribe
                  </div>
                </button>
              </div>
            </div>
            <div className="w-[1265px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <div className="h-[15px] w-[13px] relative rounded-11xl box-border z-[1] border-[1px] border-solid border-darkslategray" />
            </div>
          </div>
        </div>
        <h1 className="m-0 relative text-13xl leading-[40px] font-bold font-inherit mq450:text-lgi mq450:leading-[23px] mq1050:text-7xl mq1050:leading-[31px]">
          Shop by Categories
        </h1>
      </div>
    </section>
  );
};

export default FrameComponent3;
