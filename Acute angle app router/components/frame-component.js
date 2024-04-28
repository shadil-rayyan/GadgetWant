import React from "react";

const FrameComponent5 = () => {
  return (
    <section className="w-full md:w-[1514px] flex flex-col md:flex-row items-start justify-start pt-0 px-0 pb-[42.4px] box-border max-w-[105%] shrink-0 text-left text-21xl text-darkslategray font-quicksand mq450:pb-7 mq450:box-border">
      <div className="flex-1 rounded-xl overflow-hidden flex flex-col items-start justify-start py-[34px] px-[23px] box-border max-w-full mq450:pt-[22px] mq450:pb-[22px] mq450:box-border">
        <div className="w-full md:w-[1385px] bg-lightskyblue-100 flex flex-col items-start justify-start pt-[49px] px-[19px] pb-[39px] box-border gap-[46px] max-w-full mq750:gap-[23px]">
          <div className="w-full h-[338px] md:w-[1385px] md:h-[338px] relative bg-lightskyblue-100 hidden max-w-full" />
          <div className="flex flex-row items-start justify-start py-0 px-9 box-border max-w-full">
            <div className="flex flex-col items-start justify-start gap-[20px] max-w-full">
              <h1 className="m-0 relative text-inherit leading-[48px] font-bold font-inherit z-[1] mq450:text-5xl mq450:leading-[29px] mq1050:text-13xl mq1050:leading-[38px]">
                <p className="m-0">{`Stay home & get your daily`}</p>
                <p className="m-0">needs from our shop</p>
              </h1>
              <div className="w-full md:w-[378px] relative text-lg leading-[24px] font-lato text-gray-200 whitespace-pre-wrap flex items-center max-w-full z-[1]">
                Start You'r Daily Shopping with Gadgets need
              </div>
            </div>
          </div>
          <div className="w-full md:w-[439px] rounded-31xl bg-white flex flex-row items-center justify-start py-0 px-0 box-border gap-[72px] max-w-full z-[1] text-base text-gray-100 font-lato mq450:gap-[36px] mq750:flex-wrap">
            <div className="w-full md:w-[218.3px] rounded-tl-31xl rounded-tr-none rounded-br-none rounded-bl-31xl flex flex-col items-end justify-center py-[22.5px] px-0.5 box-border bg-[url('/input2@3x.png')] bg-cover bg-no-repeat bg-[top]">
              <div className="overflow-hidden flex flex-col items-start justify-center py-0 pr-5 pl-0">
                <div className="relative">Your email address</div>
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-[22px] pr-[39.6px] pl-10 bg-steelblue-200 w-full md:w-[159.7px] rounded-31xl flex flex-col items-end justify-center box-border hover:bg-steelblue-100">
              <b className="self-stretch h-5 relative text-base tracking-[0.5px] leading-[24px] flex font-quicksand text-white text-center items-center justify-center shrink-0 min-w-[80.1px]">
                Subscribe
              </b>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
