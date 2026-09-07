import svgPaths from "./svg-lprhevuymh";
import imgImage from "./c1f557729710ad33c3d7a2a563c8d1d3d56c1dc2.png";
import imgImageNibio from "./27bdd261dc1d015fda4bbef01389ae431dcea902.png";
import imgButtonBrukermeny from "./8bb63763a6737b4ef319c0137b192197a250d6a7.png";

function PlaceholderForCatalogPage() {
  return <div className="h-[72px] relative shrink-0 w-full" data-name="Placeholder for CatalogPage" />;
}

function PlaceholderForCatalogPage1() {
  return <div className="h-[242px] relative shrink-0 w-full" data-name="Placeholder for CatalogPage" />;
}

function PlaceholderForCatalogPage2() {
  return <div className="h-[2589.75px] relative shrink-0 w-full" data-name="Placeholder for CatalogPage" />;
}

function CatalogPage() {
  return (
    <div className="bg-[#00574d] content-stretch flex flex-col h-[2903.75px] items-start min-h-[737px] overflow-clip relative shrink-0 w-full" data-name="CatalogPage">
      <PlaceholderForCatalogPage />
      <PlaceholderForCatalogPage1 />
      <PlaceholderForCatalogPage2 />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col h-[737px] items-start relative shrink-0 w-[1101px]" data-name="Body">
      <CatalogPage />
    </div>
  );
}

function Image() {
  return (
    <div className="h-[737px] relative shrink-0 w-[1101px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Container() {
  return <div className="absolute bg-gradient-to-b from-[rgba(0,87,77,0.15)] h-[737px] left-0 to-[#00574d] to-[65%] top-0 via-[35%] via-[rgba(0,87,77,0.55)] w-[1101px]" data-name="Container" />;
}

function CatalogPage1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0" data-name="CatalogPage">
      <Image />
      <Container />
    </div>
  );
}

function ImageNibio() {
  return (
    <div className="h-[52px] relative shrink-0 w-[55.352px]" data-name="Image (NIBIO)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageNibio} />
    </div>
  );
}

function ButtonBrukermeny() {
  return (
    <div className="absolute h-[58px] left-0 rounded-[16777200px] top-0 w-[86.969px]" data-name="Button - Brukermeny">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[16777200px] size-full" src={imgButtonBrukermeny} />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[64px] relative shrink-0 w-[86.969px]" data-name="Container">
      <ButtonBrukermeny />
    </div>
  );
}

function CatalogPage2() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 pt-[8px] px-[16px] top-0 w-[1101px]" data-name="CatalogPage">
      <ImageNibio />
      <Container1 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[22.5px] not-italic relative shrink-0 text-[18px] text-black tracking-[1.8px] whitespace-nowrap">Søk i NIBIOs datakatalog</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start pt-[4px] relative shrink-0 w-[756px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.6)] whitespace-nowrap">Beskriv prosjektet ditt, eller søk etter et konkret datasett. AI-søket foreslår DMPer som er verdt å sjekke ut.</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] pt-[32px] px-[32px] relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Icon">
          <path d={svgPaths.p5531f80} fill="#00574D" id="Vector" opacity="0.85" />
        </g>
      </svg>
    </div>
  );
}

function TextInputAiSokIDatakatalog() {
  return (
    <div className="content-stretch flex flex-[612.125_0_0] flex-col h-[22.5px] items-start justify-center min-w-px overflow-clip relative" data-name="Text Input - AI-søk i datakatalog">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[15px] text-[rgba(0,0,0,0.5)] w-full">Beskriv hva du leter etter...</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_10)" id="Icon">
          <path d="M7 13L13 7L7 1M13 7H1" id="Vector" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.45" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_10">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonSok() {
  return (
    <div className="bg-[rgba(0,0,0,0.08)] content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[8px] relative rounded-[10px] shrink-0" data-name="Button - Søk">
      <Icon1 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.45)] text-center whitespace-nowrap">Søk</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center pl-[18px] pr-[12px] py-[12px] relative rounded-[16px] shadow-[0px_2px_24px_0px_rgba(0,0,0,0.1),0px_0px_0px_0px_rgba(0,87,77,0.15)] shrink-0 w-[756px]" data-name="Container">
      <Icon />
      <TextInputAiSokIDatakatalog />
      <ButtonSok />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] pt-[16px] px-[32px] relative shrink-0 w-full" data-name="Container">
      <Container5 />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[rgba(217,217,217,0.8)] content-stretch flex flex-col h-full items-start max-h-[645px] max-w-[820px] overflow-clip relative rounded-[32px] shadow-[0px_4px_71px_0px_rgba(0,0,0,0.25)] shrink-0 w-[820px]" data-name="Container">
      <Container3 />
      <Container4 />
    </div>
  );
}

function CatalogPage3() {
  return (
    <div className="absolute content-stretch flex h-[242px] items-start justify-center left-0 pb-[24px] pt-[16px] px-[24px] top-[72px] w-[1101px]" data-name="CatalogPage">
      <Container2 />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Instrument_Serif:Regular',sans-serif] leading-[33px] not-italic relative shrink-0 text-[22px] text-white tracking-[2.4px] whitespace-nowrap">Datakatalog</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">44 datasett</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(0,0,0,0.7)] tracking-[0.5px] uppercase whitespace-nowrap">Filter</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text2 />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[11px] text-[rgba(0,0,0,0.7)] tracking-[0.55px] uppercase whitespace-nowrap">Tittel</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start justify-center left-[12px] overflow-clip top-[9px] w-[166px]" data-name="Text Input">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.4)] w-full">Søk på tittel...</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-white h-[36px] relative rounded-[16777200px] shrink-0 w-full" data-name="Container">
      <TextInput />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0 w-full" data-name="Container:margin">
      <Container11 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Label />
      <ContainerMargin />
    </div>
  );
}

function Container12() {
  return <div className="border-[rgba(0,0,0,0.15)] border-b border-solid h-px relative shrink-0 w-full" data-name="Container" />;
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[11px] text-[rgba(0,0,0,0.7)] tracking-[0.55px] uppercase whitespace-nowrap">Kontaktperson</p>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start justify-center left-[12px] overflow-clip top-[9px] w-[166px]" data-name="Text Input">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.4)] w-full">Søk på person...</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-white h-[36px] relative rounded-[16777200px] shrink-0 w-full" data-name="Container">
      <TextInput1 />
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0 w-full" data-name="Container:margin">
      <Container14 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <ContainerMargin1 />
    </div>
  );
}

function Container15() {
  return <div className="border-[rgba(0,0,0,0.15)] border-b border-solid h-px relative shrink-0 w-full" data-name="Container" />;
}

function Legend() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Legend">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[11px] text-[rgba(0,0,0,0.7)] tracking-[0.55px] uppercase whitespace-nowrap">Status</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
        <g id="Icon">
          <path d={svgPaths.p65069f0} fill="#00574D" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-white border border-[#00574d] border-solid content-stretch flex items-center justify-center left-[-1px] rounded-[6.5px] size-[13px] top-[-1px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function RadioButton() {
  return (
    <div className="bg-white border border-[#767676] border-solid relative rounded-[6.5px] shrink-0 size-[13px]" data-name="Radio Button">
      <Container17 />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Alle</p>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Label">
      <RadioButton />
      <Text3 />
    </div>
  );
}

function RadioButton1() {
  return <div className="bg-white border border-[#767676] border-solid relative rounded-[6.5px] shrink-0 size-[13px]" data-name="Radio Button" />;
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Aktiv</p>
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Label">
      <RadioButton1 />
      <Text4 />
    </div>
  );
}

function RadioButton2() {
  return <div className="bg-white border border-[#767676] border-solid relative rounded-[6.5px] shrink-0 size-[13px]" data-name="Radio Button" />;
}

function Text5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Avsluttet</p>
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Label">
      <RadioButton2 />
      <Text5 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[80px] items-start pt-[8px] relative shrink-0 w-[190px]" data-name="Container">
      <Label2 />
      <Label3 />
      <Label4 />
    </div>
  );
}

function FieldSet() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Field Set">
      <Legend />
      <Container16 />
    </div>
  );
}

function Container18() {
  return <div className="border-[rgba(0,0,0,0.15)] border-b border-solid h-px relative shrink-0 w-full" data-name="Container" />;
}

function Legend1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Legend">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[11px] text-[rgba(0,0,0,0.7)] tracking-[0.55px] uppercase whitespace-nowrap">Divisjon</p>
    </div>
  );
}

function ChipToggle() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0.25)] border-solid content-stretch flex flex-col h-[22.5px] items-center justify-center left-0 px-[8px] py-[2px] rounded-[4px] top-0" data-name="ChipToggle">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[11px] text-black text-center whitespace-nowrap">Annet</p>
    </div>
  );
}

function ChipToggle1() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0.25)] border-solid content-stretch flex flex-col h-[22.5px] items-center justify-center left-0 px-[8px] py-[2px] rounded-[4px] top-[28.5px]" data-name="ChipToggle">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[11px] text-black text-center whitespace-nowrap">bioteknologi og plantehelse</p>
    </div>
  );
}

function ChipToggle2() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0.25)] border-solid content-stretch flex flex-col h-[22.5px] items-center justify-center left-0 px-[8px] py-[2px] rounded-[4px] top-[57px]" data-name="ChipToggle">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[11px] text-black text-center whitespace-nowrap">kart og statistikk</p>
    </div>
  );
}

function ChipToggle3() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0.25)] border-solid content-stretch flex flex-col h-[22.5px] items-center justify-center left-0 px-[8px] py-[2px] rounded-[4px] top-[85.5px]" data-name="ChipToggle">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[11px] text-black text-center whitespace-nowrap">matproduksjon og samfunn</p>
    </div>
  );
}

function ChipToggle4() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0.25)] border-solid content-stretch flex flex-col h-[22.5px] items-center justify-center left-0 px-[8px] py-[2px] rounded-[4px] top-[114px]" data-name="ChipToggle">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[11px] text-black text-center whitespace-nowrap">miljø og naturressurser</p>
    </div>
  );
}

function ChipToggle5() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0.25)] border-solid content-stretch flex flex-col h-[22.5px] items-center justify-center left-0 px-[8px] py-[2px] rounded-[4px] top-[142.5px]" data-name="ChipToggle">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[11px] text-black text-center whitespace-nowrap">skog og utmark</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[165px] relative shrink-0 w-full" data-name="Container">
      <ChipToggle />
      <ChipToggle1 />
      <ChipToggle2 />
      <ChipToggle3 />
      <ChipToggle4 />
      <ChipToggle5 />
    </div>
  );
}

function ContainerMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Container:margin">
      <Container19 />
    </div>
  );
}

function FieldSet1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Field Set">
      <Legend1 />
      <ContainerMargin2 />
    </div>
  );
}

function Container20() {
  return <div className="border-[rgba(0,0,0,0.15)] border-b border-solid h-px relative shrink-0 w-full" data-name="Container" />;
}

function Legend2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Legend">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[11px] text-[rgba(0,0,0,0.7)] tracking-[0.55px] uppercase whitespace-nowrap">Filformat</p>
    </div>
  );
}

function ChipToggle6() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0.25)] border-solid content-stretch flex flex-col h-[22.5px] items-center justify-center left-0 px-[8px] py-[2px] rounded-[4px] top-0" data-name="ChipToggle">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[11px] text-black text-center whitespace-nowrap">CSV</p>
    </div>
  );
}

function ChipToggle7() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0.25)] border-solid content-stretch flex flex-col h-[22.5px] items-center justify-center left-[46.69px] px-[8px] py-[2px] rounded-[4px] top-0" data-name="ChipToggle">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[11px] text-black text-center whitespace-nowrap">GeoJSON</p>
    </div>
  );
}

function ChipToggle8() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0.25)] border-solid content-stretch flex flex-col h-[22.5px] items-center justify-center left-[121.95px] px-[8px] py-[2px] rounded-[4px] top-0" data-name="ChipToggle">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[11px] text-black text-center whitespace-nowrap">GeoTIFF</p>
    </div>
  );
}

function ChipToggle9() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0.25)] border-solid content-stretch flex flex-col h-[22.5px] items-center justify-center left-0 px-[8px] py-[2px] rounded-[4px] top-[28.5px]" data-name="ChipToggle">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[11px] text-black text-center whitespace-nowrap">JSON</p>
    </div>
  );
}

function ChipToggle10() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0.25)] border-solid content-stretch flex flex-col h-[22.5px] items-center justify-center left-[54.04px] px-[8px] py-[2px] rounded-[4px] top-[28.5px]" data-name="ChipToggle">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[11px] text-black text-center whitespace-nowrap">LAS</p>
    </div>
  );
}

function ChipToggle11() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0.25)] border-solid content-stretch flex flex-col h-[22.5px] items-center justify-center left-[98.91px] px-[8px] py-[2px] rounded-[4px] top-[28.5px]" data-name="ChipToggle">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[11px] text-black text-center whitespace-nowrap">NetCDF</p>
    </div>
  );
}

function ChipToggle12() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0.25)] border-solid content-stretch flex flex-col h-[22.5px] items-center justify-center left-0 px-[8px] py-[2px] rounded-[4px] top-[57px]" data-name="ChipToggle">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[11px] text-black text-center whitespace-nowrap">PDF</p>
    </div>
  );
}

function ChipToggle13() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0.25)] border-solid content-stretch flex flex-col h-[22.5px] items-center justify-center left-[45.46px] px-[8px] py-[2px] rounded-[4px] top-[57px]" data-name="ChipToggle">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[11px] text-black text-center whitespace-nowrap">PNG</p>
    </div>
  );
}

function ChipToggle14() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0.25)] border-solid content-stretch flex flex-col h-[22.5px] items-center justify-center left-[92.98px] px-[8px] py-[2px] rounded-[4px] top-[57px]" data-name="ChipToggle">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[11px] text-black text-center whitespace-nowrap">WFS</p>
    </div>
  );
}

function ChipToggle15() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0.25)] border-solid content-stretch flex flex-col h-[22.5px] items-center justify-center left-[141.38px] px-[8px] py-[2px] rounded-[4px] top-[57px]" data-name="ChipToggle">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[11px] text-black text-center whitespace-nowrap">WMS</p>
    </div>
  );
}

function ChipToggle16() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0.25)] border-solid content-stretch flex flex-col h-[22.5px] items-center justify-center left-0 px-[8px] py-[2px] rounded-[4px] top-[85.5px]" data-name="ChipToggle">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[11px] text-black text-center whitespace-nowrap">XLSX</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[108px] relative shrink-0 w-full" data-name="Container">
      <ChipToggle6 />
      <ChipToggle7 />
      <ChipToggle8 />
      <ChipToggle9 />
      <ChipToggle10 />
      <ChipToggle11 />
      <ChipToggle12 />
      <ChipToggle13 />
      <ChipToggle14 />
      <ChipToggle15 />
      <ChipToggle16 />
    </div>
  );
}

function ContainerMargin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Container:margin">
      <Container21 />
    </div>
  );
}

function FieldSet2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Field Set">
      <Legend2 />
      <ContainerMargin3 />
    </div>
  );
}

function Container22() {
  return <div className="border-[rgba(0,0,0,0.15)] border-b border-solid h-px relative shrink-0 w-full" data-name="Container" />;
}

function Legend3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Legend">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[11px] text-[rgba(0,0,0,0.7)] tracking-[0.55px] uppercase whitespace-nowrap">Sorter etter</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
        <g id="Icon">
          <path d={svgPaths.p65069f0} fill="#00574D" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute bg-white border border-[#00574d] border-solid content-stretch flex items-center justify-center left-[-1px] rounded-[6.5px] size-[13px] top-[-1px]" data-name="Container">
      <Icon3 />
    </div>
  );
}

function RadioButton3() {
  return (
    <div className="bg-white border border-[#767676] border-solid relative rounded-[6.5px] shrink-0 size-[13px]" data-name="Radio Button">
      <Container24 />
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Tittel (A–Å)</p>
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Label">
      <RadioButton3 />
      <Text6 />
    </div>
  );
}

function RadioButton4() {
  return <div className="bg-white border border-[#767676] border-solid relative rounded-[6.5px] shrink-0 size-[13px]" data-name="Radio Button" />;
}

function Text7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Tittel (Å–A)</p>
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Label">
      <RadioButton4 />
      <Text7 />
    </div>
  );
}

function RadioButton5() {
  return <div className="bg-white border border-[#767676] border-solid relative rounded-[6.5px] shrink-0 size-[13px]" data-name="Radio Button" />;
}

function Text8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Nyeste først</p>
    </div>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Label">
      <RadioButton5 />
      <Text8 />
    </div>
  );
}

function RadioButton6() {
  return <div className="bg-white border border-[#767676] border-solid relative rounded-[6.5px] shrink-0 size-[13px]" data-name="Radio Button" />;
}

function Text9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Eldste først</p>
    </div>
  );
}

function Label8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Label">
      <RadioButton6 />
      <Text9 />
    </div>
  );
}

function RadioButton7() {
  return <div className="bg-white border border-[#767676] border-solid relative rounded-[6.5px] shrink-0 size-[13px]" data-name="Radio Button" />;
}

function Text10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Kontaktperson</p>
    </div>
  );
}

function Label9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Label">
      <RadioButton7 />
      <Text10 />
    </div>
  );
}

function RadioButton8() {
  return <div className="bg-white border border-[#767676] border-solid relative rounded-[6.5px] shrink-0 size-[13px]" data-name="Radio Button" />;
}

function Text11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Divisjon</p>
    </div>
  );
}

function Label10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Label">
      <RadioButton8 />
      <Text11 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[158px] items-start pt-[8px] relative shrink-0 w-[190px]" data-name="Container">
      <Label5 />
      <Label6 />
      <Label7 />
      <Label8 />
      <Label9 />
      <Label10 />
    </div>
  );
}

function FieldSet3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Field Set">
      <Legend3 />
      <Container23 />
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[rgba(217,217,217,0.8)] content-stretch flex flex-col gap-[20px] items-start p-[20px] relative rounded-[17px] shrink-0 w-[230px]" data-name="Container">
      <Container9 />
      <Container10 />
      <Container12 />
      <Container13 />
      <Container15 />
      <FieldSet />
      <Container18 />
      <FieldSet1 />
      <Container20 />
      <FieldSet2 />
      <Container22 />
      <FieldSet3 />
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Arealressurskart (AR5)</p>
    </div>
  );
}

function PhaseBadge() {
  return (
    <div className="bg-[#15803d] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="PhaseBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Aktiv</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text12 />
      <PhaseBadge />
    </div>
  );
}

function Text13() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">GeoJSON</p>
    </div>
  );
}

function Text14() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">WMS</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">WFS</p>
    </div>
  );
}

function FormatBadges() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="FormatBadges">
      <Text13 />
      <Text14 />
      <Text15 />
    </div>
  );
}

function Text16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">Anna Berg</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <FormatBadges />
      <Text16 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p1ae48b70} id="Vector" stroke="#00574D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54286" />
        </g>
      </svg>
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-[rgba(0,87,77,0.1)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon4 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex h-[60px] items-end justify-between pt-[12px] relative shrink-0 w-[225px]" data-name="Container">
      <Container28 />
      <Container29 />
    </div>
  );
}

function DataCard() {
  return (
    <div className="bg-white col-1 content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-col items-start justify-between justify-self-stretch min-h-[150px] p-[16px] relative rounded-[17px] row-1 self-stretch shrink-0" data-name="DataCard">
      <Container26 />
      <Container27 />
    </div>
  );
}

function Text17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Avlingsprognoser korn</p>
    </div>
  );
}

function PhaseBadge1() {
  return (
    <div className="bg-[#374151] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="PhaseBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Avsluttet</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text17 />
      <PhaseBadge1 />
    </div>
  );
}

function Text18() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">JSON</p>
    </div>
  );
}

function Text19() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">CSV</p>
    </div>
  );
}

function FormatBadges1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="FormatBadges">
      <Text18 />
      <Text19 />
    </div>
  );
}

function Text20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">Anna Berg</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <FormatBadges1 />
      <Text20 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p1ae48b70} id="Vector" stroke="#00574D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54286" />
        </g>
      </svg>
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-[rgba(0,87,77,0.1)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon5 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex h-[60px] items-end justify-between pt-[12px] relative shrink-0 w-[225px]" data-name="Container">
      <Container32 />
      <Container33 />
    </div>
  );
}

function DataCard1() {
  return (
    <div className="bg-white col-2 content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-col items-start justify-between justify-self-stretch min-h-[150px] p-[16px] relative rounded-[17px] row-1 self-stretch shrink-0" data-name="DataCard">
      <Container30 />
      <Container31 />
    </div>
  );
}

function Text21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Barkbilleangrep gran</p>
    </div>
  );
}

function PhaseBadge2() {
  return (
    <div className="bg-[#15803d] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="PhaseBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Aktiv</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text21 />
      <PhaseBadge2 />
    </div>
  );
}

function Text22() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">GeoJSON</p>
    </div>
  );
}

