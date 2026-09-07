import svgPaths from "./svg-f85j1uzf8n";
type Frame3Props = {
  className?: string;
  participation?: string;
  temperature?: string;
  time?: string;
  wind?: string;
};

function Frame3({ className, participation = "34mm", temperature = "13*C", time = "22:00", wind = "3(12)m/S" }: Frame3Props) {
  return (
    <div className={className || "relative"}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[73px] items-center relative size-full">
          <div className="[word-break:break-word] content-stretch flex gap-[12px] items-center relative shrink-0 w-[268px]">
            <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              🌤
            </p>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[173px]">
              <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#1d1b20] text-[16px] tracking-[0.15px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                {time}
              </p>
              <div className="content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[23px] items-center leading-[20px] relative shrink-0 text-[14px] text-black tracking-[0.25px] w-full whitespace-nowrap">
                <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
                  {temperature}
                </p>
                <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
                  {participation}
                </p>
                <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
                  {wind}
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[3px] items-start justify-center relative shrink-0">
            <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#79747e] text-[11px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              N
            </p>
            <div className="flex h-[23px] items-center justify-center relative shrink-0 w-[7px]">
              <div className="flex-none rotate-[106.93deg]">
                <div className="h-0 relative w-[24.042px]">
                  <div className="absolute inset-[-5.77px_0]">
                    <svg className="block size-full" fill="none" height="11.547" preserveAspectRatio="none" viewBox="0 0 24.0416 11.547" width="24.0416">
                      <path d={svgPaths.p829d9d0} fill="#1D1B20" id="Arrow 1" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[23px] items-center leading-[20px] relative shrink-0 text-[14px] text-black tracking-[0.25px] w-full whitespace-nowrap">
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        13*C
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        34mm
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        3(12)m/S
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[173px]">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#1d1b20] text-[16px] tracking-[0.15px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        06:00
      </p>
      <Frame />
    </div>
  );
}

