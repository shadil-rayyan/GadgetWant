const TableTable = () => {
  return (
    <section className="self-stretch h-[235.4px] flex flex-row items-start justify-start py-0 pr-0 pl-5 box-border max-w-full text-center text-base text-darkslategray font-quicksand">
      <div className="self-stretch w-[1610px] overflow-x-auto shrink-0 flex flex-row items-start justify-start pt-0 px-3 pb-5 box-border gap-[24px] max-w-[114%]">
        <div className="self-stretch rounded-3xs bg-ghostwhite flex flex-col items-end justify-start pt-[29.2px] px-[37px] pb-[51.8px] gap-[16px] border-[1px] border-solid border-ghostwhite">
          <img
            className="w-[101.8px] flex-1 relative max-h-full"
            alt=""
            src="/vector.svg"
          />
          <div className="w-[101.8px] flex flex-row items-start justify-end py-0 pr-[14.7px] pl-[15px] box-border">
            <b className="h-[39.2px] flex-1 relative leading-[19.2px] flex items-center justify-center shrink-0">{`Home `}</b>
          </div>
        </div>
        <div className="w-[178px] rounded-3xs bg-ghostwhite box-border shrink-0 flex flex-col items-end justify-start pt-[29.2px] px-[37px] pb-[33.8px] gap-[11px] border-[1px] border-solid border-ghostwhite">
          <img
            className="w-[102.2px] h-[102.2px] relative"
            alt=""
            src="/vector-1.svg"
          />
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[20.3px] pl-5">
            <b className="h-[39.2px] flex-1 relative leading-[19.2px] flex items-center justify-center">
              Travelling
            </b>
          </div>
        </div>
        <div className="self-stretch w-[178px] rounded-3xs bg-ghostwhite box-border shrink-0 flex flex-col items-end justify-start pt-[41px] px-[30px] pb-[29.2px] gap-[19px] border-[1px] border-solid border-ghostwhite">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/figure@2x.png"
          />
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[18.1px] pl-[18px]">
            <b className="flex-1 relative leading-[19.2px]">
              <p className="m-0">{`Clothing &`}</p>
              <p className="m-0">Beauty</p>
            </b>
          </div>
        </div>
        <div className="self-stretch w-[178px] rounded-3xs bg-ghostwhite box-border shrink-0 flex flex-col items-start justify-start pt-[29.2px] pb-[42.7px] pr-[37px] pl-[38px] gap-[24px] border-[1px] border-solid border-ghostwhite">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector-2.svg"
          />
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-3 pl-[12.2px]">
            <b className="h-[39.2px] flex-1 relative leading-[19.2px] flex items-center justify-center min-w-[76.6px]">
              Gift item
            </b>
          </div>
        </div>
        <div className="self-stretch w-[178px] rounded-3xs bg-ghostwhite box-border shrink-0 flex flex-col items-start justify-start pt-[41px] px-[30px] pb-[29.2px] gap-[19px] border-[1px] border-solid border-ghostwhite">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
            alt=""
            src="/figure-1.svg"
          />
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-5 pl-[19.7px]">
            <b className="flex-1 relative leading-[19.2px]">Pet accesooried</b>
          </div>
        </div>
        <div className="self-stretch w-[178px] rounded-3xs bg-ghostwhite box-border shrink-0 flex flex-col items-start justify-start pt-[41px] px-[30px] pb-[29.2px] gap-[19px] border-[1px] border-solid border-ghostwhite">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/figure-2@2x.png"
          />
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[25px]">
            <b className="flex-1 relative leading-[19.2px]">Kitchen finds</b>
          </div>
        </div>
        <div className="self-stretch w-[178px] rounded-3xs bg-ghostwhite box-border shrink-0 flex flex-col items-start justify-start pt-[41px] px-[30px] pb-[29.2px] gap-[19px] border-[1px] border-solid border-ghostwhite">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/figure-3@2x.png"
          />
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-3.5 pl-[14.3px]">
            <b className="h-[39.2px] flex-1 relative leading-[19.2px] flex items-center justify-center min-w-[87.3px]">
              Decoration
            </b>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TableTable;