function Text23() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">CSV</p>
    </div>
  );
}

function FormatBadges2() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="FormatBadges">
      <Text22 />
      <Text23 />
    </div>
  );
}

function Text24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">Bjørn Haugen</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <FormatBadges2 />
      <Text24 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p1ae48b70} id="Vector" stroke="#00574D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54286" />
        </g>
      </svg>
    </div>
  );
}

function Container37() {
  return (
    <div className="bg-[rgba(0,87,77,0.1)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon6 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex h-[60px] items-end justify-between pt-[12px] relative shrink-0 w-[225px]" data-name="Container">
      <Container36 />
      <Container37 />
    </div>
  );
}

function DataCard2() {
  return (
    <div className="bg-white col-3 content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-col items-start justify-between justify-self-stretch min-h-[150px] p-[16px] relative rounded-[17px] row-1 self-stretch shrink-0" data-name="DataCard">
      <Container34 />
      <Container35 />
    </div>
  );
}

function Text25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Beiteressurser utmark</p>
    </div>
  );
}

function PhaseBadge3() {
  return (
    <div className="bg-[#15803d] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="PhaseBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Aktiv</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text25 />
      <PhaseBadge3 />
    </div>
  );
}

function Text26() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">GeoJSON</p>
    </div>
  );
}

function Text27() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">WMS</p>
    </div>
  );
}

function FormatBadges3() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="FormatBadges">
      <Text26 />
      <Text27 />
    </div>
  );
}

function Text28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">Per Lund</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <FormatBadges3 />
      <Text28 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p1ae48b70} id="Vector" stroke="#00574D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54286" />
        </g>
      </svg>
    </div>
  );
}

function Container41() {
  return (
    <div className="bg-[rgba(0,87,77,0.1)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon7 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex h-[60px] items-end justify-between pt-[12px] relative shrink-0 w-[225px]" data-name="Container">
      <Container40 />
      <Container41 />
    </div>
  );
}

function DataCard3() {
  return (
    <div className="bg-white col-1 content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-col items-start justify-between justify-self-stretch min-h-[150px] p-[16px] relative rounded-[17px] row-2 self-stretch shrink-0" data-name="DataCard">
      <Container38 />
      <Container39 />
    </div>
  );
}

function Text29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] not-italic relative shrink-0 text-[14px] text-black w-[171px]">Biologisk plantevern resistens</p>
    </div>
  );
}

function PhaseBadge4() {
  return (
    <div className="bg-[#15803d] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="PhaseBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Aktiv</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Text29 />
      <PhaseBadge4 />
    </div>
  );
}

function Text30() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">CSV</p>
    </div>
  );
}

function Text31() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">XLSX</p>
    </div>
  );
}

function Text32() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">PDF</p>
    </div>
  );
}

function FormatBadges4() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="FormatBadges">
      <Text30 />
      <Text31 />
      <Text32 />
    </div>
  );
}

function Text33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">Guro Brodal</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <FormatBadges4 />
      <Text33 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p1ae48b70} id="Vector" stroke="#00574D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54286" />
        </g>
      </svg>
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-[rgba(0,87,77,0.1)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon8 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex h-[60px] items-end justify-between pt-[12px] relative shrink-0 w-[225px]" data-name="Container">
      <Container44 />
      <Container45 />
    </div>
  );
}

function DataCard4() {
  return (
    <div className="bg-white col-2 content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-col items-start justify-between justify-self-stretch min-h-[150px] p-[16px] relative rounded-[17px] row-2 self-stretch shrink-0" data-name="DataCard">
      <Container42 />
      <Container43 />
    </div>
  );
}

function Text34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">CO₂-opptak skog</p>
    </div>
  );
}

function PhaseBadge5() {
  return (
    <div className="bg-[#15803d] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="PhaseBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Aktiv</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text34 />
      <PhaseBadge5 />
    </div>
  );
}

function Text35() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">CSV</p>
    </div>
  );
}

function Text36() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">JSON</p>
    </div>
  );
}

function FormatBadges5() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="FormatBadges">
      <Text35 />
      <Text36 />
    </div>
  );
}

function Text37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">Knut Holm</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <FormatBadges5 />
      <Text37 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p1ae48b70} id="Vector" stroke="#00574D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54286" />
        </g>
      </svg>
    </div>
  );
}

function Container49() {
  return (
    <div className="bg-[rgba(0,87,77,0.1)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon9 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex h-[60px] items-end justify-between pt-[12px] relative shrink-0 w-[225px]" data-name="Container">
      <Container48 />
      <Container49 />
    </div>
  );
}

function DataCard5() {
  return (
    <div className="bg-white col-3 content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-col items-start justify-between justify-self-stretch min-h-[150px] p-[16px] relative rounded-[17px] row-2 self-stretch shrink-0" data-name="DataCard">
      <Container46 />
      <Container47 />
    </div>
  );
}

function Text38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Digital høydemodell skog</p>
    </div>
  );
}

function PhaseBadge6() {
  return (
    <div className="bg-[#15803d] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="PhaseBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Aktiv</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text38 />
      <PhaseBadge6 />
    </div>
  );
}

function Text39() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">LAS</p>
    </div>
  );
}

function Text40() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">GeoTIFF</p>
    </div>
  );
}

function Text41() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">WMS</p>
    </div>
  );
}

function FormatBadges6() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="FormatBadges">
      <Text39 />
      <Text40 />
      <Text41 />
    </div>
  );
}

function Text42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">Rolf Eriksen</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <FormatBadges6 />
      <Text42 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p1ae48b70} id="Vector" stroke="#00574D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54286" />
        </g>
      </svg>
    </div>
  );
}

function Container53() {
  return (
    <div className="bg-[rgba(0,87,77,0.1)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon10 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex h-[60px] items-end justify-between pt-[12px] relative shrink-0 w-[225px]" data-name="Container">
      <Container52 />
      <Container53 />
    </div>
  );
}

function DataCard6() {
  return (
    <div className="bg-white col-1 content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-col items-start justify-between justify-self-stretch min-h-[150px] p-[16px] relative rounded-[17px] row-3 self-stretch shrink-0" data-name="DataCard">
      <Container50 />
      <Container51 />
    </div>
  );
}

function Text43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] not-italic relative shrink-0 text-[14px] text-black w-[171px]">Digitalisering norsk landbruk</p>
    </div>
  );
}

function PhaseBadge7() {
  return (
    <div className="bg-[#15803d] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="PhaseBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Aktiv</p>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Text43 />
      <PhaseBadge7 />
    </div>
  );
}

function Text44() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">CSV</p>
    </div>
  );
}

function Text45() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">XLSX</p>
    </div>
  );
}

function Text46() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">PDF</p>
    </div>
  );
}

function FormatBadges7() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="FormatBadges">
      <Text44 />
      <Text45 />
      <Text46 />
    </div>
  );
}

function Text47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">Thomas Bøe</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <FormatBadges7 />
      <Text47 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p1ae48b70} id="Vector" stroke="#00574D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54286" />
        </g>
      </svg>
    </div>
  );
}

function Container57() {
  return (
    <div className="bg-[rgba(0,87,77,0.1)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon11 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex h-[60px] items-end justify-between pt-[12px] relative shrink-0 w-[225px]" data-name="Container">
      <Container56 />
      <Container57 />
    </div>
  );
}

function DataCard7() {
  return (
    <div className="bg-white col-2 content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-col items-start justify-between justify-self-stretch min-h-[150px] p-[16px] relative rounded-[17px] row-3 self-stretch shrink-0" data-name="DataCard">
      <Container54 />
      <Container55 />
    </div>
  );
}

function Text48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] not-italic relative shrink-0 text-[14px] text-black w-[152px]">Erosjon og sedimenttransport</p>
    </div>
  );
}

function PhaseBadge8() {
  return (
    <div className="bg-[#374151] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="PhaseBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Avsluttet</p>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Text48 />
      <PhaseBadge8 />
    </div>
  );
}

function Text49() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">CSV</p>
    </div>
  );
}

function Text50() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">GeoJSON</p>
    </div>
  );
}

function Text51() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">PDF</p>
    </div>
  );
}

function FormatBadges8() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="FormatBadges">
      <Text49 />
      <Text50 />
      <Text51 />
    </div>
  );
}

function Text52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">Ola Dæhli</p>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <FormatBadges8 />
      <Text52 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p1ae48b70} id="Vector" stroke="#00574D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54286" />
        </g>
      </svg>
    </div>
  );
}

function Container61() {
  return (
    <div className="bg-[rgba(0,87,77,0.1)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon12 />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex h-[60px] items-end justify-between pt-[12px] relative shrink-0 w-[225px]" data-name="Container">
      <Container60 />
      <Container61 />
    </div>
  );
}

function DataCard8() {
  return (
    <div className="bg-white col-3 content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-col items-start justify-between justify-self-stretch min-h-[150px] p-[16px] relative rounded-[17px] row-3 self-stretch shrink-0" data-name="DataCard">
      <Container58 />
      <Container59 />
    </div>
  );
}

function Text53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Flomsoner kartlegging</p>
    </div>
  );
}

function PhaseBadge9() {
  return (
    <div className="bg-[#374151] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="PhaseBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Avsluttet</p>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text53 />
      <PhaseBadge9 />
    </div>
  );
}

function Text54() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">GeoJSON</p>
    </div>
  );
}

function Text55() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">WMS</p>
    </div>
  );
}

function Text56() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">PDF</p>
    </div>
  );
}

function FormatBadges9() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="FormatBadges">
      <Text54 />
      <Text55 />
      <Text56 />
    </div>
  );
}

function Text57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">Anna Berg</p>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <FormatBadges9 />
      <Text57 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p1ae48b70} id="Vector" stroke="#00574D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54286" />
        </g>
      </svg>
    </div>
  );
}

function Container65() {
  return (
    <div className="bg-[rgba(0,87,77,0.1)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon13 />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex h-[60px] items-end justify-between pt-[12px] relative shrink-0 w-[225px]" data-name="Container">
      <Container64 />
      <Container65 />
    </div>
  );
}

function DataCard9() {
  return (
    <div className="bg-white col-1 content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-col items-start justify-between justify-self-stretch min-h-[150px] p-[16px] relative rounded-[17px] row-4 self-stretch shrink-0" data-name="DataCard">
      <Container62 />
      <Container63 />
    </div>
  );
}

function Text58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] not-italic relative shrink-0 text-[14px] text-black w-[152px]">Fluvial sandtransport i norske vassdrag</p>
    </div>
  );
}

function PhaseBadge10() {
  return (
    <div className="bg-[#374151] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="PhaseBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Avsluttet</p>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Text58 />
      <PhaseBadge10 />
    </div>
  );
}