function Frame2() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[12px] items-center relative shrink-0 w-[268px]">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        🌤
      </p>
      <Frame1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#79747e] text-[11px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        N
      </p>
      <div className="flex h-[23px] items-center justify-center relative shrink-0 w-[7px]">
        <div className="flex-none rotate-[106.93deg]">
          <div className="h-0 relative w-[24.042px]">
            <div className="absolute inset-[-5.77px_0]">
              <svg className="block size-full" fill="none" height="11.547" preserveAspectRatio="none" viewBox="0 0 24.0416 11.547" width="24.0416">
                <path d={svgPaths.p829d9d0} fill="#1D1B20" id="Arrow 1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[23px] items-center leading-[20px] relative shrink-0 text-[14px] text-black tracking-[0.25px] w-full whitespace-nowrap">
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        13*C
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        34mm
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        3(12)m/S
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[173px]">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#1d1b20] text-[16px] tracking-[0.15px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        00:00
      </p>
      <Frame7 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[12px] items-center relative shrink-0 w-[268px]">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        🌤
      </p>
      <Frame6 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#79747e] text-[11px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        N
      </p>
      <div className="flex h-[23px] items-center justify-center relative shrink-0 w-[7px]">
        <div className="flex-none rotate-[106.93deg]">
          <div className="h-0 relative w-[24.042px]">
            <div className="absolute inset-[-5.77px_0]">
              <svg className="block size-full" fill="none" height="11.547" preserveAspectRatio="none" viewBox="0 0 24.0416 11.547" width="24.0416">
                <path d={svgPaths.p829d9d0} fill="#1D1B20" id="Arrow 1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[23px] items-center leading-[20px] relative shrink-0 text-[14px] text-black tracking-[0.25px] w-full whitespace-nowrap">
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        13*C
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        34mm
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        3(12)m/S
      </p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[173px]">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#1d1b20] text-[16px] tracking-[0.15px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        23:00
      </p>
      <Frame11 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[12px] items-center relative shrink-0 w-[268px]">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        🌤
      </p>
      <Frame10 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#79747e] text-[11px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        N
      </p>
      <div className="flex h-[23px] items-center justify-center relative shrink-0 w-[7px]">
        <div className="flex-none rotate-[106.93deg]">
          <div className="h-0 relative w-[24.042px]">
            <div className="absolute inset-[-5.77px_0]">
              <svg className="block size-full" fill="none" height="11.547" preserveAspectRatio="none" viewBox="0 0 24.0416 11.547" width="24.0416">
                <path d={svgPaths.p829d9d0} fill="#1D1B20" id="Arrow 1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[23px] items-center leading-[20px] relative shrink-0 text-[14px] text-black tracking-[0.25px] w-full whitespace-nowrap">
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        13*C
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        34mm
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        3(12)m/S
      </p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[173px]">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#1d1b20] text-[16px] tracking-[0.15px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        01:00
      </p>
      <Frame15 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[12px] items-center relative shrink-0 w-[268px]">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        🌤
      </p>
      <Frame14 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#79747e] text-[11px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        N
      </p>
      <div className="flex h-[23px] items-center justify-center relative shrink-0 w-[7px]">
        <div className="flex-none rotate-[106.93deg]">
          <div className="h-0 relative w-[24.042px]">
            <div className="absolute inset-[-5.77px_0]">
              <svg className="block size-full" fill="none" height="11.547" preserveAspectRatio="none" viewBox="0 0 24.0416 11.547" width="24.0416">
                <path d={svgPaths.p829d9d0} fill="#1D1B20" id="Arrow 1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[23px] items-center leading-[20px] relative shrink-0 text-[14px] text-black tracking-[0.25px] w-full whitespace-nowrap">
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        13*C
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        34mm
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        3(12)m/S
      </p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[173px]">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#1d1b20] text-[16px] tracking-[0.15px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        02:00
      </p>
      <Frame19 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[12px] items-center relative shrink-0 w-[268px]">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        🌤
      </p>
      <Frame18 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#79747e] text-[11px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        N
      </p>
      <div className="flex h-[23px] items-center justify-center relative shrink-0 w-[7px]">
        <div className="flex-none rotate-[106.93deg]">
          <div className="h-0 relative w-[24.042px]">
            <div className="absolute inset-[-5.77px_0]">
              <svg className="block size-full" fill="none" height="11.547" preserveAspectRatio="none" viewBox="0 0 24.0416 11.547" width="24.0416">
                <path d={svgPaths.p829d9d0} fill="#1D1B20" id="Arrow 1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[23px] items-center leading-[20px] relative shrink-0 text-[14px] text-black tracking-[0.25px] w-full whitespace-nowrap">
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        13*C
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        34mm
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        3(12)m/S
      </p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[173px]">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#1d1b20] text-[16px] tracking-[0.15px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        03:00
      </p>
      <Frame23 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[12px] items-center relative shrink-0 w-[268px]">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        🌤
      </p>
      <Frame22 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#79747e] text-[11px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        N
      </p>
      <div className="flex h-[23px] items-center justify-center relative shrink-0 w-[7px]">
        <div className="flex-none rotate-[106.93deg]">
          <div className="h-0 relative w-[24.042px]">
            <div className="absolute inset-[-5.77px_0]">
              <svg className="block size-full" fill="none" height="11.547" preserveAspectRatio="none" viewBox="0 0 24.0416 11.547" width="24.0416">
                <path d={svgPaths.p829d9d0} fill="#1D1B20" id="Arrow 1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[23px] items-center leading-[20px] relative shrink-0 text-[14px] text-black tracking-[0.25px] w-full whitespace-nowrap">
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        13*C
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        34mm
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        3(12)m/S
      </p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[173px]">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#1d1b20] text-[16px] tracking-[0.15px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        04:00
      </p>
      <Frame27 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[12px] items-center relative shrink-0 w-[268px]">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        🌤
      </p>
      <Frame26 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#79747e] text-[11px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        N
      </p>
      <div className="flex h-[23px] items-center justify-center relative shrink-0 w-[7px]">
        <div className="flex-none rotate-[106.93deg]">
          <div className="h-0 relative w-[24.042px]">
            <div className="absolute inset-[-5.77px_0]">
              <svg className="block size-full" fill="none" height="11.547" preserveAspectRatio="none" viewBox="0 0 24.0416 11.547" width="24.0416">
                <path d={svgPaths.p829d9d0} fill="#1D1B20" id="Arrow 1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[23px] items-center leading-[20px] relative shrink-0 text-[14px] text-black tracking-[0.25px] w-full whitespace-nowrap">
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        13*C
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        34mm
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        3(12)m/S
      </p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[173px]">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#1d1b20] text-[16px] tracking-[0.15px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        05:00
      </p>
      <Frame31 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[12px] items-center relative shrink-0 w-[268px]">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[22px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        🌤
      </p>
      <Frame30 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#79747e] text-[11px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        N
      </p>
      <div className="flex h-[23px] items-center justify-center relative shrink-0 w-[7px]">
        <div className="flex-none rotate-[106.93deg]">
          <div className="h-0 relative w-[24.042px]">
            <div className="absolute inset-[-5.77px_0]">
              <svg className="block size-full" fill="none" height="11.547" preserveAspectRatio="none" viewBox="0 0 24.0416 11.547" width="24.0416">
                <path d={svgPaths.p829d9d0} fill="#1D1B20" id="Arrow 1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
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

