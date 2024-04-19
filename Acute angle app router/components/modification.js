const Modification = () => {
  return (
    <div className="w-[1379px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-3xl text-black font-table-field">
      <div className="w-[1203px] flex flex-row items-end justify-between max-w-full gap-[20px] mq1050:flex-wrap">
        <div className="w-[611px] flex flex-row items-start justify-start gap-[101px] max-w-full mq450:gap-[25px] mq750:flex-wrap mq750:gap-[50px]">
          <div className="flex flex-row items-start justify-start gap-[12px]">
            <div className="w-[49px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
              <img
                className="self-stretch h-9 relative max-w-full overflow-hidden shrink-0 object-contain"
                loading="lazy"
                alt=""
                src="/clip-path-group@2x.png"
              />
            </div>
            <div className="flex flex-row items-start justify-start gap-[10px]">
              <div className="h-6 w-1 relative box-border hidden border-r-[4px] border-solid border-gradient-red-gradient-9" />
              <div className="h-5 w-1 relative box-border hidden border-r-[4px] border-solid border-gradient-orange-gradient-10" />
              <div className="h-4 w-1 relative box-border hidden border-r-[4px] border-solid border-gradient-blue-gradient-19" />
              <h3 className="m-0 relative text-inherit font-light font-inherit mq450:text-lg">
                Gadgets need
              </h3>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[205px] text-base">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
              <div className="relative inline-block min-w-[43px]">About</div>
              <div className="w-[62px] relative inline-block min-w-[62px]">
                Features
              </div>
              <div className="self-stretch w-[50px] relative hidden">
                Pricing
              </div>
              <div className="relative inline-block min-w-[50px]">Gallery</div>
              <div className="relative inline-block min-w-[40px]">Team</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3px]">
          <button className="cursor-pointer [border:none] py-[15.5px] px-[40.5px] bg-colors-bluedark rounded-mini flex flex-row items-start justify-start whitespace-nowrap hover:bg-cornflowerblue">
            <div className="w-[79px] relative text-base font-table-field text-white text-center inline-block min-w-[79px]">
              Contact Us
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modification;