function Text59() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">CSV</p>
    </div>
  );
}

function Text60() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">GeoJSON</p>
    </div>
  );
}

function Text61() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">PDF</p>
    </div>
  );
}

function FormatBadges10() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="FormatBadges">
      <Text59 />
      <Text60 />
      <Text61 />
    </div>
  );
}

function Text62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">Maria Malmstedt Andersen</p>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <FormatBadges10 />
      <Text62 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p1ae48b70} id="Vector" stroke="#00574D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54286" />
        </g>
      </svg>
    </div>
  );
}

function Container69() {
  return (
    <div className="bg-[rgba(0,87,77,0.1)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon14 />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex h-[60px] items-end justify-between pt-[12px] relative shrink-0 w-[225px]" data-name="Container">
      <Container68 />
      <Container69 />
    </div>
  );
}

function DataCard10() {
  return (
    <div className="bg-white col-2 content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-col items-start justify-between justify-self-stretch min-h-[150px] p-[16px] relative rounded-[17px] row-4 self-stretch shrink-0" data-name="DataCard">
      <Container66 />
      <Container67 />
    </div>
  );
}

function Text63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] not-italic relative shrink-0 text-[14px] text-black w-[152px]">Friluftsliv og ferdsel utmark</p>
    </div>
  );
}

function PhaseBadge11() {
  return (
    <div className="bg-[#374151] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="PhaseBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Avsluttet</p>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Text63 />
      <PhaseBadge11 />
    </div>
  );
}

function Text64() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">GeoJSON</p>
    </div>
  );
}

function Text65() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">CSV</p>
    </div>
  );
}

function Text66() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">PDF</p>
    </div>
  );
}

function FormatBadges11() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="FormatBadges">
      <Text64 />
      <Text65 />
      <Text66 />
    </div>
  );
}

function Text67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">Knut Holm</p>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <FormatBadges11 />
      <Text67 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p1ae48b70} id="Vector" stroke="#00574D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54286" />
        </g>
      </svg>
    </div>
  );
}

function Container73() {
  return (
    <div className="bg-[rgba(0,87,77,0.1)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon15 />
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex h-[60px] items-end justify-between pt-[12px] relative shrink-0 w-[225px]" data-name="Container">
      <Container72 />
      <Container73 />
    </div>
  );
}

function DataCard11() {
  return (
    <div className="bg-white col-3 content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-col items-start justify-between justify-self-stretch min-h-[150px] p-[16px] relative rounded-[17px] row-4 self-stretch shrink-0" data-name="DataCard">
      <Container70 />
      <Container71 />
    </div>
  );
}

function Text68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Frøkvalitet norske sorter</p>
    </div>
  );
}

function PhaseBadge12() {
  return (
    <div className="bg-[#15803d] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="PhaseBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Aktiv</p>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text68 />
      <PhaseBadge12 />
    </div>
  );
}

function Text69() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">CSV</p>
    </div>
  );
}

function Text70() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">JSON</p>
    </div>
  );
}

function FormatBadges12() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="FormatBadges">
      <Text69 />
      <Text70 />
    </div>
  );
}

function Text71() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">Nina Holden</p>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <FormatBadges12 />
      <Text71 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p1ae48b70} id="Vector" stroke="#00574D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54286" />
        </g>
      </svg>
    </div>
  );
}

function Container77() {
  return (
    <div className="bg-[rgba(0,87,77,0.1)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon16 />
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex h-[60px] items-end justify-between pt-[12px] relative shrink-0 w-[225px]" data-name="Container">
      <Container76 />
      <Container77 />
    </div>
  );
}

function DataCard12() {
  return (
    <div className="bg-white col-1 content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-col items-start justify-between justify-self-stretch min-h-[150px] p-[16px] relative rounded-[17px] row-5 self-stretch shrink-0" data-name="DataCard">
      <Container74 />
      <Container75 />
    </div>
  );
}

function Text72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] not-italic relative shrink-0 text-[14px] text-black w-[171px]">GMO-overvåking norsk natur</p>
    </div>
  );
}

function PhaseBadge13() {
  return (
    <div className="bg-[#15803d] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="PhaseBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Aktiv</p>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Text72 />
      <PhaseBadge13 />
    </div>
  );
}

function Text73() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">CSV</p>
    </div>
  );
}

function Text74() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">PDF</p>
    </div>
  );
}

function FormatBadges13() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="FormatBadges">
      <Text73 />
      <Text74 />
    </div>
  );
}

function Text75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">Svein Bakkebø</p>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <FormatBadges13 />
      <Text75 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p1ae48b70} id="Vector" stroke="#00574D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54286" />
        </g>
      </svg>
    </div>
  );
}

function Container81() {
  return (
    <div className="bg-[rgba(0,87,77,0.1)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon17 />
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex h-[60px] items-end justify-between pt-[12px] relative shrink-0 w-[225px]" data-name="Container">
      <Container80 />
      <Container81 />
    </div>
  );
}

function DataCard13() {
  return (
    <div className="bg-white col-2 content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-col items-start justify-between justify-self-stretch min-h-[150px] p-[16px] relative rounded-[17px] row-5 self-stretch shrink-0" data-name="DataCard">
      <Container78 />
      <Container79 />
    </div>
  );
}

function Text76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] not-italic relative shrink-0 text-[14px] text-black w-[152px]">Grensekryssende naturovervåking Skandinavia</p>
    </div>
  );
}

function PhaseBadge14() {
  return (
    <div className="bg-[#374151] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="PhaseBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Avsluttet</p>
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Text76 />
      <PhaseBadge14 />
    </div>
  );
}

function Text77() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">CSV</p>
    </div>
  );
}

function Text78() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">JSON</p>
    </div>
  );
}

function Text79() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">PDF</p>
    </div>
  );
}

function FormatBadges14() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="FormatBadges">
      <Text77 />
      <Text78 />
      <Text79 />
    </div>
  );
}

function Text80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">Lene Sørby</p>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <FormatBadges14 />
      <Text80 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p1ae48b70} id="Vector" stroke="#00574D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54286" />
        </g>
      </svg>
    </div>
  );
}

function Container85() {
  return (
    <div className="bg-[rgba(0,87,77,0.1)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon18 />
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex h-[60px] items-end justify-between pt-[12px] relative shrink-0 w-[225px]" data-name="Container">
      <Container84 />
      <Container85 />
    </div>
  );
}

function DataCard14() {
  return (
    <div className="bg-white col-3 content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-col items-start justify-self-stretch min-h-[150px] p-[16px] relative rounded-[17px] row-5 self-stretch shrink-0" data-name="DataCard">
      <Container82 />
      <Container83 />
    </div>
  );
}

function Text81() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] not-italic relative shrink-0 text-[14px] text-black w-[171px]">Husdyrproduksjon statistikk</p>
    </div>
  );
}

function PhaseBadge15() {
  return (
    <div className="bg-[#15803d] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="PhaseBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Aktiv</p>
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Text81 />
      <PhaseBadge15 />
    </div>
  );
}

function Text82() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">CSV</p>
    </div>
  );
}

function Text83() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">JSON</p>
    </div>
  );
}

function FormatBadges15() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="FormatBadges">
      <Text82 />
      <Text83 />
    </div>
  );
}

function Text84() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">Marte Nygård</p>
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <FormatBadges15 />
      <Text84 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p1ae48b70} id="Vector" stroke="#00574D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54286" />
        </g>
      </svg>
    </div>
  );
}

function Container89() {
  return (
    <div className="bg-[rgba(0,87,77,0.1)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon19 />
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex h-[60px] items-end justify-between pt-[12px] relative shrink-0 w-[225px]" data-name="Container">
      <Container88 />
      <Container89 />
    </div>
  );
}

function DataCard15() {
  return (
    <div className="bg-white col-1 content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-col items-start justify-between justify-self-stretch min-h-[150px] p-[16px] relative rounded-[17px] row-6 self-stretch shrink-0" data-name="DataCard">
      <Container86 />
      <Container87 />
    </div>
  );
}

function Text85() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Insekter i norsk landbruk</p>
    </div>
  );
}

function PhaseBadge16() {
  return (
    <div className="bg-[#15803d] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="PhaseBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Aktiv</p>
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text85 />
      <PhaseBadge16 />
    </div>
  );
}

function Text86() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">CSV</p>
    </div>
  );
}

function Text87() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">JSON</p>
    </div>
  );
}

function FormatBadges16() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="FormatBadges">
      <Text86 />
      <Text87 />
    </div>
  );
}

function Text88() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">Siri Dale</p>
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <FormatBadges16 />
      <Text88 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p1ae48b70} id="Vector" stroke="#00574D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54286" />
        </g>
      </svg>
    </div>
  );
}

function Container93() {
  return (
    <div className="bg-[rgba(0,87,77,0.1)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon20 />
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex h-[60px] items-end justify-between pt-[12px] relative shrink-0 w-[225px]" data-name="Container">
      <Container92 />
      <Container93 />
    </div>
  );
}

function DataCard16() {
  return (
    <div className="bg-white col-2 content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-col items-start justify-between justify-self-stretch min-h-[150px] p-[16px] relative rounded-[17px] row-6 self-stretch shrink-0" data-name="DataCard">
      <Container90 />
      <Container91 />
    </div>
  );
}

function Text89() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] not-italic relative shrink-0 text-[14px] text-black w-[171px]">Intern metodeutvikling kartanalyse</p>
    </div>
  );
}

function PhaseBadge17() {
  return (
    <div className="bg-[#15803d] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="PhaseBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Aktiv</p>
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Text89 />
      <PhaseBadge17 />
    </div>
  );
}

function Text90() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">GeoTIFF</p>
    </div>
  );
}

function FormatBadges17() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="FormatBadges">
      <Text90 />
    </div>
  );
}

function Text91() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">Rolf Eriksen</p>
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <FormatBadges17 />
      <Text91 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p1ae48b70} id="Vector" stroke="#00574D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54286" />
        </g>
      </svg>
    </div>
  );
}

function Container97() {
  return (
    <div className="bg-[rgba(0,87,77,0.1)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon21 />
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex h-[60px] items-end justify-between pt-[12px] relative shrink-0 w-[225px]" data-name="Container">
      <Container96 />
      <Container97 />
    </div>
  );
}

function DataCard17() {
  return (
    <div className="bg-white col-3 content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-col items-start justify-between justify-self-stretch min-h-[150px] p-[16px] relative rounded-[17px] row-6 self-stretch shrink-0" data-name="DataCard">
      <Container94 />
      <Container95 />
    </div>
  );
}

