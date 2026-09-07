import svgPaths from "./svg-ws1jaai03g";

function Group1() {
  return (
    <div className="absolute contents left-[11px] top-[672px]">
      <div className="absolute bg-[#ffdcdc] h-[245px] left-[12px] rounded-[12px] top-[673px] w-[388px]" />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Content">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#79747e] text-[12.81px] tracking-[0.4474px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19.213px]">Sort</p>
      </div>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="h-[42.947px] relative rounded-[12px] shrink-0 w-full" data-name="state-layer">
      <div aria-hidden className="absolute border-[#79747e] border-[0.895px] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10.737px] items-center justify-center px-[10.737px] py-[7.158px] relative size-full">
          <div className="relative shrink-0 size-[21.474px]" data-name="Leading element">
            <div className="absolute inset-0" data-name="icon">
              <div className="absolute inset-[29.17%_12.5%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" height="8.94737" preserveAspectRatio="none" viewBox="0 0 16.1053 8.94737" width="16.1053">
                  <path d={svgPaths.p10b19c80} fill="#79747E" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <Content />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[11px] top-[216px]">
      <div className="absolute bg-[#dcecd4] h-[253px] left-[12px] rounded-[12px] top-[217px] w-[388px]" />
    </div>
  );
}

function TrailingIcon() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-end relative shrink-0 w-[144px]" data-name="trailing-icon">
      <div className="overflow-clip relative shrink-0 size-[48px]" data-name="trailing-icon 3">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <div className="absolute inset-[-4.38%]">
            <svg className="block size-full" fill="none" height="43.5" preserveAspectRatio="none" viewBox="0 0 43.5 43.5" width="43.5">
              <path d={svgPaths.p3e98c700} id="Icon" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative whitespace-pre-wrap" data-name="Text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#1b1b21] text-[16px] tracking-[0.15px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>{`26. 03  10:00 - 14:00`}</p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#852221] text-[0px] tracking-[0.25px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <span className="leading-[20px] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>{`🌤 15*C  0,0mm`}</span>
        <span className="leading-[20px] text-[14px]">{`  `}</span>
        <span className="leading-[20px] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          1(2)m/s NW
        </span>
        <span className="leading-[20px] text-[14px]">{` `}</span>
      </p>
    </div>
  );
}

function Content1() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-w-px relative" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative size-full">
          <div className="relative shrink-0 size-[40px]" data-name="Avatar">
            <div className="absolute inset-[12.5%_8.33%_8.33%_8.33%]" data-name="icon">
              <svg className="absolute block inset-0 size-full" fill="none" height="31.6667" preserveAspectRatio="none" viewBox="0 0 33.3333 31.6667" width="33.3333">
                <path d={svgPaths.p36b11d80} fill="#EECE00" id="icon" />
              </svg>
            </div>
          </div>
          <Text />
        </div>
      </div>
    </div>
  );
}

function WeatherCard1() {
  return (
    <div className="absolute contents left-[26px] top-[260px]" data-name="Weather card 12">
      <div className="absolute bg-white h-[88px] left-[26px] rounded-[12px] top-[260px] w-[361px]" data-name="Building Blocks/Content">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center relative size-full">
            <Content1 />
          </div>
        </div>
      </div>
      <div className="absolute h-[24px] left-[358.78px] top-[292px] w-[23.353px]" data-name="navigate_next">
        <div className="absolute bottom-1/4 left-[33.33%] right-[35.83%] top-1/4" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 7.20054 12" width="7.20054">
            <path d={svgPaths.p37a61e80} fill="#1B1B21" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function WeatherCard() {
  return (
    <a className="absolute contents cursor-pointer left-[25px] top-[259px]" data-name="Weather card">
      <WeatherCard1 />
    </a>
  );
}

function Text1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative whitespace-pre-wrap" data-name="Text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#1b1b21] text-[16px] tracking-[0.15px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>{`26. 03  10:00 - 14:00`}</p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#852221] text-[0px] tracking-[0.25px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <span className="leading-[20px] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>{`🌤 15*C  0,0mm`}</span>
        <span className="leading-[20px] text-[14px]">{`  `}</span>
        <span className="leading-[20px] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          1(2)m/s NW
        </span>
        <span className="leading-[20px] text-[14px]">{` `}</span>
      </p>
    </div>
  );
}

