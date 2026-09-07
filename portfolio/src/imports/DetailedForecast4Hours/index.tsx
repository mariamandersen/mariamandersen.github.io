import svgPaths from "./svg-fyf00urat8";
type Frame2Props = {
  className?: string;
  name?: string;
  unit?: string;
  value?: string;
};

function Frame2({ className, name = "Temperature", unit = "(Celsius)", value = "13*C" }: Frame2Props) {
  return (
    <div className={className || "relative w-[316px]"}>
      <div className="content-stretch flex flex-col gap-[3px] items-start relative size-full">
        <div className="[word-break:break-word] content-stretch flex font-['Roboto:Regular',sans-serif] font-normal items-center justify-between leading-[20px] relative shrink-0 text-[14px] tracking-[0.25px] w-full whitespace-nowrap">
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
            <p className="relative shrink-0 text-[#1d1b20]" style={{ fontVariationSettings: '"wdth" 100' }}>
              {name}
            </p>
            <p className="relative shrink-0 text-[#777680]" style={{ fontVariationSettings: '"wdth" 100' }}>
              {unit}
            </p>
          </div>
          <p className="relative shrink-0 text-[#1d1b20]" style={{ fontVariationSettings: '"wdth" 100' }}>
            {value}
          </p>
        </div>
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 316 1" width="316">
              <line id="Line 2" stroke="#79747E" x2="316" y1="0.5" y2="0.5" />
            </svg>
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

function Frame10() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[1.2] not-italic relative shrink-0 text-right w-full whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[24px] text-black tracking-[-0.48px]">Kl: 10:00</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#1b1b21] text-[32px]">🌤</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="relative shrink-0 text-[#1d1b20]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Wind
      </p>
      <p className="relative shrink-0 text-[#777680]" style={{ fontVariationSettings: '"wdth" 100' }}>
        (m/s)
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Roboto:Regular',sans-serif] font-normal items-center justify-between leading-[20px] relative shrink-0 text-[14px] tracking-[0.25px] w-full whitespace-nowrap">
      <Frame />
      <p className="relative shrink-0 text-[#1d1b20]" style={{ fontVariationSettings: '"wdth" 100' }}>
        5(9)m/s NW
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="relative shrink-0 text-[#1d1b20]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Dewpoint
      </p>
      <p className="relative shrink-0 text-[#777680]" style={{ fontVariationSettings: '"wdth" 100' }}>
        (Celsius)
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Roboto:Regular',sans-serif] font-normal items-center justify-between leading-[20px] relative shrink-0 text-[14px] tracking-[0.25px] w-full whitespace-nowrap">
      <Frame4 />
      <p className="relative shrink-0 text-[#1d1b20]" style={{ fontVariationSettings: '"wdth" 100' }}>
        -3*C
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="relative shrink-0 text-[#1d1b20]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Participation
      </p>
      <p className="relative shrink-0 text-[#777680]" style={{ fontVariationSettings: '"wdth" 100' }}>
        (mm)
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Roboto:Regular',sans-serif] font-normal items-center justify-between leading-[20px] relative shrink-0 text-[14px] tracking-[0.25px] w-full whitespace-nowrap">
      <Frame6 />
      <p className="relative shrink-0 text-[#1d1b20]" style={{ fontVariationSettings: '"wdth" 100' }}>
        12.4mm
      </p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="relative shrink-0 text-[#1d1b20]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Cloud coverage
      </p>
      <p className="relative shrink-0 text-[#777680]" style={{ fontVariationSettings: '"wdth" 100' }}>
        (%)
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Roboto:Regular',sans-serif] font-normal items-center justify-between leading-[20px] relative shrink-0 text-[14px] tracking-[0.25px] w-full whitespace-nowrap">
      <Frame8 />
      <p className="relative shrink-0 text-[#1d1b20]" style={{ fontVariationSettings: '"wdth" 100' }}>
        29%
      </p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="relative shrink-0 text-[#1d1b20]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Humidity
      </p>
      <p className="relative shrink-0 text-[#777680]" style={{ fontVariationSettings: '"wdth" 100' }}>
        (%)
      </p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Roboto:Regular',sans-serif] font-normal items-center justify-between leading-[20px] relative shrink-0 text-[14px] tracking-[0.25px] w-full whitespace-nowrap">
      <Frame13 />
      <p className="relative shrink-0 text-[#1d1b20]" style={{ fontVariationSettings: '"wdth" 100' }}>
        20%
      </p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="relative shrink-0 text-[#1d1b20]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Fog
      </p>
      <p className="relative shrink-0 text-[#777680]" style={{ fontVariationSettings: '"wdth" 100' }}>
        (%)
      </p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Roboto:Regular',sans-serif] font-normal items-center justify-between leading-[20px] relative shrink-0 text-[14px] tracking-[0.25px] w-full whitespace-nowrap">
      <Frame15 />
      <p className="relative shrink-0 text-[#1d1b20]" style={{ fontVariationSettings: '"wdth" 100' }}>
        05%
      </p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame2 className="relative shrink-0 w-full" />
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[3px] items-start relative size-full">
          <Frame1 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 316 1" width="316">
                <line id="Line 2" stroke="#79747E" x2="316" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[3px] items-start relative size-full">
          <Frame3 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 316 1" width="316">
                <line id="Line 2" stroke="#79747E" x2="316" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[3px] items-start relative size-full">
          <Frame5 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 316 1" width="316">
                <line id="Line 2" stroke="#79747E" x2="316" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[3px] items-start relative size-full">
          <Frame7 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 316 1" width="316">
                <line id="Line 2" stroke="#79747E" x2="316" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[3px] items-start relative size-full">
          <Frame12 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 316 1" width="316">
                <line id="Line 2" stroke="#79747E" x2="316" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[3px] items-start relative size-full">
          <Frame14 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 316 1" width="316">
                <line id="Line 2" stroke="#79747E" x2="316" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute bg-[#fefefe] content-stretch drop-shadow-[4px_4px_10px_rgba(0,0,0,0.09)] flex flex-col gap-[18px] items-start left-[23px] p-[24px] rounded-[16px] top-[183px] w-[364px]">
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[1.2] not-italic relative shrink-0 text-right w-full whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[24px] text-black tracking-[-0.48px]">Kl: 10:00</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#1b1b21] text-[32px]">🌤</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="relative shrink-0 text-[#1d1b20]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Temperature
      </p>
      <p className="relative shrink-0 text-[#777680]" style={{ fontVariationSettings: '"wdth" 100' }}>
        (Celsius)
      </p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Roboto:Regular',sans-serif] font-normal items-center justify-between leading-[20px] relative shrink-0 text-[14px] tracking-[0.25px] w-full whitespace-nowrap">
      <Frame20 />
      <p className="relative shrink-0 text-[#1d1b20]" style={{ fontVariationSettings: '"wdth" 100' }}>
        13*C
      </p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="relative shrink-0 text-[#1d1b20]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Wind
      </p>
      <p className="relative shrink-0 text-[#777680]" style={{ fontVariationSettings: '"wdth" 100' }}>
        (m/s)
      </p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Roboto:Regular',sans-serif] font-normal items-center justify-between leading-[20px] relative shrink-0 text-[14px] tracking-[0.25px] w-full whitespace-nowrap">
      <Frame22 />
      <p className="relative shrink-0 text-[#1d1b20]" style={{ fontVariationSettings: '"wdth" 100' }}>
        5(9)m/s NW
      </p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="relative shrink-0 text-[#1d1b20]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Dewpoint
      </p>
      <p className="relative shrink-0 text-[#777680]" style={{ fontVariationSettings: '"wdth" 100' }}>
        (Celsius)
      </p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Roboto:Regular',sans-serif] font-normal items-center justify-between leading-[20px] relative shrink-0 text-[14px] tracking-[0.25px] w-full whitespace-nowrap">
      <Frame24 />
      <p className="relative shrink-0 text-[#1d1b20]" style={{ fontVariationSettings: '"wdth" 100' }}>
        -3*C
      </p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="relative shrink-0 text-[#1d1b20]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Participation
      </p>
      <p className="relative shrink-0 text-[#777680]" style={{ fontVariationSettings: '"wdth" 100' }}>
        (mm)
      </p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Roboto:Regular',sans-serif] font-normal items-center justify-between leading-[20px] relative shrink-0 text-[14px] tracking-[0.25px] w-full whitespace-nowrap">
      <Frame26 />
      <p className="relative shrink-0 text-[#1d1b20]" style={{ fontVariationSettings: '"wdth" 100' }}>
        12.4mm
      </p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="relative shrink-0 text-[#1d1b20]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Cloud coverage
      </p>
      <p className="relative shrink-0 text-[#777680]" style={{ fontVariationSettings: '"wdth" 100' }}>
        (%)
      </p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Roboto:Regular',sans-serif] font-normal items-center justify-between leading-[20px] relative shrink-0 text-[14px] tracking-[0.25px] w-full whitespace-nowrap">
      <Frame28 />
      <p className="relative shrink-0 text-[#1d1b20]" style={{ fontVariationSettings: '"wdth" 100' }}>
        29%
      </p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="relative shrink-0 text-[#1d1b20]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Humidity
      </p>
      <p className="relative shrink-0 text-[#777680]" style={{ fontVariationSettings: '"wdth" 100' }}>
        (%)
      </p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Roboto:Regular',sans-serif] font-normal items-center justify-between leading-[20px] relative shrink-0 text-[14px] tracking-[0.25px] w-full whitespace-nowrap">
      <Frame30 />
      <p className="relative shrink-0 text-[#1d1b20]" style={{ fontVariationSettings: '"wdth" 100' }}>
        20%
      </p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="relative shrink-0 text-[#1d1b20]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Fog
      </p>
      <p className="relative shrink-0 text-[#777680]" style={{ fontVariationSettings: '"wdth" 100' }}>
        (%)
      </p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Roboto:Regular',sans-serif] font-normal items-center justify-between leading-[20px] relative shrink-0 text-[14px] tracking-[0.25px] w-full whitespace-nowrap">
      <Frame32 />
      <p className="relative shrink-0 text-[#1d1b20]" style={{ fontVariationSettings: '"wdth" 100' }}>
        05%
      </p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[3px] items-start relative size-full">
          <Frame19 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 316 1" width="316">
                <line id="Line 2" stroke="#79747E" x2="316" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[3px] items-start relative size-full">
          <Frame21 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 316 1" width="316">
                <line id="Line 2" stroke="#79747E" x2="316" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[3px] items-start relative size-full">
          <Frame23 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 316 1" width="316">
                <line id="Line 2" stroke="#79747E" x2="316" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[3px] items-start relative size-full">
          <Frame25 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 316 1" width="316">
                <line id="Line 2" stroke="#79747E" x2="316" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[3px] items-start relative size-full">
          <Frame27 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 316 1" width="316">
                <line id="Line 2" stroke="#79747E" x2="316" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[3px] items-start relative size-full">
          <Frame29 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 316 1" width="316">
                <line id="Line 2" stroke="#79747E" x2="316" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[3px] items-start relative size-full">
          <Frame31 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 316 1" width="316">
                <line id="Line 2" stroke="#79747E" x2="316" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute bg-[#fefefe] content-stretch flex flex-col gap-[18px] items-start left-[23px] p-[24px] rounded-[16px] top-[183px] w-[364px]">
      <Frame17 />
      <Frame18 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[1.2] not-italic relative shrink-0 text-right w-full whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[24px] text-black tracking-[-0.48px]">Kl: 11:00</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#1b1b21] text-[32px]">⛅️</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="relative shrink-0 text-[#1d1b20]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Temperature
      </p>
      <p className="relative shrink-0 text-[#777680]" style={{ fontVariationSettings: '"wdth" 100' }}>
        (Celsius)
      </p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Roboto:Regular',sans-serif] font-normal items-center justify-between leading-[20px] relative shrink-0 text-[14px] tracking-[0.25px] w-full whitespace-nowrap">
      <Frame37 />
      <p className="relative shrink-0 text-[#1d1b20]" style={{ fontVariationSettings: '"wdth" 100' }}>
        134*C
      </p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="relative shrink-0 text-[#1d1b20]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Wind
      </p>
      <p className="relative shrink-0 text-[#777680]" style={{ fontVariationSettings: '"wdth" 100' }}>
        (m/s)
      </p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Roboto:Regular',sans-serif] font-normal items-center justify-between leading-[20px] relative shrink-0 text-[14px] tracking-[0.25px] w-full whitespace-nowrap">
      <Frame39 />
      <p className="relative shrink-0 text-[#1d1b20]" style={{ fontVariationSettings: '"wdth" 100' }}>
        6(9)m/s NW
      </p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="relative shrink-0 text-[#1d1b20]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Dewpoint
      </p>
      <p className="relative shrink-0 text-[#777680]" style={{ fontVariationSettings: '"wdth" 100' }}>
        (Celsius)
      </p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Roboto:Regular',sans-serif] font-normal items-center justify-between leading-[20px] relative shrink-0 text-[14px] tracking-[0.25px] w-full whitespace-nowrap">
      <Frame41 />
      <p className="relative shrink-0 text-[#1d1b20]" style={{ fontVariationSettings: '"wdth" 100' }}>
        -3*C
      </p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="relative shrink-0 text-[#1d1b20]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Participation
      </p>
      <p className="relative shrink-0 text-[#777680]" style={{ fontVariationSettings: '"wdth" 100' }}>
        (mm)
      </p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Roboto:Regular',sans-serif] font-normal items-center justify-between leading-[20px] relative shrink-0 text-[14px] tracking-[0.25px] w-full whitespace-nowrap">
      <Frame43 />
      <p className="relative shrink-0 text-[#1d1b20]" style={{ fontVariationSettings: '"wdth" 100' }}>
        15mm
      </p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="relative shrink-0 text-[#1d1b20]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Cloud coverage
      </p>
      <p className="relative shrink-0 text-[#777680]" style={{ fontVariationSettings: '"wdth" 100' }}>
        (%)
      </p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Roboto:Regular',sans-serif] font-normal items-center justify-between leading-[20px] relative shrink-0 text-[14px] tracking-[0.25px] w-full whitespace-nowrap">
      <Frame45 />
      <p className="relative shrink-0 text-[#1d1b20]" style={{ fontVariationSettings: '"wdth" 100' }}>
        50%
      </p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="relative shrink-0 text-[#1d1b20]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Humidity
      </p>
      <p className="relative shrink-0 text-[#777680]" style={{ fontVariationSettings: '"wdth" 100' }}>
        (%)
      </p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Roboto:Regular',sans-serif] font-normal items-center justify-between leading-[20px] relative shrink-0 text-[14px] tracking-[0.25px] w-full whitespace-nowrap">
      <Frame47 />
      <p className="relative shrink-0 text-[#1d1b20]" style={{ fontVariationSettings: '"wdth" 100' }}>
        70%
      </p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="relative shrink-0 text-[#1d1b20]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Fog
      </p>
      <p className="relative shrink-0 text-[#777680]" style={{ fontVariationSettings: '"wdth" 100' }}>
        (%)
      </p>
    </div>
  );
}

function Frame48() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Roboto:Regular',sans-serif] font-normal items-center justify-between leading-[20px] relative shrink-0 text-[14px] tracking-[0.25px] w-full whitespace-nowrap">
      <Frame49 />
      <p className="relative shrink-0 text-[#1d1b20]" style={{ fontVariationSettings: '"wdth" 100' }}>
        40%
      </p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[3px] items-start relative size-full">
          <Frame36 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 316 1" width="316">
                <line id="Line 2" stroke="#79747E" x2="316" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[3px] items-start relative size-full">
          <Frame38 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 316 1" width="316">
                <line id="Line 2" stroke="#79747E" x2="316" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[3px] items-start relative size-full">
          <Frame40 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 316 1" width="316">
                <line id="Line 2" stroke="#79747E" x2="316" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[3px] items-start relative size-full">
          <Frame42 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 316 1" width="316">
                <line id="Line 2" stroke="#79747E" x2="316" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[3px] items-start relative size-full">
          <Frame44 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 316 1" width="316">
                <line id="Line 2" stroke="#79747E" x2="316" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[3px] items-start relative size-full">
          <Frame46 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 316 1" width="316">
                <line id="Line 2" stroke="#79747E" x2="316" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[3px] items-start relative size-full">
          <Frame48 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 316 1" width="316">
                <line id="Line 2" stroke="#79747E" x2="316" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="absolute bg-[#fefefe] content-stretch flex flex-col gap-[18px] items-start left-[23px] p-[24px] rounded-[16px] top-[512px] w-[364px]">
      <Frame34 />
      <Frame35 />
    </div>
  );
}