function Text92() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] not-italic relative shrink-0 text-[14px] text-black w-[171px]">Jordbruksareal statistikk fylke</p>
    </div>
  );
}

function PhaseBadge18() {
  return (
    <div className="bg-[#15803d] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="PhaseBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Aktiv</p>
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Text92 />
      <PhaseBadge18 />
    </div>
  );
}

function Text93() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">CSV</p>
    </div>
  );
}

function Text94() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">JSON</p>
    </div>
  );
}

function Text95() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">XLSX</p>
    </div>
  );
}

function FormatBadges18() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="FormatBadges">
      <Text93 />
      <Text94 />
      <Text95 />
    </div>
  );
}

function Text96() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">Anna Berg</p>
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <FormatBadges18 />
      <Text96 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p1ae48b70} id="Vector" stroke="#00574D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54286" />
        </g>
      </svg>
    </div>
  );
}

function Container101() {
  return (
    <div className="bg-[rgba(0,87,77,0.1)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon22 />
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex h-[60px] items-end justify-between pt-[12px] relative shrink-0 w-[225px]" data-name="Container">
      <Container100 />
      <Container101 />
    </div>
  );
}

function DataCard18() {
  return (
    <div className="bg-white col-1 content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-col items-start justify-between justify-self-stretch min-h-[150px] p-[16px] relative rounded-[17px] row-7 self-stretch shrink-0" data-name="DataCard">
      <Container98 />
      <Container99 />
    </div>
  );
}

function Text97() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Jordkvalitetsdata</p>
    </div>
  );
}

function PhaseBadge19() {
  return (
    <div className="bg-[#15803d] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="PhaseBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Aktiv</p>
    </div>
  );
}

function Container102() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text97 />
      <PhaseBadge19 />
    </div>
  );
}

function Text98() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">CSV</p>
    </div>
  );
}

function Text99() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">GeoJSON</p>
    </div>
  );
}

function FormatBadges19() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="FormatBadges">
      <Text98 />
      <Text99 />
    </div>
  );
}

function Text100() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">Per Lund</p>
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <FormatBadges19 />
      <Text100 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p1ae48b70} id="Vector" stroke="#00574D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54286" />
        </g>
      </svg>
    </div>
  );
}

function Container105() {
  return (
    <div className="bg-[rgba(0,87,77,0.1)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon23 />
    </div>
  );
}

function Container103() {
  return (
    <div className="content-stretch flex h-[60px] items-end justify-between pt-[12px] relative shrink-0 w-[225px]" data-name="Container">
      <Container104 />
      <Container105 />
    </div>
  );
}

function DataCard19() {
  return (
    <div className="bg-white col-2 content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-col items-start justify-between justify-self-stretch min-h-[150px] p-[16px] relative rounded-[17px] row-7 self-stretch shrink-0" data-name="DataCard">
      <Container102 />
      <Container103 />
    </div>
  );
}

function Text101() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] not-italic relative shrink-0 text-[14px] text-black w-[152px]">Kartlegging av kystdyner langs norskekysten</p>
    </div>
  );
}

function PhaseBadge20() {
  return (
    <div className="bg-[#374151] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="PhaseBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Avsluttet</p>
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Text101 />
      <PhaseBadge20 />
    </div>
  );
}

function Text102() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">GeoJSON</p>
    </div>
  );
}

function Text103() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">GeoTIFF</p>
    </div>
  );
}

function Text104() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">PDF</p>
    </div>
  );
}

function FormatBadges20() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="FormatBadges">
      <Text102 />
      <Text103 />
      <Text104 />
    </div>
  );
}

function Text105() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">Maria Malmstedt Andersen</p>
    </div>
  );
}

function Container108() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <FormatBadges20 />
      <Text105 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p1ae48b70} id="Vector" stroke="#00574D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54286" />
        </g>
      </svg>
    </div>
  );
}

function Container109() {
  return (
    <div className="bg-[rgba(0,87,77,0.1)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon24 />
    </div>
  );
}

function Container107() {
  return (
    <div className="content-stretch flex h-[60px] items-end justify-between pt-[12px] relative shrink-0 w-[225px]" data-name="Container">
      <Container108 />
      <Container109 />
    </div>
  );
}

function DataCard20() {
  return (
    <div className="bg-white col-3 content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-col items-start justify-self-stretch min-h-[150px] p-[16px] relative rounded-[17px] row-7 self-stretch shrink-0" data-name="DataCard">
      <Container106 />
      <Container107 />
    </div>
  );
}

function Text106() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] not-italic relative shrink-0 text-[14px] text-black w-[152px]">Kartlegging av urbane grøntarealer i Oslo</p>
    </div>
  );
}

function PhaseBadge21() {
  return (
    <div className="bg-[#374151] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="PhaseBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Avsluttet</p>
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Text106 />
      <PhaseBadge21 />
    </div>
  );
}

function Text107() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">GeoJSON</p>
    </div>
  );
}

function Text108() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">XLSX</p>
    </div>
  );
}

function Text109() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">PDF</p>
    </div>
  );
}

function FormatBadges21() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="FormatBadges">
      <Text107 />
      <Text108 />
      <Text109 />
    </div>
  );
}

function Text110() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">Halvard Grimnes Haga</p>
    </div>
  );
}

function Container112() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <FormatBadges21 />
      <Text110 />
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p1ae48b70} id="Vector" stroke="#00574D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54286" />
        </g>
      </svg>
    </div>
  );
}

function Container113() {
  return (
    <div className="bg-[rgba(0,87,77,0.1)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon25 />
    </div>
  );
}

function Container111() {
  return (
    <div className="content-stretch flex h-[60px] items-end justify-between pt-[12px] relative shrink-0 w-[225px]" data-name="Container">
      <Container112 />
      <Container113 />
    </div>
  );
}

function DataCard21() {
  return (
    <div className="bg-white col-1 content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-col items-start justify-between justify-self-stretch min-h-[150px] p-[16px] relative rounded-[17px] row-8 self-stretch shrink-0" data-name="DataCard">
      <Container110 />
      <Container111 />
    </div>
  );
}

function Text111() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] not-italic relative shrink-0 text-[14px] text-black w-[152px]">Klimagassutslipp landbruk</p>
    </div>
  );
}

function PhaseBadge22() {
  return (
    <div className="bg-[#374151] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="PhaseBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Avsluttet</p>
    </div>
  );
}

function Container114() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Text111 />
      <PhaseBadge22 />
    </div>
  );
}

function Text112() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">CSV</p>
    </div>
  );
}

function Text113() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">JSON</p>
    </div>
  );
}

function FormatBadges22() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="FormatBadges">
      <Text112 />
      <Text113 />
    </div>
  );
}

function Text114() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">Siri Dale</p>
    </div>
  );
}

function Container116() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <FormatBadges22 />
      <Text114 />
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p1ae48b70} id="Vector" stroke="#00574D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54286" />
        </g>
      </svg>
    </div>
  );
}

function Container117() {
  return (
    <div className="bg-[rgba(0,87,77,0.1)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon26 />
    </div>
  );
}

function Container115() {
  return (
    <div className="content-stretch flex h-[60px] items-end justify-between pt-[12px] relative shrink-0 w-[225px]" data-name="Container">
      <Container116 />
      <Container117 />
    </div>
  );
}

function DataCard22() {
  return (
    <div className="bg-white col-2 content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-col items-start justify-between justify-self-stretch min-h-[150px] p-[16px] relative rounded-[17px] row-8 self-stretch shrink-0" data-name="DataCard">
      <Container114 />
      <Container115 />
    </div>
  );
}

function Text115() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] not-italic relative shrink-0 text-[14px] text-black w-[152px]">Kunnskapsgrunnlag neste jordbruksoppgjør</p>
    </div>
  );
}

function PhaseBadge23() {
  return (
    <div className="bg-[#374151] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="PhaseBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Avsluttet</p>
    </div>
  );
}

function Container118() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Text115 />
      <PhaseBadge23 />
    </div>
  );
}

function Text116() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">PDF</p>
    </div>
  );
}

function Text117() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">XLSX</p>
    </div>
  );
}

function FormatBadges23() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="FormatBadges">
      <Text116 />
      <Text117 />
    </div>
  );
}

function Text118() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">Mari Viken</p>
    </div>
  );
}

function Container120() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <FormatBadges23 />
      <Text118 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p1ae48b70} id="Vector" stroke="#00574D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54286" />
        </g>
      </svg>
    </div>
  );
}

function Container121() {
  return (
    <div className="bg-[rgba(0,87,77,0.1)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon27 />
    </div>
  );
}

function Container119() {
  return (
    <div className="content-stretch flex h-[60px] items-end justify-between pt-[12px] relative shrink-0 w-[225px]" data-name="Container">
      <Container120 />
      <Container121 />
    </div>
  );
}

function DataCard23() {
  return (
    <div className="bg-white col-3 content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-col items-start justify-self-stretch min-h-[150px] p-[16px] relative rounded-[17px] row-8 self-stretch shrink-0" data-name="DataCard">
      <Container118 />
      <Container119 />
    </div>
  );
}

function Text119() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] not-italic relative shrink-0 text-[14px] text-black w-[171px]">Matsvinn primærproduksjon</p>
    </div>
  );
}

function PhaseBadge24() {
  return (
    <div className="bg-[#15803d] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="PhaseBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Aktiv</p>
    </div>
  );
}

function Container122() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Text119 />
      <PhaseBadge24 />
    </div>
  );
}

function Text120() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">CSV</p>
    </div>
  );
}

function Text121() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">JSON</p>
    </div>
  );
}

function FormatBadges24() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="FormatBadges">
      <Text120 />
      <Text121 />
    </div>
  );
}

function Text122() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">Ingrid Øverland</p>
    </div>
  );
}

function Container124() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <FormatBadges24 />
      <Text122 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p1ae48b70} id="Vector" stroke="#00574D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54286" />
        </g>
      </svg>
    </div>
  );
}

function Container125() {
  return (
    <div className="bg-[rgba(0,87,77,0.1)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon28 />
    </div>
  );
}

function Container123() {
  return (
    <div className="content-stretch flex h-[60px] items-end justify-between pt-[12px] relative shrink-0 w-[225px]" data-name="Container">
      <Container124 />
      <Container125 />
    </div>
  );
}

function DataCard24() {
  return (
    <div className="bg-white col-1 content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-col items-start justify-between justify-self-stretch min-h-[150px] p-[16px] relative rounded-[17px] row-9 self-stretch shrink-0" data-name="DataCard">
      <Container122 />
      <Container123 />
    </div>
  );
}