function StateLayer() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center px-[20px] py-[4px] relative shrink-0 w-[64px]" data-name="state-layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[14.29%_10.71%_14.29%_17.86%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="17.1429" preserveAspectRatio="none" viewBox="0 0 17.1429 17.1429" width="17.1429">
            <path d={svgPaths.p30b0a500} fill="black" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconContainer() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 w-[32px]" data-name="icon-container">
      <StateLayer />
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center px-[20px] py-[6px] relative shrink-0 w-[64px]" data-name="state-layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[4.17%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
            <path d={svgPaths.pebf5000} fill="black" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconContainer1() {
  return (
    <div className="bg-[#e0e0f9] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[16px] shrink-0" data-name="icon-container">
      <StateLayer1 />
    </div>
  );
}

function StateLayer2() {
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
      <StateLayer2 />
    </div>
  );
}

function StateLayer3() {
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
      <StateLayer3 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[-1px] top-[842px]">
      <div className="absolute bg-white h-[74px] left-0 top-[843px] w-[412px]" data-name="Navigation bar">
        <div className="content-stretch cursor-pointer flex gap-[8px] items-start px-[8px] relative size-full">
          <div className="flex-[1_0_0] h-[80px] min-w-px relative" data-name="Nav item 1">
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col gap-[4px] items-center justify-center pb-[16px] pt-[12px] relative size-full">
                <IconContainer />
                <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[16px] min-w-full relative shrink-0 text-[#46464f] text-[12px] text-center tracking-[0.5px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Home
                </p>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] h-[80px] min-w-px relative" data-name="Nav item 2">
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col gap-[4px] items-center justify-center pb-[16px] pt-[12px] relative size-full">
                <IconContainer1 />
                <p className="[word-break:break-word] font-['Roboto:SemiBold',sans-serif] font-semibold leading-[16px] min-w-full relative shrink-0 text-[#1b1b21] text-[12px] text-center tracking-[0.5px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
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

function StateLayer4() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[10px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[20px]">Ground</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#e8def8] flex-[1_0_0] h-full min-w-px relative rounded-bl-[12px] rounded-tl-[12px]" data-name="container">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <StateLayer4 />
      </div>
      <div aria-hidden className="absolute border border-[#777680] border-solid inset-0 pointer-events-none rounded-bl-[12px] rounded-tl-[12px]" />
    </div>
  );
}

function StateLayer5() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[10px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[20px]">Air</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative rounded-br-[12px] rounded-tr-[12px]" data-name="container">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <StateLayer5 />
      </div>
      <div aria-hidden className="absolute border border-[#777680] border-solid inset-0 pointer-events-none rounded-br-[12px] rounded-tr-[12px]" />
    </div>
  );
}

