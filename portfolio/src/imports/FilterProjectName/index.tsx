import svgPaths from "./svg-3n3so2hnk7";
import imgImage from "./c1f557729710ad33c3d7a2a563c8d1d3d56c1dc2.png";

function PlaceholderForCatalogPage() {
  return <div className="h-[72px] relative shrink-0 w-full" data-name="Placeholder for CatalogPage" />;
}

function PlaceholderForCatalogPage1() {
  return <div className="h-[242px] relative shrink-0 w-full" data-name="Placeholder for CatalogPage" />;
}

function PlaceholderForCatalogPage2() {
  return <div className="h-[1087px] relative shrink-0 w-full" data-name="Placeholder for CatalogPage" />;
}

function CatalogPage() {
  return (
    <div className="bg-[#00574d] content-stretch flex flex-col h-[1401px] items-start min-h-[737px] overflow-clip relative shrink-0 w-full" data-name="CatalogPage">
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">4 datasett</p>
    </div>
  );
}

function Container1() {
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

function Button() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[11px] not-italic relative shrink-0 text-[#00574d] text-[11px] text-center whitespace-nowrap">Nullstill alle</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text2 />
      <Button />
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

function Container6() {
  return (
    <div className="bg-white h-[36px] relative rounded-[16777200px] shrink-0 w-full" data-name="Container">
      <TextInput />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0 w-full" data-name="Container:margin">
      <Container6 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Label />
      <ContainerMargin />
    </div>
  );
}

function Container7() {
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] w-full">Maria</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-white h-[36px] relative rounded-[16777200px] shrink-0 w-full" data-name="Container">
      <TextInput1 />
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0 w-full" data-name="Container:margin">
      <Container9 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <ContainerMargin1 />
    </div>
  );
}

function Container10() {
  return <div className="border-[rgba(0,0,0,0.15)] border-b border-solid h-px relative shrink-0 w-full" data-name="Container" />;
}

function Legend() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Legend">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[11px] text-[rgba(0,0,0,0.7)] tracking-[0.55px] uppercase whitespace-nowrap">Status</p>
    </div>
  );
}

function Icon() {
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

function Container12() {
  return (
    <div className="absolute bg-white border border-[#00574d] border-solid content-stretch flex items-center justify-center left-[-1px] rounded-[6.5px] size-[13px] top-[-1px]" data-name="Container">
      <Icon />
    </div>
  );
}

function RadioButton() {
  return (
    <div className="bg-white border border-[#767676] border-solid relative rounded-[6.5px] shrink-0 size-[13px]" data-name="Radio Button">
      <Container12 />
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

function Container11() {
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
      <Container11 />
    </div>
  );
}

function Container13() {
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

function Container14() {
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
      <Container14 />
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

function Container15() {
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

function Container16() {
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
      <Container16 />
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

function Container17() {
  return <div className="border-[rgba(0,0,0,0.15)] border-b border-solid h-px relative shrink-0 w-full" data-name="Container" />;
}

function Legend3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Legend">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[11px] text-[rgba(0,0,0,0.7)] tracking-[0.55px] uppercase whitespace-nowrap">Sorter etter</p>
    </div>
  );
}

function Icon1() {
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

function Container19() {
  return (
    <div className="absolute bg-white border border-[#00574d] border-solid content-stretch flex items-center justify-center left-[-1px] rounded-[6.5px] size-[13px] top-[-1px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function RadioButton3() {
  return (
    <div className="bg-white border border-[#767676] border-solid relative rounded-[6.5px] shrink-0 size-[13px]" data-name="Radio Button">
      <Container19 />
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

function Container18() {
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
      <Container18 />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[rgba(217,217,217,0.8)] content-stretch flex flex-col gap-[20px] items-start p-[20px] relative rounded-[17px] shrink-0 w-[230px]" data-name="Container">
      <Container4 />
      <Container5 />
      <Container7 />
      <Container8 />
      <Container10 />
      <FieldSet />
      <Container13 />
      <FieldSet1 />
      <Container15 />
      <FieldSet2 />
      <Container17 />
      <FieldSet3 />
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] not-italic relative shrink-0 text-[14px] text-black w-[152px]">Fluvial sandtransport i norske vassdrag</p>
    </div>
  );
}

function PhaseBadge() {
  return (
    <div className="bg-[#374151] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[16777200px] shrink-0" data-name="PhaseBadge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">Avsluttet</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Text12 />
      <PhaseBadge />
    </div>
  );
}

function Text13() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">CSV</p>
    </div>
  );
}

function Text14() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">GeoJSON</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">PDF</p>
    </div>
  );
}

function FormatBadges() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="FormatBadges">
      <Text13 />
      <Text14 />
      <Text15 />
    </div>
  );
}

function Text16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">Maria Malmstedt Andersen</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <FormatBadges />
      <Text16 />
    </div>
  );
}