function Text123() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] not-italic relative shrink-0 text-[14px] text-black w-[152px]">Mykotoksin i korn helserisiko</p>
    </div>
  );
}

function PhaseBadge25() {
  return (
    <div className="bg-[#374151] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="PhaseBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Avsluttet</p>
    </div>
  );
}

function Container126() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Text123 />
      <PhaseBadge25 />
    </div>
  );
}

function Text124() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">CSV</p>
    </div>
  );
}

function Text125() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">XLSX</p>
    </div>
  );
}

function Text126() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">PDF</p>
    </div>
  );
}

function FormatBadges25() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="FormatBadges">
      <Text124 />
      <Text125 />
      <Text126 />
    </div>
  );
}

function Text127() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">Mari Viken</p>
    </div>
  );
}

function Container128() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <FormatBadges25 />
      <Text127 />
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p1ae48b70} id="Vector" stroke="#00574D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54286" />
        </g>
      </svg>
    </div>
  );
}

function Container129() {
  return (
    <div className="bg-[rgba(0,87,77,0.1)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon29 />
    </div>
  );
}

function Container127() {
  return (
    <div className="content-stretch flex h-[60px] items-end justify-between pt-[12px] relative shrink-0 w-[225px]" data-name="Container">
      <Container128 />
      <Container129 />
    </div>
  );
}

function DataCard25() {
  return (
    <div className="bg-white col-2 content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-col items-start justify-between justify-self-stretch min-h-[150px] p-[16px] relative rounded-[17px] row-9 self-stretch shrink-0" data-name="DataCard">
      <Container126 />
      <Container127 />
    </div>
  );
}

function Text128() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Myrarealkart Norge</p>
    </div>
  );
}

function PhaseBadge26() {
  return (
    <div className="bg-[#374151] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="PhaseBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Avsluttet</p>
    </div>
  );
}

function Container130() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text128 />
      <PhaseBadge26 />
    </div>
  );
}

function Text129() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">GeoJSON</p>
    </div>
  );
}

function Text130() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">WMS</p>
    </div>
  );
}

function Text131() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">PDF</p>
    </div>
  );
}

function FormatBadges26() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="FormatBadges">
      <Text129 />
      <Text130 />
      <Text131 />
    </div>
  );
}

function Text132() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">Lena Foss</p>
    </div>
  );
}

function Container132() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <FormatBadges26 />
      <Text132 />
    </div>
  );
}

function Icon30() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p1ae48b70} id="Vector" stroke="#00574D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54286" />
        </g>
      </svg>
    </div>
  );
}

function Container133() {
  return (
    <div className="bg-[rgba(0,87,77,0.1)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon30 />
    </div>
  );
}

function Container131() {
  return (
    <div className="content-stretch flex h-[60px] items-end justify-between pt-[12px] relative shrink-0 w-[225px]" data-name="Container">
      <Container132 />
      <Container133 />
    </div>
  );
}

function DataCard26() {
  return (
    <div className="bg-white col-3 content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-col items-start justify-between justify-self-stretch min-h-[150px] p-[16px] relative rounded-[17px] row-9 self-stretch shrink-0" data-name="DataCard">
      <Container130 />
      <Container131 />
    </div>
  );
}

function Text133() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] not-italic relative shrink-0 text-[14px] text-black w-[171px]">Naturtyper kulturlandskap</p>
    </div>
  );
}

function PhaseBadge27() {
  return (
    <div className="bg-[#15803d] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="PhaseBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Aktiv</p>
    </div>
  );
}

function Container134() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Text133 />
      <PhaseBadge27 />
    </div>
  );
}

function Text134() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">GeoJSON</p>
    </div>
  );
}

function Text135() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">WFS</p>
    </div>
  );
}

function FormatBadges27() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="FormatBadges">
      <Text134 />
      <Text135 />
    </div>
  );
}

function Text136() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">Heidi Mossberg</p>
    </div>
  );
}

function Container136() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <FormatBadges27 />
      <Text136 />
    </div>
  );
}

function Icon31() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p1ae48b70} id="Vector" stroke="#00574D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54286" />
        </g>
      </svg>
    </div>
  );
}

function Container137() {
  return (
    <div className="bg-[rgba(0,87,77,0.1)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon31 />
    </div>
  );
}

function Container135() {
  return (
    <div className="content-stretch flex h-[60px] items-end justify-between pt-[12px] relative shrink-0 w-[225px]" data-name="Container">
      <Container136 />
      <Container137 />
    </div>
  );
}

function DataCard27() {
  return (
    <div className="bg-white col-1 content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-col items-start justify-between justify-self-stretch min-h-[150px] p-[16px] relative rounded-[17px] row-10 self-stretch shrink-0" data-name="DataCard">
      <Container134 />
      <Container135 />
    </div>
  );
}

function Text137() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] not-italic relative shrink-0 text-[14px] text-black w-[171px]">Nedbørsmålinger historisk</p>
    </div>
  );
}

function PhaseBadge28() {
  return (
    <div className="bg-[#15803d] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="PhaseBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Aktiv</p>
    </div>
  );
}

function Container138() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Text137 />
      <PhaseBadge28 />
    </div>
  );
}

function Text138() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">CSV</p>
    </div>
  );
}

function Text139() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">JSON</p>
    </div>
  );
}

function FormatBadges28() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="FormatBadges">
      <Text138 />
      <Text139 />
    </div>
  );
}

function Text140() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">Siri Dale</p>
    </div>
  );
}

function Container140() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <FormatBadges28 />
      <Text140 />
    </div>
  );
}

function Icon32() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p1ae48b70} id="Vector" stroke="#00574D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54286" />
        </g>
      </svg>
    </div>
  );
}

function Container141() {
  return (
    <div className="bg-[rgba(0,87,77,0.1)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon32 />
    </div>
  );
}

function Container139() {
  return (
    <div className="content-stretch flex h-[60px] items-end justify-between pt-[12px] relative shrink-0 w-[225px]" data-name="Container">
      <Container140 />
      <Container141 />
    </div>
  );
}

function DataCard28() {
  return (
    <div className="bg-white col-2 content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-col items-start justify-between justify-self-stretch min-h-[150px] p-[16px] relative rounded-[17px] row-10 self-stretch shrink-0" data-name="DataCard">
      <Container138 />
      <Container139 />
    </div>
  );
}

function Text141() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] not-italic relative shrink-0 text-[14px] text-black w-[171px]">Norsk genbank plantesorter</p>
    </div>
  );
}

function PhaseBadge29() {
  return (
    <div className="bg-[#15803d] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="PhaseBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Aktiv</p>
    </div>
  );
}

function Container142() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Text141 />
      <PhaseBadge29 />
    </div>
  );
}

function Text142() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">CSV</p>
    </div>
  );
}

function Text143() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">JSON</p>
    </div>
  );
}

function Text144() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">PDF</p>
    </div>
  );
}

function FormatBadges29() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="FormatBadges">
      <Text142 />
      <Text143 />
      <Text144 />
    </div>
  );
}

function Text145() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">Åsmund Asdal</p>
    </div>
  );
}

function Container144() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <FormatBadges29 />
      <Text145 />
    </div>
  );
}

function Icon33() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p1ae48b70} id="Vector" stroke="#00574D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54286" />
        </g>
      </svg>
    </div>
  );
}

function Container145() {
  return (
    <div className="bg-[rgba(0,87,77,0.1)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon33 />
    </div>
  );
}

function Container143() {
  return (
    <div className="content-stretch flex h-[60px] items-end justify-between pt-[12px] relative shrink-0 w-[225px]" data-name="Container">
      <Container144 />
      <Container145 />
    </div>
  );
}

function DataCard29() {
  return (
    <div className="bg-white col-3 content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-col items-start justify-between justify-self-stretch min-h-[150px] p-[16px] relative rounded-[17px] row-10 self-stretch shrink-0" data-name="DataCard">
      <Container142 />
      <Container143 />
    </div>
  );
}

function Text146() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] not-italic relative shrink-0 text-[14px] text-black w-[152px]">Plantehelse importerte varer</p>
    </div>
  );
}

function PhaseBadge30() {
  return (
    <div className="bg-[#374151] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="PhaseBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Avsluttet</p>
    </div>
  );
}

function Container146() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Text146 />
      <PhaseBadge30 />
    </div>
  );
}

function Text147() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">CSV</p>
    </div>
  );
}

function Text148() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">PDF</p>
    </div>
  );
}

function FormatBadges30() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="FormatBadges">
      <Text147 />
      <Text148 />
    </div>
  );
}

function Text149() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">Marte Nygård</p>
    </div>
  );
}

function Container148() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <FormatBadges30 />
      <Text149 />
    </div>
  );
}

function Icon34() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p1ae48b70} id="Vector" stroke="#00574D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54286" />
        </g>
      </svg>
    </div>
  );
}

function Container149() {
  return (
    <div className="bg-[rgba(0,87,77,0.1)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon34 />
    </div>
  );
}

function Container147() {
  return (
    <div className="content-stretch flex h-[60px] items-end justify-between pt-[12px] relative shrink-0 w-[225px]" data-name="Container">
      <Container148 />
      <Container149 />
    </div>
  );
}

function DataCard30() {
  return (
    <div className="bg-white col-1 content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-col items-start justify-between justify-self-stretch min-h-[150px] p-[16px] relative rounded-[17px] row-11 self-stretch shrink-0" data-name="DataCard">
      <Container146 />
      <Container147 />
    </div>
  );
}

function Text150() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] not-italic relative shrink-0 text-[14px] text-black w-[152px]">Plantepatogener korn og kål</p>
    </div>
  );
}

function PhaseBadge31() {
  return (
    <div className="bg-[#374151] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="PhaseBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Avsluttet</p>
    </div>
  );
}

function Container150() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Text150 />
      <PhaseBadge31 />
    </div>
  );
}

function Text151() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">CSV</p>
    </div>
  );
}

function Text152() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">JSON</p>
    </div>
  );
}

function Text153() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">PDF</p>
    </div>
  );
}

function FormatBadges31() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="FormatBadges">
      <Text151 />
      <Text152 />
      <Text153 />
    </div>
  );
}

function Text154() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">Tone Birkemoen</p>
    </div>
  );
}

function Container152() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <FormatBadges31 />
      <Text154 />
    </div>
  );
}

function Icon35() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p1ae48b70} id="Vector" stroke="#00574D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54286" />
        </g>
      </svg>
    </div>
  );
}

function Container153() {
  return (
    <div className="bg-[rgba(0,87,77,0.1)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon35 />
    </div>
  );
}