function Content2() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-w-px relative" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative size-full">
          <div className="relative shrink-0 size-[40px]" data-name="Avatar">
            <div className="absolute inset-[12.5%_8.33%_8.33%_8.33%]" data-name="icon">
              <svg className="absolute block inset-0 size-full" fill="none" height="31.6667" preserveAspectRatio="none" viewBox="0 0 33.3333 31.6667" width="33.3333">
                <path d={svgPaths.p36b11d80} fill="#EECE00" id="icon" />
              </svg>
            </div>
          </div>
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function WeatherCard2() {
  return (
    <div className="absolute contents left-[26px] top-[363px]" data-name="Weather card 12">
      <div className="absolute bg-white h-[88px] left-[26px] rounded-[12px] top-[363px] w-[361px]" data-name="Building Blocks/Content">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center relative size-full">
            <Content2 />
          </div>
        </div>
      </div>
      <div className="absolute h-[24px] left-[358.78px] top-[395px] w-[23.353px]" data-name="navigate_next">
        <div className="absolute bottom-1/4 left-[33.33%] right-[35.83%] top-1/4" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 7.20054 12" width="7.20054">
            <path d={svgPaths.p37a61e80} fill="#1B1B21" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <a className="absolute contents cursor-pointer left-[25px] top-[362px]">
      <WeatherCard2 />
    </a>
  );
}

function Text2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative whitespace-pre-wrap" data-name="Text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#1b1b21] text-[16px] tracking-[0.15px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>{`26. 03  10:00 - 14:00`}</p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#852221] text-[0px] tracking-[0.25px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <span className="leading-[20px] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>{`🌤 15*C  0,0mm`}</span>
        <span className="leading-[20px] text-[14px]">{`  `}</span>
        <span className="leading-[20px] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          1(2)m/s NW
        </span>
        <span className="leading-[20px] text-[14px]">{` `}</span>
      </p>
    </div>
  );
}

function Content3() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-w-px relative" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative size-full">
          <div className="relative shrink-0 size-[40px]" data-name="Avatar">
            <div className="absolute inset-[12.5%_8.33%_8.33%_8.33%]" data-name="icon">
              <svg className="absolute block inset-0 size-full" fill="none" height="31.6667" preserveAspectRatio="none" viewBox="0 0 33.3333 31.6667" width="33.3333">
                <path d={svgPaths.p36b11d80} fill="#EECE00" id="icon" />
              </svg>
            </div>
          </div>
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function WeatherCard3() {
  return (
    <div className="absolute contents left-[26px] top-[539px]" data-name="Weather card 12">
      <div className="absolute bg-white h-[88px] left-[26px] rounded-[12px] top-[539px] w-[361px]" data-name="Building Blocks/Content">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center relative size-full">
            <Content3 />
          </div>
        </div>
      </div>
      <div className="absolute h-[24px] left-[358.78px] top-[571px] w-[23.353px]" data-name="navigate_next">
        <div className="absolute bottom-1/4 left-[33.33%] right-[35.83%] top-1/4" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 7.20054 12" width="7.20054">
            <path d={svgPaths.p37a61e80} fill="#1B1B21" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <a className="absolute contents cursor-pointer left-[25px] top-[538px]">
      <WeatherCard3 />
    </a>
  );
}

function Text3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative whitespace-pre-wrap" data-name="Text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#1b1b21] text-[16px] tracking-[0.15px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>{`26. 03  10:00 - 14:00`}</p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#852221] text-[0px] tracking-[0.25px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <span className="leading-[20px] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>{`🌤 15*C  0,0mm`}</span>
        <span className="leading-[20px] text-[14px]">{`  `}</span>
        <span className="leading-[20px] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          1(2)m/s NW
        </span>
        <span className="leading-[20px] text-[14px]">{` `}</span>
      </p>
    </div>
  );
}

function Content4() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-w-px relative" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative size-full">
          <div className="relative shrink-0 size-[40px]" data-name="Avatar">
            <div className="absolute inset-[12.5%_8.33%_8.33%_8.33%]" data-name="icon">
              <svg className="absolute block inset-0 size-full" fill="none" height="31.6667" preserveAspectRatio="none" viewBox="0 0 33.3333 31.6667" width="33.3333">
                <path d={svgPaths.p36b11d80} fill="#EECE00" id="icon" />
              </svg>
            </div>
          </div>
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function WeatherCard4() {
  return (
    <div className="absolute contents left-[26px] top-[721px]" data-name="Weather card 12">
      <div className="absolute bg-white h-[88px] left-[26px] rounded-[12px] top-[721px] w-[361px]" data-name="Building Blocks/Content">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center relative size-full">
            <Content4 />
          </div>
        </div>
      </div>
      <div className="absolute h-[24px] left-[358.78px] top-[753px] w-[23.353px]" data-name="navigate_next">
        <div className="absolute bottom-1/4 left-[33.33%] right-[35.83%] top-1/4" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 7.20054 12" width="7.20054">
            <path d={svgPaths.p37a61e80} fill="#1B1B21" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <a className="absolute contents cursor-pointer left-[25px] top-[720px]">
      <WeatherCard4 />
    </a>
  );
}

