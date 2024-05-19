import { useRouter } from "next/router";

const FrameComponent41 = () => {
  const router = useRouter();

  const onAcconutIconClick = () => {
    router.push("/admin-dashboard");
  };

  return (
    <header className="self-stretch flex flex-row items-start justify-start pt-0 pb-[44.4px] pr-0 pl-1.5 box-border max-w-full text-left text-5xl text-black font-quicksand">
      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
        <div className="w-[49px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
          <div className="self-stretch h-9 relative">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full object-cover"
              loading="lazy"
              alt=""
              src="/logo@2x.png"
            />
            <h2 className="m-0 absolute top-[-2px] left-[49px] text-inherit leading-[28.8px] font-bold font-inherit flex items-center w-[204px] h-[41px] whitespace-nowrap">
              Gadgets Need
            </h2>
          </div>
        </div>
        <div className="w-[1133.5px] flex flex-row items-start justify-start gap-[38.7px] max-w-full text-base text-darkslategray font-lato mq750:gap-[19px]">
          <div className="flex-1 rounded bg-white box-border flex flex-row items-start justify-start p-0.5 gap-[45px] max-w-full border-[2px] border-solid border-paleturquoise mq750:gap-[22px]">
            <div className="w-[66px] flex flex-col items-start justify-start">
              <div className="rounded-tl rounded-tr-none rounded-br-none rounded-bl bg-white flex flex-row items-start justify-start py-[13px] px-0 relative">
                <div className="w-px overflow-hidden shrink-0 flex flex-row items-start justify-start pt-0.5 px-0 pb-[3px] box-border">
                  <b className="w-[101.1px] relative leading-[19px] flex items-center shrink-0 [debug_commit:f6aba90]">
                    All Categories
                  </b>
                </div>
                <b className="absolute !m-[0] top-[calc(50%_-_9px)] right-[-93px] text-sm leading-[18px] inline-block font-quicksand min-w-[94px] whitespace-nowrap z-[1]">
                  All Categories
                </b>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0">
              <img
                className="w-3.5 h-3.5 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/icon.svg"
              />
            </div>
            <input
              className="w-[465px] [border:none] [outline:none] bg-[transparent] h-[50px] rounded-tl-none rounded-tr-8xs rounded-br-8xs rounded-bl-none flex flex-row items-start justify-start pt-2 px-5 pb-[25px] box-border bg-[url('/input@3x.png')] bg-cover bg-no-repeat bg-[top] font-lato text-sm text-gray-100 max-w-full"
              placeholder="Search for items..."
              type="text"
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border max-w-full text-center text-xs text-white">
            <div className="flex flex-row items-end justify-start gap-[27.8px]">
              <div className="flex flex-col items-start justify-start py-0 pr-[24.8px] pl-0 text-left text-sm text-royalblue font-quicksand">
                <div className="h-10 rounded-8xs bg-white shadow-[5px_5px_15px_rgba(0,_0,_0,_0.05)] box-border flex flex-row items-end justify-start pt-[5.5px] pb-[11px] pr-[1.5px] pl-3.5 gap-[7.6px] border-[1px] border-solid border-whitesmoke-300">
                  <img
                    className="mb-[-11.5px] h-[35px] w-3.5 relative overflow-hidden shrink-0"
                    alt=""
                    src="/icon-1.svg"
                  />
                  <div className="relative leading-[18px] font-medium inline-block min-w-[90.8px] whitespace-nowrap">
                    Your Location
                  </div>
                  <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[1.5px]">
                    <img
                      className="w-3.5 h-3.5 relative overflow-hidden shrink-0"
                      alt=""
                      src="/icon-2.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-0.5">
                <div className="flex flex-row items-end justify-start">
                  <div className="w-[17.2px] flex flex-col items-start justify-end pt-0 px-0 pb-3 box-border">
                    <div className="self-stretch flex flex-row items-start justify-start relative">
                      <img
                        className="h-full w-full absolute !m-[0] bottom-[-12px] left-[-14.1px] overflow-hidden shrink-0 object-cover"
                        loading="lazy"
                        alt=""
                        src="/header@2x.png"
                      />
                      <div className="flex-1 rounded-xl bg-royalblue flex flex-row items-start justify-start pt-0.5 pb-[3px] pr-[4.4px] pl-[5.5px] shrink-0 [debug_commit:f6aba90] z-[1]">
                        <div className="flex-1 relative leading-[15px] font-medium inline-block min-w-[7.3px] box-border pr-0">
                          6
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative text-mini leading-[19px] text-gray-200 text-left inline-block min-w-[58px] shrink-0 [debug_commit:f6aba90]">
                    Wishlist
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-0.5">
                <div className="flex flex-row items-end justify-start gap-[6.2px]">
                  <div className="w-[55.4px] flex flex-col items-start justify-start">
                    <div className="w-[17.2px] rounded-xl bg-royalblue flex flex-row items-start justify-start pt-0.5 pb-[3px] pr-[4.4px] pl-[5.5px] box-border shrink-0 [debug_commit:f6aba90] z-[1]">
                      <div className="flex-1 relative leading-[15px] font-medium inline-block min-w-[7.3px] box-border pr-0">
                        2
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start relative mt-[-4px] text-left text-mini text-gray-200">
                      <img
                        className="h-[25px] w-[25px] absolute !m-[0] top-[-9px] left-[-16.5px] overflow-hidden shrink-0 object-cover"
                        loading="lazy"
                        alt=""
                        src="/iconcartsvg@2x.png"
                      />
                      <div className="flex-1 flex flex-row items-start justify-start py-0 pr-0 pl-[16.4px]">
                        <div className="flex-1 relative leading-[19px] shrink-0 [debug_commit:f6aba90]">
                          Cart
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-end justify-start text-left text-mini text-gray-200">
                    <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3px]">
                      <img
                        className="w-[23.2px] h-[25px] relative overflow-hidden shrink-0 object-cover [debug_commit:f6aba90] cursor-pointer"
                        loading="lazy"
                        alt=""
                        src="/acconut@2x.png"
                        onClick={onAcconutIconClick}
                      />
                    </div>
                    <div className="relative leading-[19px] inline-block min-w-[66px] shrink-0 [debug_commit:f6aba90] z-[1] ml-[-0.4px]">
                      Account
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent41;