function Icon2() {
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

function Container24() {
  return (
    <div className="bg-[rgba(0,87,77,0.1)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex h-[60px] items-end justify-between pt-[12px] relative shrink-0 w-[225px]" data-name="Container">
      <Container23 />
      <Container24 />
    </div>
  );
}

function DataCard() {
  return (
    <div className="bg-white col-1 content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-col items-start justify-between justify-self-stretch min-h-[150px] p-[16px] relative rounded-[17px] row-1 self-stretch shrink-0" data-name="DataCard">
      <Container21 />
      <Container22 />
    </div>
  );
}

function Text17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] not-italic relative shrink-0 text-[14px] text-black w-[152px]">Kartlegging av kystdyner langs norskekysten</p>
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

function Container25() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Text17 />
      <PhaseBadge1 />
    </div>
  );
}

function Text18() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">GeoJSON</p>
    </div>
  );
}

function Text19() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">GeoTIFF</p>
    </div>
  );
}

function Text20() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">PDF</p>
    </div>
  );
}

function FormatBadges1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="FormatBadges">
      <Text18 />
      <Text19 />
      <Text20 />
    </div>
  );
}

function Text21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">Maria Malmstedt Andersen</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <FormatBadges1 />
      <Text21 />
    </div>
  );
}

function Icon3() {
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

function Container28() {
  return (
    <div className="bg-[rgba(0,87,77,0.1)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon3 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex h-[60px] items-end justify-between pt-[12px] relative shrink-0 w-[225px]" data-name="Container">
      <Container27 />
      <Container28 />
    </div>
  );
}

function DataCard1() {
  return (
    <div className="bg-white col-2 content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-col items-start justify-self-stretch min-h-[150px] p-[16px] relative rounded-[17px] row-1 self-stretch shrink-0" data-name="DataCard">
      <Container25 />
      <Container26 />
    </div>
  );
}

function Text22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] not-italic relative shrink-0 text-[14px] text-black w-[171px]">Sanderosjon i norske jordbruksområder</p>
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

function Container29() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Text22 />
      <PhaseBadge2 />
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

function Text24() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">XLSX</p>
    </div>
  );
}

function FormatBadges2() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="FormatBadges">
      <Text23 />
      <Text24 />
    </div>
  );
}

function Text25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">Maria Malmstedt Andersen</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <FormatBadges2 />
      <Text25 />
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

function Container32() {
  return (
    <div className="bg-[rgba(0,87,77,0.1)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon4 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex h-[60px] items-end justify-between pt-[12px] relative shrink-0 w-[225px]" data-name="Container">
      <Container31 />
      <Container32 />
    </div>
  );
}

function DataCard2() {
  return (
    <div className="bg-white col-3 content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-col items-start justify-between justify-self-stretch min-h-[150px] p-[16px] relative rounded-[17px] row-1 self-stretch shrink-0" data-name="DataCard">
      <Container29 />
      <Container30 />
    </div>
  );
}

function Text26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.25px] not-italic relative shrink-0 text-[14px] text-black w-[171px]">Vindblåst sand og påvirkning på natur og infrastruktur</p>
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

function Container33() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Text26 />
      <PhaseBadge3 />
    </div>
  );
}

function Text27() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">CSV</p>
    </div>
  );
}

function Text28() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">GeoTIFF</p>
    </div>
  );
}

function Text29() {
  return (
    <div className="border border-[rgba(0,0,0,0.4)] border-solid content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[13.75px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] whitespace-nowrap">NetCDF</p>
    </div>
  );
}

function FormatBadges3() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="FormatBadges">
      <Text27 />
      <Text28 />
      <Text29 />
    </div>
  );
}

function Text30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">Maria Malmstedt Andersen</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <FormatBadges3 />
      <Text30 />
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

function Container36() {
  return (
    <div className="bg-[rgba(0,87,77,0.1)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon5 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex h-[60px] items-end justify-between pt-[12px] relative shrink-0 w-[225px]" data-name="Container">
      <Container35 />
      <Container36 />
    </div>
  );
}

function DataCard3() {
  return (
    <div className="bg-white col-1 content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex flex-col items-start justify-self-stretch min-h-[150px] p-[16px] relative rounded-[17px] row-2 self-stretch shrink-0" data-name="DataCard">
      <Container33 />
      <Container34 />
    </div>
  );
}

function Container20() {
  return (
    <div className="flex-[803_0_0] gap-x-[16px] gap-y-[16px] grid grid-cols-[___257px_257px_257px] grid-rows-[__150px_150px] h-[316px] min-w-px relative" data-name="Container">
      <DataCard />
      <DataCard1 />
      <DataCard2 />
      <DataCard3 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[20px] items-start pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container20 />
    </div>
  );
}

function CatalogPage2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[48px] px-[24px] top-[19px] w-[1101px]" data-name="CatalogPage">
      <Container1 />
      <Container2 />
    </div>
  );
}

export default function FilterProjectName() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="filter-project-name">
      <Body />
      <CatalogPage1 />
      <CatalogPage2 />
    </div>
  );
}