function Text4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative whitespace-pre-wrap" data-name="Text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#1b1b21] text-[16px] tracking-[0.15px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>{`26. 03  10:00 - 14:00`}</p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#852221] text-[0px] tracking-[0.25px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <span className="leading-[20px] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>{`🌤 15*C  0,0mm`}</span>
        <span className="leading-[20px] text-[14px]">{`  `}</span>
        <span className="leading-[20px] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          1(2)m/s NW
        </span>
        <span className="leading-[20px] text-[14px]">{` `}</span>
      </p>
    </div>
  );
}

function Content5() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-w-px relative" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative size-full">
          <div className="relative shrink-0 size-[40px]" data-name="Avatar">
            <div className="absolute inset-[12.5%_8.33%_8.33%_8.33%]" data-name="icon">
              <svg className="absolute block inset-0 size-full" fill="none" height="31.6667" preserveAspectRatio="none" viewBox="0 0 33.3333 31.6667" width="33.3333">
                <path d={svgPaths.p36b11d80} fill="#EECE00" id="icon" />
              </svg>
            </div>
          </div>
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function WeatherCard5() {
  return (
    <div className="absolute contents left-[23px] top-[824px]" data-name="Weather card 12">
      <div className="absolute bg-white h-[88px] left-[23px] rounded-[12px] top-[824px] w-[361px]" data-name="Building Blocks/Content">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center relative size-full">
            <Content5 />
          </div>
        </div>
      </div>
      <div className="absolute h-[24px] left-[355.78px] top-[856px] w-[23.353px]" data-name="navigate_next">
        <div className="absolute bottom-1/4 left-[33.33%] right-[35.83%] top-1/4" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 7.20054 12" width="7.20054">
            <path d={svgPaths.p37a61e80} fill="#1B1B21" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <a className="absolute contents cursor-pointer left-[22px] top-[823px]">
      <WeatherCard5 />
    </a>
  );
}