function Container151() {
  return (
    <div className="content-stretch flex h-[60px] items-end justify-between pt-[12px] relative shrink-0 w-[225px]" data-name="Container">
      <Container152 />
      <Container153 />
    </div>
  );
}

function DataCard31() {
  return (
    <div className="bg-white col-2 content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-col items-start justify-between justify-self-stretch min-h-[150px] p-[16px] relative rounded-[17px] row-11 self-stretch shrink-0" data-name="DataCard">
      <Container150 />
      <Container151 />
    </div>
  );
}

function Text155() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] not-italic relative shrink-0 text-[14px] text-black w-[152px]">Planteskadegjørere karanteneliste</p>
    </div>
  );
}

function PhaseBadge32() {
  return (
    <div className="bg-[#374151] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="PhaseBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Avsluttet</p>
    </div>
  );
}

function Container154() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Text155 />
      <PhaseBadge32 />
    </div>
  );
}

function Text156() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">CSV</p>
    </div>
  );
}

function Text157() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">GeoJSON</p>
    </div>
  );
}

function Text158() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">PDF</p>
    </div>
  );
}

function FormatBadges32() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="FormatBadges">
      <Text156 />
      <Text157 />
      <Text158 />
    </div>
  );
}

function Text159() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">Arild Sletten</p>
    </div>
  );
}

function Container156() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <FormatBadges32 />
      <Text159 />
    </div>
  );
}

function Icon36() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p1ae48b70} id="Vector" stroke="#00574D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54286" />
        </g>
      </svg>
    </div>
  );
}

function Container157() {
  return (
    <div className="bg-[rgba(0,87,77,0.1)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon36 />
    </div>
  );
}

function Container155() {
  return (
    <div className="content-stretch flex h-[60px] items-end justify-between pt-[12px] relative shrink-0 w-[225px]" data-name="Container">
      <Container156 />
      <Container157 />
    </div>
  );
}

function DataCard32() {
  return (
    <div className="bg-white col-3 content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-col items-start justify-between justify-self-stretch min-h-[150px] p-[16px] relative rounded-[17px] row-11 self-stretch shrink-0" data-name="DataCard">
      <Container154 />
      <Container155 />
    </div>
  );
}

function Text160() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] not-italic relative shrink-0 text-[14px] text-black w-[152px]">Pollinatorer og blomstereng</p>
    </div>
  );
}

function PhaseBadge33() {
  return (
    <div className="bg-[#374151] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="PhaseBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Avsluttet</p>
    </div>
  );
}

function Container158() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Text160 />
      <PhaseBadge33 />
    </div>
  );
}

function Text161() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">CSV</p>
    </div>
  );
}

function Text162() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">PDF</p>
    </div>
  );
}

function FormatBadges33() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="FormatBadges">
      <Text161 />
      <Text162 />
    </div>
  );
}

function Text163() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">Ingrid Solberg</p>
    </div>
  );
}

function Container160() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <FormatBadges33 />
      <Text163 />
    </div>
  );
}

function Icon37() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p1ae48b70} id="Vector" stroke="#00574D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54286" />
        </g>
      </svg>
    </div>
  );
}

function Container161() {
  return (
    <div className="bg-[rgba(0,87,77,0.1)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon37 />
    </div>
  );
}

function Container159() {
  return (
    <div className="content-stretch flex h-[60px] items-end justify-between pt-[12px] relative shrink-0 w-[225px]" data-name="Container">
      <Container160 />
      <Container161 />
    </div>
  );
}

function DataCard33() {
  return (
    <div className="bg-white col-1 content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-col items-start justify-between justify-self-stretch min-h-[150px] p-[16px] relative rounded-[17px] row-12 self-stretch shrink-0" data-name="DataCard">
      <Container158 />
      <Container159 />
    </div>
  );
}

function Text164() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] not-italic relative shrink-0 text-[14px] text-black w-[171px]">Sanderosjon i norske jordbruksområder</p>
    </div>
  );
}

function PhaseBadge34() {
  return (
    <div className="bg-[#15803d] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="PhaseBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Aktiv</p>
    </div>
  );
}

function Container162() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Text164 />
      <PhaseBadge34 />
    </div>
  );
}

function Text165() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">CSV</p>
    </div>
  );
}

function Text166() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">XLSX</p>
    </div>
  );
}

function FormatBadges34() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="FormatBadges">
      <Text165 />
      <Text166 />
    </div>
  );
}

function Text167() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">Maria Malmstedt Andersen</p>
    </div>
  );
}

function Container164() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <FormatBadges34 />
      <Text167 />
    </div>
  );
}

function Icon38() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p1ae48b70} id="Vector" stroke="#00574D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54286" />
        </g>
      </svg>
    </div>
  );
}

function Container165() {
  return (
    <div className="bg-[rgba(0,87,77,0.1)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon38 />
    </div>
  );
}

function Container163() {
  return (
    <div className="content-stretch flex h-[60px] items-end justify-between pt-[12px] relative shrink-0 w-[225px]" data-name="Container">
      <Container164 />
      <Container165 />
    </div>
  );
}

function DataCard34() {
  return (
    <div className="bg-white col-2 content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-col items-start justify-between justify-self-stretch min-h-[150px] p-[16px] relative rounded-[17px] row-12 self-stretch shrink-0" data-name="DataCard">
      <Container162 />
      <Container163 />
    </div>
  );
}

function Text168() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Sandkorntelling</p>
    </div>
  );
}

function PhaseBadge35() {
  return (
    <div className="bg-[#15803d] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="PhaseBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Aktiv</p>
    </div>
  );
}

function Container166() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text168 />
      <PhaseBadge35 />
    </div>
  );
}

function Text169() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">CSV</p>
    </div>
  );
}

function Text170() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">PNG</p>
    </div>
  );
}

function FormatBadges35() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="FormatBadges">
      <Text169 />
      <Text170 />
    </div>
  );
}

function Text171() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">Halvard Grimnes Haga</p>
    </div>
  );
}

function Container168() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <FormatBadges35 />
      <Text171 />
    </div>
  );
}

function Icon39() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p1ae48b70} id="Vector" stroke="#00574D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54286" />
        </g>
      </svg>
    </div>
  );
}

function Container169() {
  return (
    <div className="bg-[rgba(0,87,77,0.1)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon39 />
    </div>
  );
}

function Container167() {
  return (
    <div className="content-stretch flex h-[60px] items-end justify-between pt-[12px] relative shrink-0 w-[225px]" data-name="Container">
      <Container168 />
      <Container169 />
    </div>
  );
}

function DataCard35() {
  return (
    <div className="bg-white col-3 content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-col items-start justify-between justify-self-stretch min-h-[150px] p-[16px] relative rounded-[17px] row-12 self-stretch shrink-0" data-name="DataCard">
      <Container166 />
      <Container167 />
    </div>
  );
}

function Text172() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] not-italic relative shrink-0 text-[14px] text-black w-[171px]">Sedimentprøvetaking i Oslofjorden</p>
    </div>
  );
}

function PhaseBadge36() {
  return (
    <div className="bg-[#15803d] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="PhaseBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Aktiv</p>
    </div>
  );
}

function Container170() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Text172 />
      <PhaseBadge36 />
    </div>
  );
}

function Text173() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">CSV</p>
    </div>
  );
}

function Text174() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">GeoTIFF</p>
    </div>
  );
}

function FormatBadges36() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="FormatBadges">
      <Text173 />
      <Text174 />
    </div>
  );
}

function Text175() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">Halvard Grimnes Haga</p>
    </div>
  );
}

function Container172() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <FormatBadges36 />
      <Text175 />
    </div>
  );
}

function Icon40() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p1ae48b70} id="Vector" stroke="#00574D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54286" />
        </g>
      </svg>
    </div>
  );
}

function Container173() {
  return (
    <div className="bg-[rgba(0,87,77,0.1)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon40 />
    </div>
  );
}

function Container171() {
  return (
    <div className="content-stretch flex h-[60px] items-end justify-between pt-[12px] relative shrink-0 w-[225px]" data-name="Container">
      <Container172 />
      <Container173 />
    </div>
  );
}

function DataCard36() {
  return (
    <div className="bg-white col-1 content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-col items-start justify-between justify-self-stretch min-h-[150px] p-[16px] relative rounded-[17px] row-13 self-stretch shrink-0" data-name="DataCard">
      <Container170 />
      <Container171 />
    </div>
  );
}

function Text176() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Skog skogbruksplan</p>
    </div>
  );
}

function PhaseBadge37() {
  return (
    <div className="bg-[#374151] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="PhaseBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Avsluttet</p>
    </div>
  );
}

function Container174() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text176 />
      <PhaseBadge37 />
    </div>
  );
}

function Text177() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">GeoJSON</p>
    </div>
  );
}

function Text178() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">PDF</p>
    </div>
  );
}

function FormatBadges37() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="FormatBadges">
      <Text177 />
      <Text178 />
    </div>
  );
}

function Text179() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">Knut Holm</p>
    </div>
  );
}

function Container176() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <FormatBadges37 />
      <Text179 />
    </div>
  );
}

function Icon41() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p1ae48b70} id="Vector" stroke="#00574D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54286" />
        </g>
      </svg>
    </div>
  );
}

function Container177() {
  return (
    <div className="bg-[rgba(0,87,77,0.1)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon41 />
    </div>
  );
}

function Container175() {
  return (
    <div className="content-stretch flex h-[60px] items-end justify-between pt-[12px] relative shrink-0 w-[225px]" data-name="Container">
      <Container176 />
      <Container177 />
    </div>
  );
}

function DataCard37() {
  return (
    <div className="bg-white col-2 content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-col items-start justify-between justify-self-stretch min-h-[150px] p-[16px] relative rounded-[17px] row-13 self-stretch shrink-0" data-name="DataCard">
      <Container174 />
      <Container175 />
    </div>
  );
}

function Text180() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Skogressurser Norge</p>
    </div>
  );
}

function PhaseBadge38() {
  return (
    <div className="bg-[#15803d] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="PhaseBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Aktiv</p>
    </div>
  );
}

function Container178() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text180 />
      <PhaseBadge38 />
    </div>
  );
}

function Text181() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">GeoJSON</p>
    </div>
  );
}

function Text182() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">CSV</p>
    </div>
  );
}

function FormatBadges38() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="FormatBadges">
      <Text181 />
      <Text182 />
    </div>
  );
}

function Text183() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">Knut Holm</p>
    </div>
  );
}

function Container180() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <FormatBadges38 />
      <Text183 />
    </div>
  );
}

function Icon42() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p1ae48b70} id="Vector" stroke="#00574D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54286" />
        </g>
      </svg>
    </div>
  );
}