function StateLayer() {
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
      <StateLayer />
    </div>
  );
}

function StateLayer1() {
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
    <div className="absolute contents left-[-1px] top-[841px]">
      <div className="absolute bg-white h-[74px] left-0 top-[842px] w-[412px]" data-name="Navigation bar">
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

export default function DetailedForecast4Hours() {
  return (
    <div className="bg-[#f5f5f5] border border-black border-solid relative size-full" data-name="Detailed forecast 4 hours">
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[29px] leading-[normal] left-[23px] not-italic text-[28px] text-black top-[81px] w-[326px]">Ole-Johan Dahls hus</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal h-[39px] leading-[normal] left-[25px] not-italic text-[20px] text-black top-[128px] w-[326px]">30.03.25</p>
      <div className="absolute h-[64px] left-px top-[-1px] w-[412px]" data-name="Top app bar">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between px-[4px] py-[8px] relative size-full">
            <a className="block cursor-pointer relative shrink-0 size-[48px]" data-name="leading-icon">
              <div className="absolute inset-[16.67%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
                  <path d={svgPaths.p12dd0500} fill="#79747E" id="icon" />
                </svg>
              </div>
            </a>
            <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#79747e] text-[22px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              ​
            </p>
            <TrailingIcon />
          </div>
        </div>
      </div>
      <Frame9 />
      <Frame16 />
      <Frame33 />
      <Group />
    </div>
  );
}