function StateLayer1() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center px-[20px] py-[4px] relative shrink-0 w-[64px]" data-name="state-layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[14.29%_10.71%_14.29%_17.86%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="17.1429" preserveAspectRatio="none" viewBox="0 0 17.1429 17.1429" width="17.1429">
            <path d={svgPaths.p1694f880} fill="black" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconContainer() {
  return (
    <div className="bg-[#e0e0f9] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[16px] shrink-0" data-name="icon-container">
      <StateLayer1 />
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center px-[20px] py-[6px] relative shrink-0 w-[64px]" data-name="state-layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[3.57%_7.14%_7.14%_3.57%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="21.4286" preserveAspectRatio="none" viewBox="0 0 21.4286 21.4286" width="21.4286">
            <path d={svgPaths.p240cdf00} fill="black" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconContainer1() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[16px] shrink-0" data-name="icon-container">
      <StateLayer2 />
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center px-[20px] py-[4px] relative shrink-0 w-[64px]" data-name="state-layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute flex inset-[10.71%_10.71%_17.86%_17.86%] items-center justify-center" style={{ containerType: "size" }}>
          <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
            <div className="relative size-full" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height="17.1429" preserveAspectRatio="none" viewBox="0 0 17.1429 17.1429" width="17.1429">
                <path d={svgPaths.p4e9b680} fill="black" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconContainer2() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[16px] shrink-0" data-name="icon-container">
      <StateLayer3 />
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center px-[20px] py-[4px] relative shrink-0 w-[64px]" data-name="state-layer">
      <div className="flex-[1_0_0] h-[24px] min-w-px overflow-clip relative" data-name="Icon">
        <div className="absolute inset-[7.14%_17.86%_21.43%_10.71%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="17.1429" preserveAspectRatio="none" viewBox="0 0 17.1429 17.1429" width="17.1429">
            <path d={svgPaths.p24cc8b00} fill="black" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconContainer3() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[16px] shrink-0" data-name="icon-container">
      <StateLayer4 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[-1px] top-[842px]">
      <div className="absolute bg-white h-[74px] left-0 top-[843px] w-[412px]" data-name="Navigation bar">
        <div className="content-stretch cursor-pointer flex gap-[8px] items-start px-[8px] relative size-full">
          <div className="flex-[1_0_0] h-[80px] min-w-px relative" data-name="Nav item 1">
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col gap-[4px] items-center justify-center pb-[16px] pt-[12px] relative size-full">
                <IconContainer />
                <p className="[word-break:break-word] font-['Roboto:SemiBold',sans-serif] font-semibold leading-[16px] min-w-full relative shrink-0 text-[#1b1b21] text-[12px] text-center tracking-[0.5px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Home
                </p>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] h-[80px] min-w-px relative" data-name="Nav item 2">
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col gap-[4px] items-center justify-center pb-[16px] pt-[12px] relative size-full">
                <IconContainer1 />
                <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[16px] min-w-full relative shrink-0 text-[#46464f] text-[12px] text-center tracking-[0.5px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Forecast
                </p>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] h-[80px] min-w-px relative" data-name="Nav item 3">
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col gap-[4px] items-center justify-center pb-[16px] pt-[12px] relative size-full">
                <IconContainer2 />
                <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[16px] min-w-full relative shrink-0 text-[#46464f] text-[12px] text-center tracking-[0.5px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Launch
                </p>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] h-[80px] min-w-px relative" data-name="Nav item 4">
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col gap-[4px] items-center justify-center pb-[16px] pt-[12px] relative size-full">
                <IconContainer3 />
                <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[16px] min-w-full relative shrink-0 text-[#46464f] text-[12px] text-center tracking-[0.5px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Settings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleDescription() {
  return (
    <div className="relative shrink-0 w-full" data-name="Title & Description">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[16px] items-start leading-[0] pt-[24px] px-[24px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] justify-center relative shrink-0 text-[#1b1b21] text-[24px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[32px]">Information</p>
          </div>
          <div className="flex flex-col font-['Roboto:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] justify-center relative shrink-0 text-[#46464f] text-[14px] tracking-[0.25px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[20px] mb-0">Your favourited launch windows are displayed here, sorted based on the weather criteria you’ve defined under Settings → Weather Conditions.</p>
            <p className="leading-[20px]">​</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextContent() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text Content">
      <TitleDescription />
    </div>
  );
}

function StateLayer5() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[10px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#535a92] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[20px]">Done</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Actions1() {
  return (
    <a className="content-stretch cursor-pointer flex gap-[8px] items-center overflow-clip pl-[8px] pr-[24px] py-[24px] relative shrink-0" data-name="Actions">
      <div className="h-[40px] relative rounded-[100px] shrink-0" data-name="Primary button">
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <StateLayer5 />
          </div>
        </div>
      </div>
    </a>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex flex-col items-end overflow-clip relative shrink-0 w-full" data-name="Actions">
      <Actions1 />
    </div>
  );
}

export default function InformationHomeScreen() {
  return (
    <div className="bg-[#f5f5f5] border border-black border-solid relative size-full" data-name="Information home screen">
      <div className="absolute bg-[#fffadc] h-[160px] left-[11px] rounded-[12px] top-[486px] w-[388px]" />
      <Group1 />
      <p className="[word-break:break-word] absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[20px] left-[20px] text-[#1d1b20] text-[28px] top-[85px] tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Ole-Johan Dahls hus
      </p>
      <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal h-[21px] leading-[20px] left-[20px] text-[20px] text-black top-[131px] tracking-[0.1px] w-[174px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        29.03.25 - 09.04.25
      </p>
      <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal h-[21px] leading-[20px] left-[22px] text-[20px] text-black top-[176px] tracking-[0.1px] w-[212px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Your favorites
      </p>
      <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal h-[21px] leading-[20px] left-[27px] text-[18px] text-black top-[502px] tracking-[0.1px] w-[212px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Reevaluate launch
      </p>
      <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal h-[21px] leading-[20px] left-[27px] text-[18px] text-black top-[684px] tracking-[0.1px] w-[212px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Do not launch
      </p>
      <div className="absolute h-[80px] left-[301px] top-[131px] w-[85px]" data-name="Building Blocks/Menu list item: -2 density">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <StateLayer />
          </div>
        </div>
      </div>
      <Group />
      <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal h-[21px] leading-[20px] left-[27px] text-[18px] text-black top-[230px] tracking-[0.1px] w-[212px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Ready to launch
      </p>
      <div className="absolute h-[64px] left-px top-[2px] w-[407px]" data-name="Top app bar">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between px-[4px] py-[8px] relative size-full">
            <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#79747e] text-[22px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              ​
            </p>
            <TrailingIcon />
          </div>
        </div>
      </div>
      <WeatherCard />
      <Group3 />
      <Group4 />
      <Group5 />
      <Group6 />
      <Group2 />
      <div className="absolute bg-[#e9e7ef] left-[49px] max-w-[560px] min-w-[280px] rounded-[28px] top-[349px] w-[312px]" data-name="Basic dialog">
        <div className="flex flex-col items-end max-w-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-end max-w-[inherit] min-w-[inherit] relative size-full">
            <TextContent />
            <Actions />
          </div>
        </div>
      </div>
    </div>
  );
}