function Container181() {
  return (
    <div className="bg-[rgba(0,87,77,0.1)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon42 />
    </div>
  );
}

function Container179() {
  return (
    <div className="content-stretch flex h-[60px] items-end justify-between pt-[12px] relative shrink-0 w-[225px]" data-name="Container">
      <Container180 />
      <Container181 />
    </div>
  );
}

function DataCard38() {
  return (
    <div className="bg-white col-3 content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-col items-start justify-between justify-self-stretch min-h-[150px] p-[16px] relative rounded-[17px] row-13 self-stretch shrink-0" data-name="DataCard">
      <Container178 />
      <Container179 />
    </div>
  );
}

function Text184() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] not-italic relative shrink-0 text-[14px] text-black w-[171px]">Skogskader og klimaendringer</p>
    </div>
  );
}

function PhaseBadge39() {
  return (
    <div className="bg-[#15803d] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="PhaseBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Aktiv</p>
    </div>
  );
}

function Container182() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Text184 />
      <PhaseBadge39 />
    </div>
  );
}

function Text185() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">CSV</p>
    </div>
  );
}

function Text186() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">JSON</p>
    </div>
  );
}

function Text187() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">PDF</p>
    </div>
  );
}

function FormatBadges39() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="FormatBadges">
      <Text185 />
      <Text186 />
      <Text187 />
    </div>
  );
}

function Text188() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">Heidi Mossberg</p>
    </div>
  );
}

function Container184() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <FormatBadges39 />
      <Text188 />
    </div>
  );
}

function Icon43() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p1ae48b70} id="Vector" stroke="#00574D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54286" />
        </g>
      </svg>
    </div>
  );
}

function Container185() {
  return (
    <div className="bg-[rgba(0,87,77,0.1)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon43 />
    </div>
  );
}

function Container183() {
  return (
    <div className="content-stretch flex h-[60px] items-end justify-between pt-[12px] relative shrink-0 w-[225px]" data-name="Container">
      <Container184 />
      <Container185 />
    </div>
  );
}

function DataCard39() {
  return (
    <div className="bg-white col-1 content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-col items-start justify-between justify-self-stretch min-h-[150px] p-[16px] relative rounded-[17px] row-14 self-stretch shrink-0" data-name="DataCard">
      <Container182 />
      <Container183 />
    </div>
  );
}

function Text189() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] not-italic relative shrink-0 text-[14px] text-black w-[152px]">Statistisk analyse av arealbruksendringer i norske byer 2010–2023</p>
    </div>
  );
}

function PhaseBadge40() {
  return (
    <div className="bg-[#374151] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="PhaseBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Avsluttet</p>
    </div>
  );
}

function Container186() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Text189 />
      <PhaseBadge40 />
    </div>
  );
}

function Text190() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">XLSX</p>
    </div>
  );
}

function Text191() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">PDF</p>
    </div>
  );
}

function Text192() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">GeoJSON</p>
    </div>
  );
}

function FormatBadges40() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="FormatBadges">
      <Text190 />
      <Text191 />
      <Text192 />
    </div>
  );
}

function Text193() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">Halvard Grimnes Haga</p>
    </div>
  );
}

function Container188() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <FormatBadges40 />
      <Text193 />
    </div>
  );
}

function Icon44() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p1ae48b70} id="Vector" stroke="#00574D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54286" />
        </g>
      </svg>
    </div>
  );
}

function Container189() {
  return (
    <div className="bg-[rgba(0,87,77,0.1)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon44 />
    </div>
  );
}

function Container187() {
  return (
    <div className="content-stretch flex h-[60px] items-end justify-between pt-[12px] relative shrink-0 w-[225px]" data-name="Container">
      <Container188 />
      <Container189 />
    </div>
  );
}

function DataCard40() {
  return (
    <div className="bg-white col-2 content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-col items-start justify-self-stretch min-h-[150px] p-[16px] relative rounded-[17px] row-14 self-stretch shrink-0" data-name="DataCard">
      <Container186 />
      <Container187 />
    </div>
  );
}

function Text194() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Vannkvalitet vassdrag</p>
    </div>
  );
}

function PhaseBadge41() {
  return (
    <div className="bg-[#15803d] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="PhaseBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Aktiv</p>
    </div>
  );
}

function Container190() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text194 />
      <PhaseBadge41 />
    </div>
  );
}

function Text195() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">JSON</p>
    </div>
  );
}

function Text196() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">CSV</p>
    </div>
  );
}

function Text197() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">WFS</p>
    </div>
  );
}

function FormatBadges41() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="FormatBadges">
      <Text195 />
      <Text196 />
      <Text197 />
    </div>
  );
}

function Text198() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">Marte Nygård</p>
    </div>
  );
}

function Container192() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <FormatBadges41 />
      <Text198 />
    </div>
  );
}

function Icon45() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p1ae48b70} id="Vector" stroke="#00574D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54286" />
        </g>
      </svg>
    </div>
  );
}

function Container193() {
  return (
    <div className="bg-[rgba(0,87,77,0.1)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon45 />
    </div>
  );
}

function Container191() {
  return (
    <div className="content-stretch flex h-[60px] items-end justify-between pt-[12px] relative shrink-0 w-[225px]" data-name="Container">
      <Container192 />
      <Container193 />
    </div>
  );
}

function DataCard41() {
  return (
    <div className="bg-white col-3 content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-col items-start justify-between justify-self-stretch min-h-[150px] p-[16px] relative rounded-[17px] row-14 self-stretch shrink-0" data-name="DataCard">
      <Container190 />
      <Container191 />
    </div>
  );
}

function Text199() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] not-italic relative shrink-0 text-[14px] text-black w-[171px]">Vindblåst sand og påvirkning på natur og infrastruktur</p>
    </div>
  );
}

function PhaseBadge42() {
  return (
    <div className="bg-[#15803d] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="PhaseBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Aktiv</p>
    </div>
  );
}

function Container194() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Text199 />
      <PhaseBadge42 />
    </div>
  );
}

function Text200() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">CSV</p>
    </div>
  );
}

function Text201() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">GeoTIFF</p>
    </div>
  );
}

function Text202() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">NetCDF</p>
    </div>
  );
}

function FormatBadges42() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="FormatBadges">
      <Text200 />
      <Text201 />
      <Text202 />
    </div>
  );
}

function Text203() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">Maria Malmstedt Andersen</p>
    </div>
  );
}

function Container196() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <FormatBadges42 />
      <Text203 />
    </div>
  );
}

function Icon46() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p1ae48b70} id="Vector" stroke="#00574D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54286" />
        </g>
      </svg>
    </div>
  );
}

function Container197() {
  return (
    <div className="bg-[rgba(0,87,77,0.1)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon46 />
    </div>
  );
}

function Container195() {
  return (
    <div className="content-stretch flex h-[60px] items-end justify-between pt-[12px] relative shrink-0 w-[225px]" data-name="Container">
      <Container196 />
      <Container197 />
    </div>
  );
}

function DataCard42() {
  return (
    <div className="bg-white col-1 content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-col items-start justify-self-stretch min-h-[150px] p-[16px] relative rounded-[17px] row-15 self-stretch shrink-0" data-name="DataCard">
      <Container194 />
      <Container195 />
    </div>
  );
}

function Text204() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Økonomi i norsk jordbruk</p>
    </div>
  );
}

function PhaseBadge43() {
  return (
    <div className="bg-[#15803d] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="PhaseBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Aktiv</p>
    </div>
  );
}

function Container198() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text204 />
      <PhaseBadge43 />
    </div>
  );
}

function Text205() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">XLSX</p>
    </div>
  );
}

function Text206() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">CSV</p>
    </div>
  );
}

function Text207() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">PDF</p>
    </div>
  );
}

function FormatBadges43() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="FormatBadges">
      <Text205 />
      <Text206 />
      <Text207 />
    </div>
  );
}

function Text208() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">Per Lund</p>
    </div>
  );
}

function Container200() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <FormatBadges43 />
      <Text208 />
    </div>
  );
}

function Icon47() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d={svgPaths.p1ae48b70} id="Vector" stroke="#00574D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.54286" />
        </g>
      </svg>
    </div>
  );
}

function Container201() {
  return (
    <div className="bg-[rgba(0,87,77,0.1)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon47 />
    </div>
  );
}

function Container199() {
  return (
    <div className="content-stretch flex h-[60px] items-end justify-between pt-[12px] relative shrink-0 w-[225px]" data-name="Container">
      <Container200 />
      <Container201 />
    </div>
  );
}

function DataCard43() {
  return (
    <div className="bg-white col-2 content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-col items-start justify-between justify-self-stretch min-h-[150px] p-[16px] relative rounded-[17px] row-15 self-stretch shrink-0" data-name="DataCard">
      <Container198 />
      <Container199 />
    </div>
  );
}

function Container25() {
  return (
    <div className="flex-[803_0_0] gap-x-[16px] gap-y-[16px] grid grid-cols-[___257px_257px_257px] grid-rows-[_______________150px_150px_150px_150px_150px_150px_150px_150px_150px_150px_150px_150px_150px_168.75px_150px] h-[2492.75px] min-w-px relative" data-name="Container">
      <DataCard />
      <DataCard1 />
      <DataCard2 />
      <DataCard3 />
      <DataCard4 />
      <DataCard5 />
      <DataCard6 />
      <DataCard7 />
      <DataCard8 />
      <DataCard9 />
      <DataCard10 />
      <DataCard11 />
      <DataCard12 />
      <DataCard13 />
      <DataCard14 />
      <DataCard15 />
      <DataCard16 />
      <DataCard17 />
      <DataCard18 />
      <DataCard19 />
      <DataCard20 />
      <DataCard21 />
      <DataCard22 />
      <DataCard23 />
      <DataCard24 />
      <DataCard25 />
      <DataCard26 />
      <DataCard27 />
      <DataCard28 />
      <DataCard29 />
      <DataCard30 />
      <DataCard31 />
      <DataCard32 />
      <DataCard33 />
      <DataCard34 />
      <DataCard35 />
      <DataCard36 />
      <DataCard37 />
      <DataCard38 />
      <DataCard39 />
      <DataCard40 />
      <DataCard41 />
      <DataCard42 />
      <DataCard43 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[20px] items-start pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Container25 />
    </div>
  );
}

function CatalogPage4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[48px] px-[24px] top-[314px] w-[1101px]" data-name="CatalogPage">
      <Container6 />
      <Container7 />
    </div>
  );
}

export default function CatalogOverview() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="catalog-overview">
      <Body />
      <CatalogPage1 />
      <CatalogPage2 />
      <CatalogPage3 />
      <CatalogPage4 />
    </div>
  );
}