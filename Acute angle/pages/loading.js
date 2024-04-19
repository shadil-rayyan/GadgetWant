const LoadingAnimation = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-start justify-start pt-[517px] px-[559px] pb-[471px] box-border leading-[normal] tracking-[normal] [row-gap:20px] text-left text-5xl text-black font-quicksand mq450:pl-5 mq450:pr-5 mq450:box-border mq800:pl-[139px] mq800:pr-[139px] mq800:box-border mq1300:flex-wrap mq1300:pl-[279px] mq1300:pr-[279px] mq1300:box-border">
      <img
        className="h-9 w-[59px] relative object-contain"
        loading="lazy"
        alt=""
        src="/webname-and-logo@2x.png"
      />
      <div className="w-[204px] flex flex-col items-start justify-start pt-[4.8px] px-0 pb-0 box-border">
        <b className="self-stretch relative leading-[28.8px] mq450:text-lgi mq450:leading-[23px]">
          Gadgets Need
        </b>
      </div>
    </div>
  );
};

export default LoadingAnimation;