export default function ForecastGround() {
  return (
    <div className="bg-white border border-black border-solid relative size-full" data-name="Forecast - Ground">
      <div className="-translate-x-1/2 absolute left-[calc(50%+0.5px)] top-[830px]">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[73px] items-center relative size-full">
            <Frame2 />
            <Frame4 />
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[20px] left-[20px] text-[#1d1b20] text-[28px] top-[85px] tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Ole-Johan Dahls hus
      </p>
      <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal h-[21px] leading-[20px] left-[20px] text-[20px] text-black top-[131px] tracking-[0.1px] w-[174px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        29.03.25 - 01.04.25
      </p>
      <Frame3 className="-translate-x-1/2 absolute left-1/2 top-[299px]" />
      <div className="-translate-x-1/2 absolute left-1/2 top-[470px]">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[73px] items-center relative size-full">
            <Frame5 />
            <Frame8 />
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute left-[calc(50%+0.5px)] top-[359px]">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[73px] items-center relative size-full">
            <Frame9 />
            <Frame12 />
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute left-[calc(50%+0.5px)] top-[530px]">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[73px] items-center relative size-full">
            <Frame13 />
            <Frame16 />
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute left-[calc(50%+0.5px)] top-[590px]">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[73px] items-center relative size-full">
            <Frame17 />
            <Frame20 />
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute left-[calc(50%+0.5px)] top-[650px]">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[73px] items-center relative size-full">
            <Frame21 />
            <Frame24 />
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute left-[calc(50%+0.5px)] top-[710px]">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[73px] items-center relative size-full">
            <Frame25 />
            <Frame28 />
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute left-[calc(50%+0.5px)] top-[770px]">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[73px] items-center relative size-full">
            <Frame29 />
            <Frame32 />
          </div>
        </div>
      </div>
      <div className="absolute left-[15px] top-[427px] w-[380px]" data-name="Horizontal/Divider with subhead">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[16px] relative size-full">
            <div className="h-0 relative shrink-0 w-full" data-name="Divider">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 348 1" width="348">
                  <line id="Divider" stroke="#C7C5D0" x2="348" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#46464f] text-[14px] tracking-[0.1px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
              30.03.25
            </p>
          </div>
        </div>
      </div>
      <div className="absolute left-[15px] top-[256px] w-[380px]" data-name="Horizontal/Divider with subhead">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[16px] relative size-full">
            <div className="h-0 relative shrink-0 w-full" data-name="Divider">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 348 1" width="348">
                  <line id="Divider" stroke="#C7C5D0" x2="348" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#46464f] text-[14px] tracking-[0.1px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
              29.03.25
            </p>
          </div>
        </div>
      </div>
      <div className="absolute h-[64px] left-[-1px] top-[3px] w-[407px]" data-name="Top app bar">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between px-[4px] py-[8px] relative size-full">
            <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#79747e] text-[22px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              ​
            </p>
            <TrailingIcon />
          </div>
        </div>
      </div>
      <Group />
      <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0)] h-[47px] left-[calc(50%-2px)] top-[181px] w-[207px]" data-name="Segmented button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch cursor-pointer flex items-center justify-center relative size-full">
            <div className="flex-[1_0_0] h-[48px] min-w-px mr-[-1px] relative rounded-[4px]" data-name="Segment-start">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center py-[4px] relative size-full">
                  <Container />
                </div>
              </div>
            </div>
            <div className="flex-[1_0_0] h-[48px] min-w-px relative" data-name="Rod-knapp">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center py-[4px] relative size-full">
                  <Container1 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}