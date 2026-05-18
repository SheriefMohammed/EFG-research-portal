import svgPaths from "./svg-uci0ojvpx3";
import imgLinkEfgHermeslogoPng from "./2815474073593b9f7b05f597eda18d9dd105499b.png";
import imgLinkEfgHermeslogoPng1 from "./24e5da6f7d9a199505a28b38bcacbe88ed07cefa.png";

function LinkEfgHermeslogoPng1() {
  return (
    <div className="absolute h-[26.241px] left-[93.55px] top-0 w-[157.445px]" data-name="Link → EFGHermeslogo.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[166.52%] left-[-59.43%] max-w-none top-0 w-[159.42%]" src={imgLinkEfgHermeslogoPng1} />
      </div>
    </div>
  );
}

function LinkEfgHermeslogoPng() {
  return (
    <div className="h-[28.523px] overflow-clip relative shrink-0 w-[251px]" data-name="Link → EFGHermeslogo.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[153.18%] left-[-0.01%] max-w-none top-[0.01%] w-[100.01%]" src={imgLinkEfgHermeslogoPng} />
      </div>
      <LinkEfgHermeslogoPng1 />
    </div>
  );
}

function ButtonMenu() {
  return (
    <div className="h-[98px] min-h-[98px] relative shrink-0 w-[101.72px]" data-name="Button menu">
      <div className="absolute border-b border-solid border-white h-[24px] left-[37.02px] top-[37px] w-[47px]">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] left-1/2 text-[16px] text-center text-white top-[calc(50%+0.5px)] w-[47px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[23.82px]">Home</p>
        </div>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Item">
      <ButtonMenu />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex items-center justify-center min-h-[98px] pb-[37.41px] pt-[36.59px] px-[22px] relative shrink-0" data-name="Link">
      <div className="h-[24px] relative shrink-0 w-[104px]" data-name="Our Coverage">
        <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal inset-0 justify-center leading-[0] text-[#d7d7d7] text-[16px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[23.82px]">Our Coverage</p>
        </div>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[143px]" data-name="Item">
      <Link />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex items-center justify-center min-h-[98px] pb-[37.41px] pt-[36.59px] px-[22px] relative shrink-0" data-name="Link">
      <div className="h-[24px] relative shrink-0 w-[57px]" data-name="Our Coverage">
        <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal inset-0 justify-center leading-[0] text-[#d7d7d7] text-[16px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[23.82px]">Sectors</p>
        </div>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[101px]" data-name="Item">
      <Link1 />
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex items-center justify-center min-h-[98px] pb-[37.41px] pt-[36.59px] px-[22px] relative shrink-0" data-name="Link">
      <div className="h-[24px] relative shrink-0 w-[122px]" data-name="Our Coverage">
        <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal inset-0 justify-center leading-[0] text-[#d7d7d7] text-[16px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[23.82px]">Research Library</p>
        </div>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[143px]" data-name="Item">
      <Link2 />
    </div>
  );
}

function Item4() {
  return <div className="self-stretch shrink-0 w-[119px]" data-name="Item" />;
}

function List() {
  return (
    <div className="content-stretch flex h-[98px] items-start relative shrink-0" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
    </div>
  );
}

function ListMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[23px] relative shrink-0" data-name="List:margin">
      <List />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-center flex flex-wrap inset-[0_-22px] items-center justify-between min-w-px" data-name="Container">
      <LinkEfgHermeslogoPng />
      <ListMargin />
    </div>
  );
}

function Margin() {
  return (
    <div className="h-full relative shrink-0 w-[922.7px]" data-name="Margin">
      <Container />
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex items-center relative rounded-[7px] shrink-0" data-name="Link">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="search-alt-1_svgrepo.com">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
              <path d={svgPaths.p3ae6d900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="content-stretch flex gap-[31.7px] items-center pl-[35px] relative shrink-0" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.4)] border-l border-solid inset-0 pointer-events-none" />
      <Link3 />
      <div className="bg-white content-stretch flex gap-[10px] h-[40px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 w-[124px]" data-name="button">
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#124734] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Log in
        </p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-center justify-center min-h-[98px] pl-[15px] pr-[23px] py-[31.5px] relative shrink-0 w-[269px]" data-name="Container">
      <VerticalBorder />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap items-center max-w-[1250px] min-h-px relative w-[269px]" data-name="Container">
      <Container2 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center min-w-[269.29998779296875px] relative shrink-0 w-[269.3px]" data-name="Margin">
      <Container1 />
    </div>
  );
}

function Nav() {
  return (
    <div className="h-[80px] max-w-[1250px] relative shrink-0 w-full z-[1]" data-name="Nav">
      <div className="content-stretch flex items-start max-w-[inherit] px-[40px] relative size-full">
        <Margin />
        <Margin1 />
      </div>
    </div>
  );
}

function HeaderHeaderBegin() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col h-[80px] isolate items-start left-1/2 px-[95px] top-[-1px] w-[1440px]" data-name="Header - header begin">
      <Nav />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] relative shrink-0 text-[#fcc82d] text-[10px] w-[12px]">
        <p className="leading-[normal]">01</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] relative shrink-0 text-[#fcc82d] text-[10px] w-[24px]">
        <p className="leading-[normal]">Hero</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <div className="bg-[#fcc82d] h-[2px] shrink-0 w-[28px]" data-name="Horizontal Divider" />
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] relative shrink-0 text-[#bfbfbf] text-[10px] w-[12px]">
        <p className="leading-[normal]">02</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] relative shrink-0 text-[#bfbfbf] text-[10px] w-[48px]">
        <p className="leading-[normal]">Coverage</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <div className="bg-[#bfbfbf] h-px opacity-40 shrink-0 w-[22px]" data-name="Horizontal Divider" />
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] relative shrink-0 text-[#bfbfbf] text-[10px] w-[12px]">
        <p className="leading-[normal]">03</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] relative shrink-0 text-[#bfbfbf] text-[10px] w-[18px]">
        <p className="leading-[normal]">Map</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <div className="bg-[#bfbfbf] h-px opacity-40 shrink-0 w-[22px]" data-name="Horizontal Divider" />
      <Container12 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] relative shrink-0 text-[#bfbfbf] text-[10px] w-[12px]">
        <p className="leading-[normal]">04</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] relative shrink-0 text-[#bfbfbf] text-[10px] w-[24px]">
        <p className="leading-[normal]">News</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <div className="bg-[#bfbfbf] h-px opacity-40 shrink-0 w-[22px]" data-name="Horizontal Divider" />
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] relative shrink-0 text-[#bfbfbf] text-[10px] w-[12px]">
        <p className="leading-[normal]">05</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] relative shrink-0 text-[#bfbfbf] text-[10px] w-[42px]">
        <p className="leading-[normal]">Numbers</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <div className="bg-[#bfbfbf] h-px opacity-40 shrink-0 w-[22px]" data-name="Horizontal Divider" />
      <Container18 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] relative shrink-0 text-[#bfbfbf] text-[10px] w-[12px]">
        <p className="leading-[normal]">06</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] relative shrink-0 text-[#bfbfbf] text-[10px] w-[48px]">
        <p className="leading-[normal]">Terminal</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <div className="bg-[#bfbfbf] h-px opacity-40 shrink-0 w-[22px]" data-name="Horizontal Divider" />
      <Container21 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] relative shrink-0 text-[#bfbfbf] text-[10px] w-[12px]">
        <p className="leading-[normal]">07</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] relative shrink-0 text-[#bfbfbf] text-[10px] w-[36px]">
        <p className="leading-[normal]">Access</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <div className="bg-[#bfbfbf] h-px opacity-40 shrink-0 w-[22px]" data-name="Horizontal Divider" />
      <Container24 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[151px] items-start right-[16px] top-[279px] w-[98px]" data-name="Container">
      <Container4 />
      <Container7 />
      <Container10 />
      <Container13 />
      <Container16 />
      <Container19 />
      <Container22 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#fcc82d] content-stretch flex flex-col items-center justify-center relative shrink-0 size-[6px]" data-name="Background">
      <div className="bg-[rgba(255,255,255,0)] shadow-[0px_0px_0px_4px_rgba(255,130,0,0.18)] shrink-0 size-[6px]" data-name="Overlay+Shadow" />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fcc82d] text-[11px] text-center tracking-[1.76px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">EFG Hermes Research · 2026</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex gap-[10px] h-[15px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Background />
      <Container26 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col font-semibold gap-[18px] items-start leading-[0] relative shrink-0 text-white w-[767px]">
      <div className="flex flex-col font-['Newsreader:SemiBold_Italic',sans-serif] italic justify-center relative shrink-0 text-[0px] w-[767px]">
        <p className="text-[72px]">
          <span className="font-['Newsreader:SemiBold',sans-serif] font-semibold leading-[normal]">Conviction</span>
          <span className="font-['Newsreader:Regular',sans-serif] font-normal leading-[normal]">{` `}</span>
          <span className="leading-[normal] text-[#fcc82d]">in numbers</span>
        </p>
      </div>
      <div className="flex flex-col font-['Newsreader:SemiBold',sans-serif] justify-center min-w-full relative shrink-0 text-[72px] text-center w-[min-content]">
        <p className="leading-[normal]" dir="auto">
          built on decades.
        </p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <Container25 />
      <Frame6 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[603.56201171875px] pt-[10px] relative shrink-0 w-[603px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#bfbfbf] text-[0px] text-center whitespace-nowrap">
        <p className="leading-[27px] mb-0 text-[16.2px]">{`Institutional research across MENA & frontier markets — equity, macro, and`}</p>
        <p className="text-[16.2px]">
          <span className="leading-[27px]">{`thematic coverage used by `}</span>
          <span className="font-['Inter:Italic',sans-serif] font-normal italic leading-[27px]">420+</span>
          <span className="leading-[27px]">{` buy-side desks.`}</span>
        </p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[#fcc82d] left-[611px] overflow-clip rounded-[8px] size-[44px] top-[6px]">
      <div className="absolute left-[10px] overflow-clip size-[24px] top-[10px]" data-name="search-alt-1_svgrepo.com">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p38cf5c80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="backdrop-blur-[2px] bg-white h-[56px] overflow-clip relative rounded-[16px] shrink-0 w-[663px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] left-[24px] text-[#848484] text-[14px] top-[28px] whitespace-nowrap">
        <p className="leading-[normal]">Search research, companies, sectors…</p>
      </div>
      <Frame2 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[32px] items-center left-[268px] top-[calc(50%-0.5px)] w-[904.77px]">
      <Frame7 />
      <Container27 />
      <Frame10 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[11px] text-white tracking-[1.54px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Scroll</p>
      </div>
    </div>
  );
}

function HorizontalDivider() {
  return (
    <div className="bg-[rgba(227,227,226,0.14)] flex-[1_0_0] h-px min-w-px relative" data-name="Horizontal Divider">
      <div className="absolute bg-[#fcc82d] inset-[0_72.68%_0_0]" data-name="Horizontal Divider" />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e3e2] text-[11px] whitespace-nowrap">
        <p className="leading-[normal]">027%</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[40px] content-stretch flex gap-[16px] items-center left-1/2 w-[1328px]" data-name="Container">
      <Container29 />
      <HorizontalDivider />
      <Container30 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#105332] h-[726px] left-1/2 overflow-clip top-0 w-[1440px]">
      <div className="absolute h-[818px] left-0 top-0 w-[1440px]" data-name="14462169-economie-en-financien-achtergrond-financieel-bedrijf-statistieken-met-kandelaars-en-bar-tabel-vector 2">
        <div className="absolute inset-0 overflow-hidden">
          <video autoPlay className="absolute h-[120.05%] left-[-10.62%] max-w-none top-[-3.43%] w-[121.24%]" controlsList="nodownload" loop playsInline>
            <source src="/_videos/v1/2633e63d9da6e9a98ff9d193135e151ca6039b66" />
          </video>
        </div>
      </div>
      <HeaderHeaderBegin />
      <Container3 />
      <Frame8 />
      <Container28 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[11px] text-white tracking-[1.54px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Scroll</p>
      </div>
    </div>
  );
}

function HorizontalDivider1() {
  return (
    <div className="bg-[rgba(227,227,226,0.14)] flex-[1_0_0] h-px min-w-px relative" data-name="Horizontal Divider">
      <div className="absolute bg-[#fcc82d] inset-[0_33.99%_0_0]" data-name="Horizontal Divider" />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e3e2] text-[11px] whitespace-nowrap">
        <p className="leading-[normal]">070%</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[40px] content-stretch flex gap-[16px] items-center left-1/2 w-[1328px]" data-name="Container">
      <Container32 />
      <HorizontalDivider1 />
      <Container33 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[15.5px] justify-center leading-[0] relative shrink-0 text-[#e3e3e2] text-[12px] w-[165.6px]">
        <p className="leading-[normal]">EFG · Research Terminal</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[15.5px] justify-center leading-[0] relative shrink-0 text-[#e3e3e2] text-[12px] w-[7.2px]">
        <p className="leading-[normal]">·</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[15.5px] justify-center leading-[0] relative shrink-0 text-[#e3e3e2] text-[12px] w-[108px]">
        <p className="leading-[normal]">MENA / Equities</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[15.5px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <Container36 />
        <Container37 />
        <Container38 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[14.5px] justify-center leading-[0] relative shrink-0 text-[#fcc82d] text-[11px] tracking-[1.54px] uppercase w-[32.56px]">
        <p className="leading-[normal]">LIVE</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[15.5px] justify-center leading-[0] relative shrink-0 text-[#e3e3e2] text-[12px] w-[64.8px]">
        <p className="leading-[normal]">15:24 GST</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[15.5px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10.01px] items-start relative size-full">
        <Container40 />
        <Container41 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(227,227,226,0.14)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[15px] pt-[14px] px-[20px] relative size-full">
          <Container35 />
          <Container39 />
        </div>
      </div>
    </div>
  );
}

function VerticalBorder2() {
  return (
    <div className="relative shrink-0 w-full" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[12px] py-[10px] relative size-full">
        <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] h-[15.5px] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e2] text-[13px] w-[45.23px]">
          <p className="leading-[normal]">Markets</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder3() {
  return (
    <div className="relative shrink-0 w-full" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[12px] py-[10px] relative size-full">
        <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] h-[15.5px] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e2] text-[13px] w-[54.25px]">
          <p className="leading-[normal]">Coverage</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder4() {
  return (
    <div className="relative shrink-0 w-full" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#fcc82d] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[12px] py-[10px] relative size-full">
        <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] h-[15.5px] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white w-[43.85px]">
          <p className="leading-[normal]">Reports</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder5() {
  return (
    <div className="relative shrink-0 w-full" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[12px] py-[10px] relative size-full">
        <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] h-[15.5px] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e2] text-[13px] w-[47.37px]">
          <p className="leading-[normal]">Analysts</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder6() {
  return (
    <div className="relative shrink-0 w-full" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[12px] py-[10px] relative size-full">
        <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] h-[15.5px] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e2] text-[13px] w-[50.41px]">
          <p className="leading-[normal]">Screener</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder7() {
  return (
    <div className="relative shrink-0 w-full" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[12px] py-[10px] relative size-full">
        <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] h-[15.5px] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e2] text-[13px] w-[35.59px]">
          <p className="leading-[normal]">Macro</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder1() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(227,227,226,0.14)] border-r border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[229px] pl-[8px] pr-[19px] pt-[18px] relative size-full">
        <VerticalBorder2 />
        <VerticalBorder3 />
        <VerticalBorder4 />
        <VerticalBorder5 />
        <VerticalBorder6 />
        <VerticalBorder7 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[14.5px] justify-center leading-[0] relative shrink-0 text-[#e3e3e2] text-[11px] w-[92.41px]">
        <p className="leading-[normal]">EGX 30 · INDEX</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="font-['Newsreader:Regular',sans-serif] font-normal h-[28px] leading-[0] relative shrink-0 w-full" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col h-[28px] justify-center left-0 text-[28px] text-white top-[14px] w-[130.57px]">
        <p className="leading-[normal]">{`28,412.60 `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[14px] justify-center left-[130.57px] text-[#00bc71] text-[14px] top-[17px] w-[45.1px]">
        <p className="leading-[normal]">+1.24%</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[92.41px]" data-name="Container">
      <Container47 />
      <Paragraph />
    </div>
  );
}

function Border() {
  return (
    <div className="relative rounded-[4px] self-stretch shrink-0" data-name="Border">
      <div aria-hidden="true" className="absolute border border-[rgba(227,227,226,0.14)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start px-[11px] py-[5px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[14.5px] justify-center leading-[0] relative shrink-0 text-[#e3e3e2] text-[11px] w-[13.2px]">
          <p className="leading-[normal]">1D</p>
        </div>
      </div>
    </div>
  );
}

function Border1() {
  return (
    <div className="relative rounded-[4px] self-stretch shrink-0" data-name="Border">
      <div aria-hidden="true" className="absolute border border-[rgba(227,227,226,0.14)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start px-[11px] py-[5px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[14.5px] justify-center leading-[0] relative shrink-0 text-[#e3e3e2] text-[11px] w-[13.2px]">
          <p className="leading-[normal]">1W</p>
        </div>
      </div>
    </div>
  );
}

function Border2() {
  return (
    <div className="relative rounded-[4px] self-stretch shrink-0" data-name="Border">
      <div aria-hidden="true" className="absolute border border-[rgba(227,227,226,0.14)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start px-[11px] py-[5px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[14.5px] justify-center leading-[0] relative shrink-0 text-[#e3e3e2] text-[11px] w-[13.2px]">
          <p className="leading-[normal]">1M</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#1a5a43] relative rounded-[4px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(227,227,226,0.14)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start px-[11px] py-[5px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[14.5px] justify-center leading-[0] relative shrink-0 text-[11px] text-white w-[13.2px]">
          <p className="leading-[normal]">1Y</p>
        </div>
      </div>
    </div>
  );
}

function Border3() {
  return (
    <div className="relative rounded-[4px] self-stretch shrink-0" data-name="Border">
      <div aria-hidden="true" className="absolute border border-[rgba(227,227,226,0.14)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start px-[11px] py-[5px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[14.5px] justify-center leading-[0] relative shrink-0 text-[#e3e3e2] text-[11px] w-[13.2px]">
          <p className="leading-[normal]">5Y</p>
        </div>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex gap-[6px] h-[24.5px] items-start relative shrink-0" data-name="Container">
      <Border />
      <Border1 />
      <Border2 />
      <BackgroundBorder />
      <Border3 />
    </div>
  );
}

function ContainerAlignFlexStart() {
  return (
    <div className="content-stretch flex items-start relative self-stretch shrink-0" data-name="Container:align-flex-start">
      <Container48 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex h-[42.5px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container46 />
      <ContainerAlignFlexStart />
    </div>
  );
}

function Svg() {
  return (
    <div className="h-[200px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <div className="absolute inset-[5%_9.89%_95%_9.89%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 560 1">
            <g id="Vector">
              <path d="M0 0.5H560H0" fill="var(--fill-0, black)" />
              <path d="M0 0.5H560H0" stroke="var(--stroke-0, #F4EFE6)" strokeOpacity="0.06" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[30%_9.89%_70%_9.89%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 560 1">
            <g id="Vector">
              <path d="M0 0.5H560H0" fill="var(--fill-0, black)" />
              <path d="M0 0.5H560H0" stroke="var(--stroke-0, #F4EFE6)" strokeOpacity="0.06" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[55%_9.89%_45%_9.89%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 560 1">
            <g id="Vector">
              <path d="M0 0.5H560H0" fill="var(--fill-0, black)" />
              <path d="M0 0.5H560H0" stroke="var(--stroke-0, #F4EFE6)" strokeOpacity="0.06" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[80%_9.89%_20%_9.89%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 560 1">
            <g id="Vector">
              <path d="M0 0.5H560H0" fill="var(--fill-0, black)" />
              <path d="M0 0.5H560H0" stroke="var(--stroke-0, #F4EFE6)" strokeOpacity="0.06" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-[9.89%] right-[9.89%] top-[15%]" data-name="Vector">
        <div className="absolute inset-[-0.82%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 560.329 121.973">
            <path d={svgPaths.pa1f1480} id="Vector" stroke="var(--stroke-0, #FCC82D)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[15%_9.89%_0_9.89%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.p6f24680} fill="url(#paint0_linear_1_1489)" id="Vector" opacity="0" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1489" x1="0" x2="0" y1="0" y2="170">
              <stop stopColor="#FF8200" />
              <stop offset="1" stopColor="#FF8200" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start pb-[4px] relative shrink-0 w-full" data-name="Container">
      <Container45 />
      <Svg />
    </div>
  );
}

function Container50() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e2] text-[10px] tracking-[1px] uppercase w-full">
          <p className="leading-[normal]">COVERAGE</p>
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] relative size-full">
        <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[26px] text-white w-full">
          <p className="leading-[normal]">420</p>
        </div>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[rgba(227,227,226,0.55)] w-full">
          <p className="leading-[normal]">issuers</p>
        </div>
      </div>
    </div>
  );
}

function Border4() {
  return (
    <div className="col-1 justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Border">
      <div aria-hidden="true" className="absolute border border-[rgba(227,227,226,0.14)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[15px] relative size-full">
        <Container50 />
        <Container51 />
        <Container52 />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e2] text-[10px] tracking-[1px] uppercase w-full">
          <p className="leading-[normal]">ANALYSTS</p>
        </div>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] relative size-full">
        <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[26px] text-white w-full">
          <p className="leading-[normal]">56</p>
        </div>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[rgba(227,227,226,0.55)] w-full">
          <p className="leading-[normal]">across 9 desks</p>
        </div>
      </div>
    </div>
  );
}

function Border5() {
  return (
    <div className="col-2 justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Border">
      <div aria-hidden="true" className="absolute border border-[rgba(227,227,226,0.14)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[15px] relative size-full">
        <Container53 />
        <Container54 />
        <Container55 />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e2] text-[10px] tracking-[1px] uppercase w-full">
          <p className="leading-[normal]">REPORTS YTD</p>
        </div>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] relative size-full">
        <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[26px] text-white w-full">
          <p className="leading-[normal]">1,284</p>
        </div>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[rgba(227,227,226,0.55)] w-full">
          <p className="leading-[normal]">+18% vs ’25</p>
        </div>
      </div>
    </div>
  );
}

function Border6() {
  return (
    <div className="col-3 justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Border">
      <div aria-hidden="true" className="absolute border border-[rgba(227,227,226,0.14)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[15px] relative size-full">
        <Container56 />
        <Container57 />
        <Container58 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="gap-x-[10px] gap-y-[10px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_87px] relative shrink-0 w-full" data-name="Container">
      <Border4 />
      <Border5 />
      <Border6 />
    </div>
  );
}

function Container43() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col gap-[18px] items-start pb-[74.5px] pt-[20px] px-[20px] relative size-full">
        <Container44 />
        <Container49 />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[10px] relative size-full">
        <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e2] text-[11px] tracking-[1.54px] uppercase w-full">
          <p className="leading-[normal]">TOP PICKS</p>
        </div>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] h-[14.5px] justify-center leading-[0] not-italic relative shrink-0 text-[#a4a814] text-[12px] w-[29.51px]">
        <p className="leading-[normal]">COMI</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(227,227,226,0.55)] w-[66.41px]">
        <p className="leading-[normal]">Commercial Intl</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="relative self-stretch shrink-0 w-[66.41px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container61 />
        <Container62 />
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[15.5px] justify-center leading-[0] relative shrink-0 text-[#00bc71] text-[12px] text-right w-[43.2px]">
        <p className="leading-[normal]">+2.14%</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[11.5px] justify-center leading-[0] relative shrink-0 text-[#fcc82d] text-[9px] text-right tracking-[0.9px] w-[18.91px]">
        <p className="leading-[normal]">BUY</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="relative self-stretch shrink-0 w-[43.2px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container64 />
        <Container65 />
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="h-[46px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(227,227,226,0.14)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[10px] pt-[9px] relative size-full">
        <Container60 />
        <Container63 />
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] h-[14.5px] justify-center leading-[0] not-italic relative shrink-0 text-[#a4a814] text-[12px] w-[38.98px]">
        <p className="leading-[normal]">EMAAR</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(227,227,226,0.55)] w-[73.84px]">
        <p className="leading-[normal]">Emaar Properties</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="relative self-stretch shrink-0 w-[73.84px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container67 />
        <Container68 />
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[15.5px] justify-center leading-[0] relative shrink-0 text-[#00bc71] text-[12px] text-right w-[43.2px]">
        <p className="leading-[normal]">+0.87%</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[11.5px] justify-center leading-[0] relative shrink-0 text-[#fcc82d] text-[9px] text-right tracking-[0.9px] w-[18.91px]">
        <p className="leading-[normal]">BUY</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="relative self-stretch shrink-0 w-[43.2px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container70 />
        <Container71 />
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="h-[46px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(227,227,226,0.14)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[10px] pt-[9px] relative size-full">
        <Container66 />
        <Container69 />
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] h-[14.5px] justify-center leading-[0] not-italic relative shrink-0 text-[#a4a814] text-[12px] w-[22.04px]">
        <p className="leading-[normal]">STC</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(227,227,226,0.55)] w-[62.91px]">
        <p className="leading-[normal]">Saudi Telecom</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="relative self-stretch shrink-0 w-[62.91px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container73 />
        <Container74 />
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[15.5px] justify-center leading-[0] relative shrink-0 text-[#fcc82d] text-[12px] text-right w-[43.2px]">
        <p className="leading-[normal]">-0.42%</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[11.5px] justify-center leading-[0] relative shrink-0 text-[#fcc82d] text-[9px] text-right tracking-[0.9px] w-[25.2px]">
        <p className="leading-[normal]">HOLD</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="relative self-stretch shrink-0 w-[43.2px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container76 />
        <Container77 />
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="h-[46px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(227,227,226,0.14)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[10px] pt-[9px] relative size-full">
        <Container72 />
        <Container75 />
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] h-[14.5px] justify-center leading-[0] not-italic relative shrink-0 text-[#a4a814] text-[12px] w-[31.57px]">
        <p className="leading-[normal]">QNBK</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(227,227,226,0.55)] w-[49.1px]">
        <p className="leading-[normal]">QNB Group</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="relative self-stretch shrink-0 w-[49.1px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container79 />
        <Container80 />
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[15.5px] justify-center leading-[0] relative shrink-0 text-[#00bc71] text-[12px] text-right w-[43.2px]">
        <p className="leading-[normal]">+1.33%</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[11.5px] justify-center leading-[0] relative shrink-0 text-[#fcc82d] text-[9px] text-right tracking-[0.9px] w-[18.91px]">
        <p className="leading-[normal]">BUY</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="relative self-stretch shrink-0 w-[43.2px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container82 />
        <Container83 />
      </div>
    </div>
  );
}

function HorizontalBorder4() {
  return (
    <div className="h-[46px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(227,227,226,0.14)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[10px] pt-[9px] relative size-full">
        <Container78 />
        <Container81 />
      </div>
    </div>
  );
}

function VerticalBorder8() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-start shrink-0" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(227,227,226,0.14)] border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[235px] pl-[19px] pr-[18px] pt-[18px] relative size-full">
        <Container59 />
        <HorizontalBorder1 />
        <HorizontalBorder2 />
        <HorizontalBorder3 />
        <HorizontalBorder4 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="min-h-[460px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid grid grid-cols-[___180px_minmax(0,1fr)_260px] grid-rows-[_460px] min-h-[inherit] relative size-full">
        <VerticalBorder1 />
        <Container43 />
        <VerticalBorder8 />
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[14.5px] justify-center leading-[0] relative shrink-0 text-[#fcc82d] text-[11px] tracking-[1.54px] uppercase w-[122.1px]">
          <p className="leading-[normal]">PUBLISHED TODAY</p>
        </div>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[14.5px] justify-center leading-[0] relative shrink-0 text-[#e3e3e2] text-[11px] w-[369.6px]">
          <p className="leading-[normal]">Saudi Banks: Q1 preview — net interest margin resilience</p>
        </div>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[14.5px] justify-center leading-[0] relative shrink-0 text-[11px] text-[rgba(227,227,226,0.55)] w-[6.6px]">
          <p className="leading-[normal]">·</p>
        </div>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[14.5px] justify-center leading-[0] relative shrink-0 text-[#e3e3e2] text-[11px] w-[237.6px]">
          <p className="leading-[normal]">Egypt macro: IMF review implications</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder5() {
  return (
    <div className="h-[39.5px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(227,227,226,0.14)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[14px] items-start pb-[12px] pt-[13px] px-[20px] relative size-full">
        <Container84 />
        <Container85 />
        <Container86 />
        <Container87 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-[#124734] relative rounded-[14px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <HorizontalBorder />
        <Container42 />
        <HorizontalBorder5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(227,227,226,0.26)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_40px_80px_0px_rgba(0,0,0,0.4)]" />
    </div>
  );
}

function Container34() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[1180px]" data-name="Container">
      <BackgroundBorderShadow />
    </div>
  );
}

function Frame9() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#073e23] h-[726px] left-1/2 overflow-clip top-[726px] w-[1440px]">
      <div className="absolute bg-gradient-to-b from-[rgba(18,71,52,0.6)] h-[818px] left-0 to-[129.21%] to-[rgba(7,62,35,0.6)] top-0 w-[1440px]" data-name="14462169-economie-en-financien-achtergrond-financieel-bedrijf-statistieken-met-kandelaars-en-bar-tabel-vector 2" />
      <Container31 />
      <Container34 />
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[15.5px] justify-center leading-[0] relative shrink-0 text-[12px] text-black w-[36px]">
        <p className="leading-[normal]">EGX30</p>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[15.5px] justify-center leading-[0] relative shrink-0 text-[12px] text-black w-[64.8px]">
        <p className="leading-[normal]">28,412.60</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[15.5px] justify-center leading-[0] relative shrink-0 text-[#00bc71] text-[12px] w-[43.2px]">
        <p className="leading-[normal]">+1.24%</p>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="Container">
      <Container90 />
      <Container91 />
      <Container92 />
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[15.5px] justify-center leading-[0] relative shrink-0 text-[12px] text-black w-[28.8px]">
        <p className="leading-[normal]">TASI</p>
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[15.5px] justify-center leading-[0] relative shrink-0 text-[12px] text-black w-[64.8px]">
        <p className="leading-[normal]">12,104.82</p>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[15.5px] justify-center leading-[0] relative shrink-0 text-[#00bc71] text-[12px] w-[43.2px]">
        <p className="leading-[normal]">+0.68%</p>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="Container">
      <Container94 />
      <Container95 />
      <Container96 />
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[15.5px] justify-center leading-[0] relative shrink-0 text-[12px] text-black w-[21.6px]">
        <p className="leading-[normal]">DFM</p>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[15.5px] justify-center leading-[0] relative shrink-0 text-[12px] text-black w-[57.6px]">
        <p className="leading-[normal]">4,870.15</p>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[15.5px] justify-center leading-[0] relative shrink-0 text-[#9c3022] text-[12px] w-[43.2px]">
        <p className="leading-[normal]">-0.12%</p>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="Container">
      <Container98 />
      <Container99 />
      <Container100 />
    </div>
  );
}

function Container102() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[15.5px] justify-center leading-[0] relative shrink-0 text-[12px] text-black w-[21.6px]">
        <p className="leading-[normal]">ADX</p>
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[15.5px] justify-center leading-[0] relative shrink-0 text-[12px] text-black w-[57.6px]">
        <p className="leading-[normal]">9,622.04</p>
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[15.5px] justify-center leading-[0] relative shrink-0 text-[#00bc71] text-[12px] w-[43.2px]">
        <p className="leading-[normal]">+0.42%</p>
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="Container">
      <Container102 />
      <Container103 />
      <Container104 />
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[15.5px] justify-center leading-[0] relative shrink-0 text-[12px] text-black w-[14.41px]">
        <p className="leading-[normal]">QE</p>
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[15.5px] justify-center leading-[0] relative shrink-0 text-[12px] text-black w-[64.8px]">
        <p className="leading-[normal]">10,418.77</p>
      </div>
    </div>
  );
}

function Container108() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[15.5px] justify-center leading-[0] relative shrink-0 text-[#00bc71] text-[12px] w-[43.2px]">
        <p className="leading-[normal]">+0.91%</p>
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="Container">
      <Container106 />
      <Container107 />
      <Container108 />
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[15.5px] justify-center leading-[0] relative shrink-0 text-[12px] text-black w-[28.8px]">
        <p className="leading-[normal]">MASI</p>
      </div>
    </div>
  );
}

function Container111() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[15.5px] justify-center leading-[0] relative shrink-0 text-[12px] text-black w-[64.8px]">
        <p className="leading-[normal]">14,226.30</p>
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[15.5px] justify-center leading-[0] relative shrink-0 text-[#9c3022] text-[12px] w-[43.2px]">
        <p className="leading-[normal]">-0.23%</p>
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="Container">
      <Container110 />
      <Container111 />
      <Container112 />
    </div>
  );
}

function Container114() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[15.5px] justify-center leading-[0] relative shrink-0 text-[12px] text-black w-[21.6px]">
        <p className="leading-[normal]">KSE</p>
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[15.5px] justify-center leading-[0] relative shrink-0 text-[12px] text-black w-[57.6px]">
        <p className="leading-[normal]">7,984.41</p>
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[15.5px] justify-center leading-[0] relative shrink-0 text-[#00bc71] text-[12px] w-[43.2px]">
        <p className="leading-[normal]">+1.02%</p>
      </div>
    </div>
  );
}

function Container113() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="Container">
      <Container114 />
      <Container115 />
      <Container116 />
    </div>
  );
}

function Container118() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[15.5px] justify-center leading-[0] relative shrink-0 text-[12px] text-black w-[36px]">
        <p className="leading-[normal]">BRENT</p>
      </div>
    </div>
  );
}

function Container119() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[15.5px] justify-center leading-[0] relative shrink-0 text-[12px] text-black w-[43.2px]">
        <p className="leading-[normal]">$84.22</p>
      </div>
    </div>
  );
}

function Container117() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="Container">
      <Container118 />
      <Container119 />
      <div className="h-[15.5px] shrink-0 w-[43.2px]" data-name="Rectangle" />
    </div>
  );
}

function Container120() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="Container">
      <div className="h-[15.5px] shrink-0 w-[50.41px]" data-name="Rectangle" />
      <div className="h-[15.5px] shrink-0 w-[36px]" data-name="Rectangle" />
      <div className="h-[15.5px] shrink-0 w-[43.2px]" data-name="Rectangle" />
    </div>
  );
}

function Container121() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="Container">
      <div className="h-[15.5px] shrink-0 w-[50.41px]" data-name="Rectangle" />
      <div className="h-[15.5px] shrink-0 w-[43.2px]" data-name="Rectangle" />
      <div className="h-[15.5px] shrink-0 w-[43.2px]" data-name="Rectangle" />
    </div>
  );
}

function Container122() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="Container">
      <div className="h-[15.5px] shrink-0 w-[28.8px]" data-name="Rectangle" />
      <div className="h-[15.5px] shrink-0 w-[64.8px]" data-name="Rectangle" />
      <div className="h-[15.5px] shrink-0 w-[43.2px]" data-name="Rectangle" />
    </div>
  );
}

function Container123() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="Container">
      <div className="h-[15.5px] shrink-0 w-[36px]" data-name="Rectangle" />
      <div className="h-[15.5px] shrink-0 w-[64.8px]" data-name="Rectangle" />
      <div className="h-[15.5px] shrink-0 w-[43.2px]" data-name="Rectangle" />
    </div>
  );
}

function Container124() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="Container">
      <div className="h-[15.5px] shrink-0 w-[28.8px]" data-name="Rectangle" />
      <div className="h-[15.5px] shrink-0 w-[64.8px]" data-name="Rectangle" />
      <div className="h-[15.5px] shrink-0 w-[43.2px]" data-name="Rectangle" />
    </div>
  );
}

function Container125() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="Container">
      <div className="h-[15.5px] shrink-0 w-[21.6px]" data-name="Rectangle" />
      <div className="h-[15.5px] shrink-0 w-[57.6px]" data-name="Rectangle" />
      <div className="h-[15.5px] shrink-0 w-[43.2px]" data-name="Rectangle" />
    </div>
  );
}

function Container126() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="Container">
      <div className="h-[15.5px] shrink-0 w-[21.6px]" data-name="Rectangle" />
      <div className="h-[15.5px] shrink-0 w-[57.6px]" data-name="Rectangle" />
      <div className="h-[15.5px] shrink-0 w-[43.2px]" data-name="Rectangle" />
    </div>
  );
}

function Container127() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="Container">
      <div className="h-[15.5px] shrink-0 w-[14.41px]" data-name="Rectangle" />
      <div className="h-[15.5px] shrink-0 w-[64.8px]" data-name="Rectangle" />
      <div className="h-[15.5px] shrink-0 w-[43.2px]" data-name="Rectangle" />
    </div>
  );
}

function Container128() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="Container">
      <div className="h-[15.5px] shrink-0 w-[28.8px]" data-name="Rectangle" />
      <div className="h-[15.5px] shrink-0 w-[64.8px]" data-name="Rectangle" />
      <div className="h-[15.5px] shrink-0 w-[43.2px]" data-name="Rectangle" />
    </div>
  );
}

function Container129() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="Container">
      <div className="h-[15.5px] shrink-0 w-[21.6px]" data-name="Rectangle" />
      <div className="h-[15.5px] shrink-0 w-[57.6px]" data-name="Rectangle" />
      <div className="h-[15.5px] shrink-0 w-[43.2px]" data-name="Rectangle" />
    </div>
  );
}

function Container130() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="Container">
      <div className="h-[15.5px] shrink-0 w-[36px]" data-name="Rectangle" />
      <div className="h-[15.5px] shrink-0 w-[43.2px]" data-name="Rectangle" />
      <div className="h-[15.5px] shrink-0 w-[43.2px]" data-name="Rectangle" />
    </div>
  );
}

function Container131() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="Container">
      <div className="h-[15.5px] shrink-0 w-[50.41px]" data-name="Rectangle" />
      <div className="h-[15.5px] shrink-0 w-[36px]" data-name="Rectangle" />
      <div className="h-[15.5px] shrink-0 w-[43.2px]" data-name="Rectangle" />
    </div>
  );
}

function Container132() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="Container">
      <div className="h-[15.5px] shrink-0 w-[50.41px]" data-name="Rectangle" />
      <div className="h-[15.5px] shrink-0 w-[43.2px]" data-name="Rectangle" />
      <div className="h-[15.5px] shrink-0 w-[43.2px]" data-name="Rectangle" />
    </div>
  );
}

function Container133() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="Container">
      <div className="h-[15.5px] shrink-0 w-[28.8px]" data-name="Rectangle" />
      <div className="h-[15.5px] shrink-0 w-[64.8px]" data-name="Rectangle" />
      <div className="h-[15.5px] shrink-0 w-[43.2px]" data-name="Rectangle" />
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute bottom-[13px] content-stretch flex gap-[32px] items-start left-0 top-[13px]" data-name="Container">
      <Container89 />
      <Container93 />
      <Container97 />
      <Container101 />
      <Container105 />
      <Container109 />
      <Container113 />
      <Container117 />
      <Container120 />
      <Container121 />
      <Container122 />
      <Container123 />
      <Container124 />
      <Container125 />
      <Container126 />
      <Container127 />
      <Container128 />
      <Container129 />
      <Container130 />
      <Container131 />
      <Container132 />
      <Container133 />
    </div>
  );
}

function Border7() {
  return (
    <div className="h-[41.5px] relative shrink-0 w-full" data-name="Border">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container88 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(227,227,226,0.14)] border-b border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-[#eaeaea] content-stretch flex flex-col items-start left-0 px-[56px] right-0 top-0" data-name="Background">
      <Border7 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#fcc82d] content-stretch flex flex-col items-start justify-center relative shrink-0 size-[6px]" data-name="Background">
      <div className="bg-[rgba(255,255,255,0)] shadow-[0px_0px_0px_4px_rgba(255,130,0,0.18)] shrink-0 size-[6px]" data-name="Overlay+Shadow" />
    </div>
  );
}

function Container136() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <Background2 />
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fcc82d] text-[11px] tracking-[1.76px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Coverage · 8 desks</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[72px] text-white tracking-[-1.8px] w-[523px]">
        <p className="leading-[73.44px] mb-0">Every sector that</p>
        <p className="mb-0">
          <span className="font-['Newsreader:Italic',sans-serif] font-normal italic leading-[73.44px] text-[#fcc82d]">matters</span>
          <span className="leading-[73.44px]">{` in`}</span>
        </p>
        <p className="leading-[73.44px]">MENA.</p>
      </div>
    </div>
  );
}

function Container137() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[603.56201171875px] pb-[22.6px] pt-[6.6px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e2] text-[16px] w-full">
        <p className="leading-[27px] mb-0">420 issuers under active coverage, updated by analysts</p>
        <p className="leading-[27px]">embedded in Cairo, Riyadh, Dubai and Nairobi.</p>
      </div>
    </div>
  );
}

function Container139() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[44px] text-white whitespace-nowrap">
        <p className="leading-[44px]">420</p>
      </div>
    </div>
  );
}

function Container140() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e2] text-[12px] tracking-[1.54px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Issuers</p>
      </div>
    </div>
  );
}

function Container138() {
  return (
    <div className="relative self-stretch shrink-0 w-[76px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <Container139 />
        <Container140 />
      </div>
    </div>
  );
}

function Container142() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[44px] text-white whitespace-nowrap">
        <p className="leading-[44px]">56</p>
      </div>
    </div>
  );
}

function Container143() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e2] text-[12px] tracking-[1.54px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Analysts</p>
      </div>
    </div>
  );
}

function Container141() {
  return (
    <div className="relative self-stretch shrink-0 w-[74px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <Container142 />
        <Container143 />
      </div>
    </div>
  );
}

function Container145() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[44px] text-white whitespace-nowrap">
        <p className="leading-[44px]">9</p>
      </div>
    </div>
  );
}

function Container146() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e2] text-[12px] tracking-[1.54px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Sectors</p>
      </div>
    </div>
  );
}

function Container144() {
  return (
    <div className="relative self-stretch shrink-0 w-[65px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <Container145 />
        <Container146 />
      </div>
    </div>
  );
}

function HorizontalBorder6() {
  return (
    <div className="content-stretch flex gap-[32px] h-[90px] items-start pt-[25px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(227,227,226,0.14)] border-solid border-t inset-0 pointer-events-none" />
      <Container138 />
      <Container141 />
      <Container144 />
    </div>
  );
}

function Container135() {
  return (
    <div className="content-stretch flex flex-col gap-[17.4px] h-[685px] items-start pointer-events-auto sticky top-0" data-name="Container">
      <Container136 />
      <Heading />
      <Container137 />
      <HorizontalBorder6 />
    </div>
  );
}

function Container148() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fcc82d] text-[16px] tracking-[0.32px] whitespace-nowrap">
          <p className="leading-[normal]">BNK</p>
        </div>
      </div>
    </div>
  );
}

function Container150() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[26px] text-white w-full">
        <p className="leading-[normal]">{`Banks & Financials`}</p>
      </div>
    </div>
  );
}

function Container151() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e2] text-[12.7px] w-full">
        <p className="leading-[normal]">Margin expansion theme — Saudi / UAE leading.</p>
      </div>
    </div>
  );
}

function Container149() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <Container150 />
        <Container151 />
      </div>
    </div>
  );
}

function Container152() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e3e2] text-[16px] tracking-[0.32px] whitespace-nowrap">
          <p className="leading-[normal]">68 issuers</p>
        </div>
      </div>
    </div>
  );
}

function Container153() {
  return (
    <div className="col-4 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#00bc71] text-[16px] text-right tracking-[0.32px] whitespace-nowrap">
          <p className="leading-[normal]">+1.2%</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder7() {
  return (
    <div className="absolute gap-x-[20px] gap-y-[20px] grid grid-cols-[____60px_minmax(0,1fr)_99.21px_100px] grid-rows-[_49px] h-[102px] left-[-2.95px] opacity-88 pb-[27px] pt-[26px] right-[2.28px] top-0" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(227,227,226,0.14)] border-b border-solid inset-0 pointer-events-none" />
      <Container148 />
      <Container149 />
      <Container152 />
      <Container153 />
    </div>
  );
}

function Container154() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fcc82d] text-[16px] tracking-[0.32px] whitespace-nowrap">
          <p className="leading-[normal]">RE</p>
        </div>
      </div>
    </div>
  );
}

function Container156() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[26px] text-white w-full">
        <p className="leading-[normal]">Real Estate</p>
      </div>
    </div>
  );
}

function Container157() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e2] text-[12.6px] w-full">
        <p className="leading-[normal]">UAE cycle maturity, Egypt reform optionality.</p>
      </div>
    </div>
  );
}

function Container155() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <Container156 />
        <Container157 />
      </div>
    </div>
  );
}

function Container158() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e3e2] text-[16px] tracking-[0.32px] whitespace-nowrap">
          <p className="leading-[normal]">41 issuers</p>
        </div>
      </div>
    </div>
  );
}

function Container159() {
  return (
    <div className="col-4 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#00bc71] text-[16px] text-right tracking-[0.32px] whitespace-nowrap">
          <p className="leading-[normal]">+0.6%</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder8() {
  return (
    <div className="absolute gap-x-[20px] gap-y-[20px] grid grid-cols-[____60px_minmax(0,1fr)_99.21px_100px] grid-rows-[_49px] h-[102px] left-[-9.35px] opacity-60 pb-[27px] pt-[26px] right-[8.68px] top-[102px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(227,227,226,0.14)] border-b border-solid inset-0 pointer-events-none" />
      <Container154 />
      <Container155 />
      <Container158 />
      <Container159 />
    </div>
  );
}

function Container160() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fcc82d] text-[16px] tracking-[0.32px] whitespace-nowrap">
          <p className="leading-[normal]">NRG</p>
        </div>
      </div>
    </div>
  );
}

function Container162() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[26px] text-white w-full">
        <p className="leading-[normal]">{`Energy & Petrochem`}</p>
      </div>
    </div>
  );
}

function Container163() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e2] text-[12.6px] w-full">
        <p className="leading-[normal]">Crack spreads normalizing; selective entry.</p>
      </div>
    </div>
  );
}

function Container161() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <Container162 />
        <Container163 />
      </div>
    </div>
  );
}

function Container164() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e3e2] text-[16px] tracking-[0.32px] whitespace-nowrap">
          <p className="leading-[normal]">52 issuers</p>
        </div>
      </div>
    </div>
  );
}

function Container165() {
  return (
    <div className="col-4 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fcc82d] text-[16px] text-right tracking-[0.32px] whitespace-nowrap">
          <p className="leading-[normal]">-0.3%</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder9() {
  return (
    <div className="absolute gap-x-[20px] gap-y-[20px] grid grid-cols-[____60px_minmax(0,1fr)_99.21px_100px] grid-rows-[_49px] h-[102px] left-[-15.75px] opacity-33 pb-[27px] pt-[26px] right-[15.08px] top-[204px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(227,227,226,0.14)] border-b border-solid inset-0 pointer-events-none" />
      <Container160 />
      <Container161 />
      <Container164 />
      <Container165 />
    </div>
  );
}

function Container166() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fcc82d] text-[16px] tracking-[0.32px] whitespace-nowrap">
          <p className="leading-[normal]">CON</p>
        </div>
      </div>
    </div>
  );
}

function Container168() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[26px] text-white w-full">
        <p className="leading-[normal]">{`Consumer & Retail`}</p>
      </div>
    </div>
  );
}

function Container169() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e2] text-[12.6px] w-full">
        <p className="leading-[normal]">{`F&B modernization, Gulf tourism tailwinds.`}</p>
      </div>
    </div>
  );
}

function Container167() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <Container168 />
        <Container169 />
      </div>
    </div>
  );
}

function Container170() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e3e2] text-[16px] tracking-[0.32px] whitespace-nowrap">
          <p className="leading-[normal]">47 issuers</p>
        </div>
      </div>
    </div>
  );
}

function Container171() {
  return (
    <div className="col-4 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#00bc71] text-[16px] text-right tracking-[0.32px] whitespace-nowrap">
          <p className="leading-[normal]">+0.9%</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder10() {
  return (
    <div className="absolute gap-x-[20px] gap-y-[20px] grid grid-cols-[____60px_minmax(0,1fr)_99.21px_100px] grid-rows-[_49px] h-[102px] left-[-20px] opacity-15 pb-[27px] pt-[26px] right-[19.33px] top-[306px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(227,227,226,0.14)] border-b border-solid inset-0 pointer-events-none" />
      <Container166 />
      <Container167 />
      <Container170 />
      <Container171 />
    </div>
  );
}

function Container172() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fcc82d] text-[16px] tracking-[0.32px] whitespace-nowrap">
          <p className="leading-[normal]">TMT</p>
        </div>
      </div>
    </div>
  );
}

function Container174() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[26px] text-white w-full">
        <p className="leading-[normal]">{`Telecom & Tech`}</p>
      </div>
    </div>
  );
}

function Container175() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e2] text-[12.6px] w-full">
        <p className="leading-[normal]">AI capex, data-center land rush.</p>
      </div>
    </div>
  );
}

function Container173() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <Container174 />
        <Container175 />
      </div>
    </div>
  );
}

function Container176() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e3e2] text-[16px] tracking-[0.32px] whitespace-nowrap">
          <p className="leading-[normal]">33 issuers</p>
        </div>
      </div>
    </div>
  );
}

function Container177() {
  return (
    <div className="col-4 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#00bc71] text-[16px] text-right tracking-[0.32px] whitespace-nowrap">
          <p className="leading-[normal]">+2.1%</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder11() {
  return (
    <div className="absolute gap-x-[20px] gap-y-[20px] grid grid-cols-[____60px_minmax(0,1fr)_99.21px_100px] grid-rows-[_49px] h-[102px] left-[-20px] opacity-15 pb-[27px] pt-[26px] right-[19.33px] top-[408px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(227,227,226,0.14)] border-b border-solid inset-0 pointer-events-none" />
      <Container172 />
      <Container173 />
      <Container176 />
      <Container177 />
    </div>
  );
}

function Container178() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fcc82d] text-[16px] tracking-[0.32px] whitespace-nowrap">
          <p className="leading-[normal]">HLT</p>
        </div>
      </div>
    </div>
  );
}

function Container180() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[26px] text-white w-full">
        <p className="leading-[normal]">Healthcare</p>
      </div>
    </div>
  );
}

function Container181() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e2] text-[12.6px] w-full">
        <p className="leading-[normal]">Insurance reform, pharma localization.</p>
      </div>
    </div>
  );
}

function Container179() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <Container180 />
        <Container181 />
      </div>
    </div>
  );
}

function Container182() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e3e2] text-[16px] tracking-[0.32px] whitespace-nowrap">
          <p className="leading-[normal]">28 issuers</p>
        </div>
      </div>
    </div>
  );
}

function Container183() {
  return (
    <div className="col-4 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#00bc71] text-[16px] text-right tracking-[0.32px] whitespace-nowrap">
          <p className="leading-[normal]">+0.4%</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder12() {
  return (
    <div className="absolute gap-x-[20px] gap-y-[20px] grid grid-cols-[____60px_minmax(0,1fr)_99.21px_100px] grid-rows-[_49px] h-[102px] left-[-20px] opacity-15 pb-[27px] pt-[26px] right-[19.33px] top-[510px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(227,227,226,0.14)] border-b border-solid inset-0 pointer-events-none" />
      <Container178 />
      <Container179 />
      <Container182 />
      <Container183 />
    </div>
  );
}

function Container184() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fcc82d] text-[16px] tracking-[0.32px] whitespace-nowrap">
          <p className="leading-[normal]">IND</p>
        </div>
      </div>
    </div>
  );
}

function Container186() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[26px] text-white w-full">
        <p className="leading-[normal]">Industrials</p>
      </div>
    </div>
  );
}

function Container187() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e2] text-[12.6px] w-full">
        <p className="leading-[normal]">Giga-project suppliers; lumpy earnings.</p>
      </div>
    </div>
  );
}

function Container185() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <Container186 />
        <Container187 />
      </div>
    </div>
  );
}

function Container188() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e3e2] text-[16px] tracking-[0.32px] whitespace-nowrap">
          <p className="leading-[normal]">51 issuers</p>
        </div>
      </div>
    </div>
  );
}

function Container189() {
  return (
    <div className="col-4 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fcc82d] text-[16px] text-right tracking-[0.32px] whitespace-nowrap">
          <p className="leading-[normal]">-0.1%</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder13() {
  return (
    <div className="absolute gap-x-[20px] gap-y-[20px] grid grid-cols-[____60px_minmax(0,1fr)_99.21px_100px] grid-rows-[_49px] h-[102px] left-[-20px] opacity-15 pb-[27px] pt-[26px] right-[19.33px] top-[612px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(227,227,226,0.14)] border-b border-solid inset-0 pointer-events-none" />
      <Container184 />
      <Container185 />
      <Container188 />
      <Container189 />
    </div>
  );
}

function Container190() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fcc82d] text-[16px] tracking-[0.32px] whitespace-nowrap">
          <p className="leading-[normal]">MTR</p>
        </div>
      </div>
    </div>
  );
}

function Container192() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[26px] text-white w-full">
        <p className="leading-[normal]">{`Materials & Mining`}</p>
      </div>
    </div>
  );
}

function Container193() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e2] text-[12.7px] w-full">
        <p className="leading-[normal]">Copper + lithium theme; Morocco phosphates.</p>
      </div>
    </div>
  );
}

function Container191() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <Container192 />
        <Container193 />
      </div>
    </div>
  );
}

function Container194() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e3e2] text-[16px] tracking-[0.32px] whitespace-nowrap">
          <p className="leading-[normal]">22 issuers</p>
        </div>
      </div>
    </div>
  );
}

function Container195() {
  return (
    <div className="col-4 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#00bc71] text-[16px] text-right tracking-[0.32px] whitespace-nowrap">
          <p className="leading-[normal]">+1.6%</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder14() {
  return (
    <div className="absolute gap-x-[20px] gap-y-[20px] grid grid-cols-[____60px_minmax(0,1fr)_99.21px_100px] grid-rows-[_49px] h-[102px] left-[-20px] opacity-15 pb-[27px] pt-[26px] right-[19.33px] top-[714px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(227,227,226,0.14)] border-b border-solid inset-0 pointer-events-none" />
      <Container190 />
      <Container191 />
      <Container194 />
      <Container195 />
    </div>
  );
}

function Container147() {
  return (
    <div className="absolute h-[816px] left-[613.33px] right-0 top-0" data-name="Container">
      <HorizontalBorder7 />
      <HorizontalBorder8 />
      <HorizontalBorder9 />
      <HorizontalBorder10 />
      <HorizontalBorder11 />
      <HorizontalBorder12 />
      <HorizontalBorder13 />
      <HorizontalBorder14 />
    </div>
  );
}

function Container134() {
  return (
    <div className="-translate-x-1/2 absolute h-[659px] left-1/2 top-[138px] w-[1248px]" data-name="Container">
      <div className="absolute h-[659px] inset-[0_730px_0_0] pointer-events-none">
        <Container135 />
      </div>
      <Container147 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute bg-[#073e23] h-[878px] left-0 overflow-clip top-[1452px] w-[1440px]">
      <Background1 />
      <Container134 />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#fcc82d] content-stretch flex flex-col items-start justify-center relative shrink-0 size-[6px]" data-name="Background">
      <div className="bg-[rgba(255,255,255,0)] shadow-[0px_0px_0px_4px_rgba(255,130,0,0.18)] shrink-0 size-[6px]" data-name="Overlay+Shadow" />
    </div>
  );
}

function Container198() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <Background3 />
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fcc82d] text-[11px] tracking-[1.76px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Latest</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[820px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[57.6px] text-white tracking-[-1.44px] whitespace-nowrap">
        <p className="leading-[54.72px] mb-0">The desk,</p>
        <p className="font-['Newsreader:Italic',sans-serif] italic leading-[54.72px] text-[#fcc82d]">this week.</p>
      </div>
    </div>
  );
}

function Container197() {
  return (
    <div className="content-stretch flex flex-col gap-[17.36px] items-start relative shrink-0 w-[232px]" data-name="Container">
      <Container198 />
      <Heading1 />
    </div>
  );
}

function Container200() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#a7a6a6] text-[11px] text-right whitespace-nowrap">
        <p className="leading-[17.6px]">03 / 06</p>
      </div>
    </div>
  );
}

function Container201() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fcc82d] text-[11px] text-right whitespace-nowrap">
        <p className="leading-[17.6px]">048% · SCROLL</p>
      </div>
    </div>
  );
}

function Container199() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[86px]" data-name="Container">
      <Container200 />
      <Container201 />
    </div>
  );
}

function Container196() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container197 />
      <Container199 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[182px] items-start left-0 pb-[40px] right-0 top-0" data-name="Margin">
      <Container196 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Newsreader:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[34px] text-white tracking-[-0.51px] w-full">
        <p className="leading-[37.4px] mb-0">Real estate: late cycle, but</p>
        <p className="leading-[37.4px]">not the cycle you think</p>
      </div>
    </div>
  );
}

function Container205() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c9cdbe] text-[14.3px] w-full">
        <p className="leading-[24.8px] mb-0">Supply is back, prices are cooling, and yet velocity is holding</p>
        <p className="leading-[24.8px]">up. The mix is rotating from speculative to income.</p>
      </div>
    </div>
  );
}

function Container204() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start pb-[16.01px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ff8200] text-[10px] tracking-[1.4px] w-full">
          <p className="leading-[normal]">04 · STRATEGY · PAKISTAN</p>
        </div>
        <Heading2 />
        <Container205 />
      </div>
    </div>
  );
}

function Container207() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#a7a6a6] text-[10px] tracking-[0.8px] whitespace-nowrap">
        <p className="leading-[normal]">FINANCIALS · GCC</p>
      </div>
    </div>
  );
}

function Container206() {
  return (
    <div className="relative shrink-0 w-[108px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[21px] relative size-full">
        <Container207 />
      </div>
    </div>
  );
}

function Container208() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ff8200] text-[10px] tracking-[1px] whitespace-nowrap">
          <p className="leading-[normal]">APR 16 · 3 MIN</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder15() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[25px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.12)] border-solid border-t inset-0 pointer-events-none" />
      <Container206 />
      <Container208 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
        <HorizontalBorder15 />
      </div>
    </div>
  );
}

function Article() {
  return (
    <div className="bg-[#124734] content-stretch flex flex-col h-[372px] items-start justify-between opacity-81 pb-[31.67px] pt-[37px] px-[37px] relative shrink-0 w-[488px]" data-name="Article">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
      <Container204 />
      <Margin3 />
    </div>
  );
}

function ArticleCssTransform() {
  return (
    <div className="content-stretch flex flex-col h-[357px] items-start justify-center pt-[7.76px] relative shrink-0" data-name="Article:css-transform">
      <Article />
    </div>
  );
}

function Container210() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ff8200] text-[10px] tracking-[1.4px] w-full">
        <p className="leading-[normal]">05 · MACRO · MOROCCO</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Newsreader:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[34px] text-white tracking-[-0.51px] w-full">
        <p className="leading-[37.4px] mb-0">Phosphates, renewables, and</p>
        <p className="leading-[37.4px]">the Africa bridge</p>
      </div>
    </div>
  );
}

function Container211() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c9cdbe] text-[14.1px] w-full">
        <p className="leading-[24.8px] mb-0">{`OCP's capex cycle is the headline; the untold story is the`}</p>
        <p className="leading-[24.8px]">renewable corridor to Europe and its multiplier on utilities.</p>
      </div>
    </div>
  );
}

function Container209() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start pb-[16.01px] relative size-full">
        <Container210 />
        <Heading3 />
        <Container211 />
      </div>
    </div>
  );
}

function Container213() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12.8px] text-white whitespace-nowrap">
        <p className="leading-[normal]">Jihane Benmansour</p>
      </div>
    </div>
  );
}

function Container214() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#a7a6a6] text-[10px] tracking-[0.8px] whitespace-nowrap">
        <p className="leading-[normal]">MENA MACRO</p>
      </div>
    </div>
  );
}

function Container212() {
  return (
    <div className="relative shrink-0 w-[119px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container213 />
        <Container214 />
      </div>
    </div>
  );
}

function Container215() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[35px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ff8200] text-[10px] tracking-[1px] whitespace-nowrap">
          <p className="leading-[normal]">{`APR 15 · `}</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder16() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.12)] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-[25px] relative size-full">
          <Container212 />
          <Container215 />
        </div>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
        <HorizontalBorder16 />
      </div>
    </div>
  );
}

function Article1() {
  return (
    <div className="bg-[#124734] flex-[1_0_0] min-h-px opacity-40 relative w-[488px]" data-name="Article">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start justify-between pb-[31.67px] pt-[37px] px-[37px] relative size-full">
        <Container209 />
        <Margin4 />
      </div>
    </div>
  );
}

function ArticleCssTransform1() {
  return (
    <div className="content-stretch flex flex-col h-[381.06px] items-start justify-center pt-[24px] relative shrink-0" data-name="Article:css-transform">
      <Article1 />
    </div>
  );
}

function Container217() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ff8200] text-[10px] tracking-[1.4px] w-full">
        <p className="leading-[normal]">05 · MACRO · MOROCCO</p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Newsreader:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[34px] text-white tracking-[-0.51px] w-full">
        <p className="leading-[37.4px] mb-0">Phosphates, renewables, and</p>
        <p className="leading-[37.4px]">the Africa bridge</p>
      </div>
    </div>
  );
}

function Container218() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c9cdbe] text-[14.1px] w-full">
        <p className="leading-[24.8px] mb-0">{`OCP's capex cycle is the headline; the untold story is the`}</p>
        <p className="leading-[24.8px]">renewable corridor to Europe and its multiplier on utilities.</p>
      </div>
    </div>
  );
}

function Container216() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start pb-[16.01px] relative size-full">
        <Container217 />
        <Heading4 />
        <Container218 />
      </div>
    </div>
  );
}

function Container220() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12.8px] text-white whitespace-nowrap">
        <p className="leading-[normal]">Jihane Benmansour</p>
      </div>
    </div>
  );
}

function Container221() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#a7a6a6] text-[10px] tracking-[0.8px] whitespace-nowrap">
        <p className="leading-[normal]">MENA MACRO</p>
      </div>
    </div>
  );
}

function Container219() {
  return (
    <div className="relative shrink-0 w-[119px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container220 />
        <Container221 />
      </div>
    </div>
  );
}

function Container222() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[35px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ff8200] text-[10px] tracking-[1px] whitespace-nowrap">
          <p className="leading-[normal]">{`APR 15 · `}</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder17() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.12)] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-[25px] relative size-full">
          <Container219 />
          <Container222 />
        </div>
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
        <HorizontalBorder17 />
      </div>
    </div>
  );
}

function Article2() {
  return (
    <div className="bg-[#124734] flex-[1_0_0] min-h-px opacity-40 relative w-[488px]" data-name="Article">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start justify-between pb-[31.67px] pt-[37px] px-[37px] relative size-full">
        <Container216 />
        <Margin5 />
      </div>
    </div>
  );
}

function ArticleCssTransform2() {
  return (
    <div className="content-stretch flex flex-col h-[381.06px] items-start justify-center pt-[24px] relative shrink-0" data-name="Article:css-transform">
      <Article2 />
    </div>
  );
}

function Container203() {
  return (
    <div className="absolute bottom-[-0.06px] content-stretch flex gap-[32px] items-start left-0 top-0" data-name="Container">
      <ArticleCssTransform />
      <ArticleCssTransform1 />
      <ArticleCssTransform2 />
    </div>
  );
}

function Container202() {
  return (
    <div className="absolute inset-[190px_0_0_0] overflow-clip" data-name="Container">
      <Container203 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute h-[547px] left-[96px] top-[96px] w-[1248px]">
      <Margin2 />
      <Container202 />
    </div>
  );
}

function Container223() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[6px] items-start justify-center left-1/2 top-[663px] w-[1248px]" data-name="Container">
      <div className="bg-[#fcc82d] h-[2px] shrink-0 w-[20px]" data-name="Horizontal Divider" />
      <div className="bg-[rgba(255,255,255,0.2)] h-[2px] shrink-0 w-[8px]" data-name="Horizontal Divider" />
      <div className="bg-[rgba(255,255,255,0.2)] h-[2px] shrink-0 w-[8px]" data-name="Horizontal Divider" />
      <div className="bg-[rgba(255,255,255,0.2)] h-[2px] shrink-0 w-[8px]" data-name="Horizontal Divider" />
      <div className="bg-[rgba(255,255,255,0.2)] h-[2px] shrink-0 w-[8px]" data-name="Horizontal Divider" />
      <div className="bg-[rgba(255,255,255,0.2)] h-[2px] shrink-0 w-[8px]" data-name="Horizontal Divider" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#073e23] h-[761px] left-1/2 overflow-clip top-[3362px] w-[1440px]">
      <Frame15 />
      <Container223 />
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#fcc82d] content-stretch flex flex-col items-center justify-center relative shrink-0 size-[6px]" data-name="Background">
      <div className="bg-[rgba(255,255,255,0)] shadow-[0px_0px_0px_4px_rgba(255,130,0,0.18)] shrink-0 size-[6px]" data-name="Overlay+Shadow" />
    </div>
  );
}

function Container225() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Background4 />
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fcc82d] text-[11px] text-center tracking-[1.76px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">The terminal</p>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[900px] relative shrink-0 w-[900px]" data-name="Heading 2">
      <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[72px] text-center text-white tracking-[-1.8px] whitespace-nowrap">
        <p className="mb-0">
          <span className="leading-[73.44px]">{`A workbench `}</span>
          <span className="font-['Newsreader:Italic',sans-serif] font-normal italic leading-[73.44px] text-[#fcc82d]">built</span>
          <span className="leading-[73.44px]">{` for the buy-`}</span>
        </p>
        <p className="leading-[73.44px]">side.</p>
      </div>
    </div>
  );
}

function Container224() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-center relative shrink-0 w-full" data-name="Container">
      <Container225 />
      <Heading5 />
    </div>
  );
}

function Container228() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[30px] text-white w-full">
          <p className="leading-[normal]">Unified search</p>
        </div>
      </div>
    </div>
  );
}

function Container229() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e2] text-[14.4px] w-full">
          <p className="leading-[24px] mb-0">One prompt across reports, filings, earnings transcripts,</p>
          <p className="leading-[24px]">and analyst models.</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder18() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start pb-[28px] pt-[29px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(227,227,226,0.14)] border-solid border-t inset-0 pointer-events-none" />
      <Container228 />
      <Container229 />
    </div>
  );
}

function Container230() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[30px] text-white w-full">
          <p className="leading-[normal]">Live sector flows</p>
        </div>
      </div>
    </div>
  );
}

function Container231() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e2] text-[14.4px] w-full">
          <p className="leading-[24px] mb-0">Real-time order flow and analyst conviction deltas,</p>
          <p className="leading-[24px]">streamed to the desktop.</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder19() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start pb-[28px] pt-[29px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(227,227,226,0.14)] border-solid border-t inset-0 pointer-events-none" />
      <Container230 />
      <Container231 />
    </div>
  );
}

function Container232() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[30px] text-white w-full">
          <p className="leading-[normal]">Report workbench</p>
        </div>
      </div>
    </div>
  );
}

function Container233() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e2] text-[14.5px] w-full">
          <p className="leading-[24px] mb-0">Mark up any PDF, attach comments, and sync with</p>
          <p className="leading-[24px]">your OMS in a single pane.</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder20() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start opacity-94 pb-[28px] pt-[29.94px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(227,227,226,0.14)] border-solid border-t inset-0 pointer-events-none" />
      <Container232 />
      <Container233 />
    </div>
  );
}

function Container227() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <HorizontalBorder18 />
      <HorizontalBorder19 />
      <HorizontalBorder20 />
    </div>
  );
}

function Container235() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e3e2] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">EFG · Research Terminal</p>
      </div>
    </div>
  );
}

function Container236() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e3e2] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">·</p>
      </div>
    </div>
  );
}

function Container237() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e3e2] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">MENA / Equities</p>
      </div>
    </div>
  );
}

function Container234() {
  return (
    <div className="h-[16px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <Container235 />
        <Container236 />
        <Container237 />
      </div>
    </div>
  );
}

function Container239() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fcc82d] text-[11px] tracking-[1.54px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Live</p>
      </div>
    </div>
  );
}

function Container240() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e3e2] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">15:24 GST</p>
      </div>
    </div>
  );
}

function Container238() {
  return (
    <div className="h-[16px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10.01px] items-start relative size-full">
        <Container239 />
        <Container240 />
      </div>
    </div>
  );
}

function HorizontalBorder21() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(227,227,226,0.14)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[15px] pt-[14px] px-[20px] relative size-full">
          <Container234 />
          <Container238 />
        </div>
      </div>
    </div>
  );
}

function VerticalBorder10() {
  return (
    <div className="relative shrink-0 w-full" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[12px] py-[10px] relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e2] text-[11.9px] whitespace-nowrap">
          <p className="leading-[normal]">Markets</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder11() {
  return (
    <div className="relative shrink-0 w-full" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[12px] py-[10px] relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e2] text-[11.9px] whitespace-nowrap">
          <p className="leading-[normal]">Coverage</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder12() {
  return (
    <div className="relative shrink-0 w-full" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#fcc82d] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[12px] py-[10px] relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.8px] text-white whitespace-nowrap">
          <p className="leading-[normal]">Reports</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder13() {
  return (
    <div className="relative shrink-0 w-full" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[12px] py-[10px] relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e2] text-[11.8px] whitespace-nowrap">
          <p className="leading-[normal]">Analysts</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder14() {
  return (
    <div className="relative shrink-0 w-full" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[12px] py-[10px] relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e2] text-[11.8px] whitespace-nowrap">
          <p className="leading-[normal]">Screener</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder15() {
  return (
    <div className="relative shrink-0 w-full" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[12px] py-[10px] relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e2] text-[12px] whitespace-nowrap">
          <p className="leading-[normal]">Macro</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder9() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(227,227,226,0.14)] border-r border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[229px] pl-[8px] pr-[19px] pt-[18px] relative size-full">
        <VerticalBorder10 />
        <VerticalBorder11 />
        <VerticalBorder12 />
        <VerticalBorder13 />
        <VerticalBorder14 />
        <VerticalBorder15 />
      </div>
    </div>
  );
}

function Container246() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e3e2] text-[11px] whitespace-nowrap">
        <p className="leading-[normal]">EGX 30 · INDEX</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex flex-col font-['Newsreader:Regular',sans-serif] font-normal gap-[10px] items-start leading-[0] pb-[4px] relative shrink-0 w-full whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col justify-center relative shrink-0 text-[28px] text-white">
        <p className="leading-[normal]">28,412.60</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#00bc71] text-[14px]">
        <p className="leading-[normal]">+1.24%</p>
      </div>
    </div>
  );
}

function Container245() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-0.01px] relative self-stretch shrink-0 w-[123px]" data-name="Container">
      <Container246 />
      <Paragraph1 />
    </div>
  );
}

function Border8() {
  return (
    <div className="relative rounded-[4px] self-stretch shrink-0" data-name="Border">
      <div aria-hidden="true" className="absolute border border-[rgba(227,227,226,0.14)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start px-[11px] py-[5px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e3e2] text-[11px] whitespace-nowrap">
          <p className="leading-[normal]">1D</p>
        </div>
      </div>
    </div>
  );
}

function Border9() {
  return (
    <div className="relative rounded-[4px] self-stretch shrink-0" data-name="Border">
      <div aria-hidden="true" className="absolute border border-[rgba(227,227,226,0.14)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start px-[11px] py-[5px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e3e2] text-[11px] whitespace-nowrap">
          <p className="leading-[normal]">1W</p>
        </div>
      </div>
    </div>
  );
}

function Border10() {
  return (
    <div className="relative rounded-[4px] self-stretch shrink-0" data-name="Border">
      <div aria-hidden="true" className="absolute border border-[rgba(227,227,226,0.14)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start px-[11px] py-[5px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e3e2] text-[11px] whitespace-nowrap">
          <p className="leading-[normal]">1M</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#1a5a43] relative rounded-[4px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(227,227,226,0.14)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start px-[11px] py-[5px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[11px] text-white whitespace-nowrap">
          <p className="leading-[normal]">1Y</p>
        </div>
      </div>
    </div>
  );
}

function Border11() {
  return (
    <div className="relative rounded-[4px] self-stretch shrink-0" data-name="Border">
      <div aria-hidden="true" className="absolute border border-[rgba(227,227,226,0.14)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start px-[11px] py-[5px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e3e2] text-[11px] whitespace-nowrap">
          <p className="leading-[normal]">5Y</p>
        </div>
      </div>
    </div>
  );
}

function Container247() {
  return (
    <div className="content-stretch flex gap-[6px] h-[25px] items-start relative shrink-0" data-name="Container">
      <Border8 />
      <Border9 />
      <Border10 />
      <BackgroundBorder1 />
      <Border11 />
    </div>
  );
}

function ContainerAlignFlexStart1() {
  return (
    <div className="content-stretch flex items-start mr-[-0.01px] relative self-stretch shrink-0" data-name="Container:align-flex-start">
      <Container247 />
    </div>
  );
}

function Container244() {
  return (
    <div className="h-[71px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between pr-[0.01px] relative size-full">
        <Container245 />
        <ContainerAlignFlexStart1 />
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="h-[199.999px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <div className="absolute inset-[23.95%_0_76.05%_0]" data-name="Vector">
        <div className="absolute inset-[-0.29px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 324.17 0.578875">
            <path d="M0 0.289438H324.17" id="Vector" stroke="var(--stroke-0, #F4EFE6)" strokeOpacity="0.06" strokeWidth="0.578875" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[38.42%_0_61.58%_0]" data-name="Vector">
        <div className="absolute inset-[-0.29px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 324.17 0.578875">
            <path d="M0 0.289438H324.17" id="Vector" stroke="var(--stroke-0, #F4EFE6)" strokeOpacity="0.06" strokeWidth="0.578875" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[52.89%_0_47.11%_0]" data-name="Vector">
        <div className="absolute inset-[-0.29px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 324.17 0.578875">
            <path d="M0 0.289438H324.17" id="Vector" stroke="var(--stroke-0, #F4EFE6)" strokeOpacity="0.06" strokeWidth="0.578875" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[67.37%_0_32.63%_0]" data-name="Vector">
        <div className="absolute inset-[-0.29px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 324.17 0.578875">
            <path d="M0 0.289438H324.17" id="Vector" stroke="var(--stroke-0, #F4EFE6)" strokeOpacity="0.06" strokeWidth="0.578875" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.74%_0_35.53%_0]" data-name="Vector">
        <div className="absolute inset-[-0.82%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 324.36 70.607">
            <path d={svgPaths.p22de5000} id="Vector" stroke="var(--stroke-0, #FCC82D)" strokeWidth="1.15775" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.74%_0_21.06%_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 324.17 98.4088">
          <path d={svgPaths.p3c296400} fill="url(#paint0_linear_1_1420)" id="Vector" opacity="0.3" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1420" x1="0" x2="0" y1="0" y2="98.4088">
              <stop stopColor="#FF8200" />
              <stop offset="1" stopColor="#FF8200" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container243() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start pb-[4px] relative shrink-0 w-full" data-name="Container">
      <Container244 />
      <Svg1 />
    </div>
  );
}

function Container249() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e2] text-[9.5px] tracking-[1px] uppercase w-full">
          <p className="leading-[normal]">Coverage</p>
        </div>
      </div>
    </div>
  );
}

function Container250() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] relative size-full">
        <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[26px] text-white w-full">
          <p className="leading-[normal]">420</p>
        </div>
      </div>
    </div>
  );
}

function Container251() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[9.8px] text-[rgba(227,227,226,0.55)] w-full">
          <p className="leading-[normal]">issuers</p>
        </div>
      </div>
    </div>
  );
}

function Border12() {
  return (
    <div className="col-1 justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Border">
      <div aria-hidden="true" className="absolute border border-[rgba(227,227,226,0.14)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start pb-[27px] pt-[15px] px-[15px] relative size-full">
        <Container249 />
        <Container250 />
        <Container251 />
      </div>
    </div>
  );
}

function Container252() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e2] text-[9.5px] tracking-[1px] uppercase w-full">
          <p className="leading-[normal]">Analysts</p>
        </div>
      </div>
    </div>
  );
}

function Container253() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] relative size-full">
        <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[26px] text-white w-full">
          <p className="leading-[normal]">56</p>
        </div>
      </div>
    </div>
  );
}

function Container254() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[9.8px] text-[rgba(227,227,226,0.55)] w-full">
          <p className="leading-[normal]">across 9 desks</p>
        </div>
      </div>
    </div>
  );
}

function Border13() {
  return (
    <div className="col-2 justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Border">
      <div aria-hidden="true" className="absolute border border-[rgba(227,227,226,0.14)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start pb-[27px] pt-[15px] px-[15px] relative size-full">
        <Container252 />
        <Container253 />
        <Container254 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start leading-[0] not-italic relative size-full text-[#e3e3e2] tracking-[1px] uppercase whitespace-nowrap">
        <div className="flex flex-col justify-center relative shrink-0 text-[9.5px]">
          <p className="leading-[normal]">Reports</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[9.7px]">
          <p className="leading-[normal]">YTD</p>
        </div>
      </div>
    </div>
  );
}

function Container255() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] relative size-full">
        <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[26px] text-white w-full">
          <p className="leading-[normal]">1,284</p>
        </div>
      </div>
    </div>
  );
}

function Container256() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10.1px] text-[rgba(227,227,226,0.55)] w-full">
          <p className="leading-[normal]">+18% vs ’25</p>
        </div>
      </div>
    </div>
  );
}

function Border14() {
  return (
    <div className="col-3 justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Border">
      <div aria-hidden="true" className="absolute border border-[rgba(227,227,226,0.14)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[15px] relative size-full">
        <Paragraph2 />
        <Container255 />
        <Container256 />
      </div>
    </div>
  );
}

function Container248() {
  return (
    <div className="gap-x-[10px] gap-y-[10px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_99px] h-[99px] relative shrink-0 w-full" data-name="Container">
      <Border12 />
      <Border13 />
      <Border14 />
    </div>
  );
}

function Container242() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col gap-[18px] items-start pb-[34.5px] pt-[20px] px-[20px] relative size-full">
        <Container243 />
        <Container248 />
      </div>
    </div>
  );
}

function Container257() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[10px] relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e2] text-[10.3px] tracking-[1.54px] uppercase w-full">
          <p className="leading-[normal]">Top Picks</p>
        </div>
      </div>
    </div>
  );
}

function Container259() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a4a814] text-[11.1px] whitespace-nowrap">
        <p className="leading-[normal]">COMI</p>
      </div>
    </div>
  );
}

function Container260() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[8.9px] text-[rgba(227,227,226,0.55)] whitespace-nowrap">
        <p className="leading-[normal]">Commercial Intl</p>
      </div>
    </div>
  );
}

function Container258() {
  return (
    <div className="relative self-stretch shrink-0 w-[66px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container259 />
        <Container260 />
      </div>
    </div>
  );
}

function Container262() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#00bc71] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[normal]">+2.14%</p>
      </div>
    </div>
  );
}

function Container263() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fcc82d] text-[9px] text-right tracking-[0.9px] whitespace-nowrap">
        <p className="leading-[normal]">BUY</p>
      </div>
    </div>
  );
}

function Container261() {
  return (
    <div className="relative self-stretch shrink-0 w-[44px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container262 />
        <Container263 />
      </div>
    </div>
  );
}

function HorizontalBorder22() {
  return (
    <div className="h-[47px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(227,227,226,0.14)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[10px] pt-[9px] relative size-full">
        <Container258 />
        <Container261 />
      </div>
    </div>
  );
}

function Container265() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a4a814] text-[11.1px] whitespace-nowrap">
        <p className="leading-[normal]">EMAAR</p>
      </div>
    </div>
  );
}

function Container266() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[8.9px] text-[rgba(227,227,226,0.55)] whitespace-nowrap">
        <p className="leading-[normal]">Emaar Properties</p>
      </div>
    </div>
  );
}

function Container264() {
  return (
    <div className="relative self-stretch shrink-0 w-[73px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container265 />
        <Container266 />
      </div>
    </div>
  );
}

function Container268() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#00bc71] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[normal]">+0.87%</p>
      </div>
    </div>
  );
}

function Container269() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fcc82d] text-[9px] text-right tracking-[0.9px] whitespace-nowrap">
        <p className="leading-[normal]">BUY</p>
      </div>
    </div>
  );
}

function Container267() {
  return (
    <div className="relative self-stretch shrink-0 w-[44px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container268 />
        <Container269 />
      </div>
    </div>
  );
}

function HorizontalBorder23() {
  return (
    <div className="h-[47px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(227,227,226,0.14)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[10px] pt-[9px] relative size-full">
        <Container264 />
        <Container267 />
      </div>
    </div>
  );
}

function Container271() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a4a814] text-[11.1px] whitespace-nowrap">
        <p className="leading-[normal]">STC</p>
      </div>
    </div>
  );
}

function Container272() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[9.1px] text-[rgba(227,227,226,0.55)] whitespace-nowrap">
        <p className="leading-[normal]">Saudi Telecom</p>
      </div>
    </div>
  );
}

function Container270() {
  return (
    <div className="relative self-stretch shrink-0 w-[63px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container271 />
        <Container272 />
      </div>
    </div>
  );
}

function Container274() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#d45845] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[normal]">-0.42%</p>
      </div>
    </div>
  );
}

function Container275() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fcc82d] text-[9px] text-right tracking-[0.9px] whitespace-nowrap">
        <p className="leading-[normal]">HOLD</p>
      </div>
    </div>
  );
}

function Container273() {
  return (
    <div className="relative self-stretch shrink-0 w-[44px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container274 />
        <Container275 />
      </div>
    </div>
  );
}

function HorizontalBorder24() {
  return (
    <div className="h-[47px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(227,227,226,0.14)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[10px] pt-[9px] relative size-full">
        <Container270 />
        <Container273 />
      </div>
    </div>
  );
}

function Container277() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a4a814] text-[11.1px] whitespace-nowrap">
        <p className="leading-[normal]">QNBK</p>
      </div>
    </div>
  );
}

function Container278() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[9.2px] text-[rgba(227,227,226,0.55)] whitespace-nowrap">
        <p className="leading-[normal]">QNB Group</p>
      </div>
    </div>
  );
}

function Container276() {
  return (
    <div className="relative self-stretch shrink-0 w-[50px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container277 />
        <Container278 />
      </div>
    </div>
  );
}

function Container280() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#00bc71] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[normal]">+1.33%</p>
      </div>
    </div>
  );
}

function Container281() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fcc82d] text-[9px] text-right tracking-[0.9px] whitespace-nowrap">
        <p className="leading-[normal]">BUY</p>
      </div>
    </div>
  );
}

function Container279() {
  return (
    <div className="relative self-stretch shrink-0 w-[44px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container280 />
        <Container281 />
      </div>
    </div>
  );
}

function HorizontalBorder25() {
  return (
    <div className="h-[47px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(227,227,226,0.14)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[10px] pt-[9px] relative size-full">
        <Container276 />
        <Container279 />
      </div>
    </div>
  );
}

function VerticalBorder16() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-start shrink-0" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(227,227,226,0.14)] border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[235px] pl-[19px] pr-[18px] pt-[18px] relative size-full">
        <Container257 />
        <HorizontalBorder22 />
        <HorizontalBorder23 />
        <HorizontalBorder24 />
        <HorizontalBorder25 />
      </div>
    </div>
  );
}

function Container241() {
  return (
    <div className="h-[460px] min-h-[460px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid grid grid-cols-[___180px_minmax(0,1fr)_260px] grid-rows-[_460px] min-h-[inherit] relative size-full">
        <VerticalBorder9 />
        <Container242 />
        <VerticalBorder16 />
      </div>
    </div>
  );
}

function Container282() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[46.54px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fcc82d] text-[11px] tracking-[1.54px] uppercase whitespace-nowrap">
          <p className="leading-[normal] mb-0">Published</p>
          <p className="leading-[normal]">today</p>
        </div>
      </div>
    </div>
  );
}

function Container283() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[65.64px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e3e2] text-[11px] whitespace-nowrap">
          <p className="leading-[normal] mb-0">Saudi Banks: Q1 preview — net interest margin</p>
          <p className="leading-[normal]">resilience</p>
        </div>
      </div>
    </div>
  );
}

function Container284() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[11px] text-[rgba(227,227,226,0.55)] whitespace-nowrap">
          <p className="leading-[normal]">·</p>
        </div>
      </div>
    </div>
  );
}

function Container285() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[81.33px] relative size-full">
        <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3e3e2] text-[11px] whitespace-nowrap">
          <p className="leading-[normal] mb-0">Egypt macro: IMF review</p>
          <p className="leading-[normal]">implications</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder26() {
  return (
    <div className="h-[55px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(227,227,226,0.14)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[14px] items-start pb-[12px] pt-[13px] px-[20px] relative size-full">
        <Container282 />
        <Container283 />
        <Container284 />
        <Container285 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="bg-[#124734] col-2 relative rounded-[14px] row-1 self-center shrink-0 w-[806.17px]" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <HorizontalBorder21 />
        <Container241 />
        <HorizontalBorder26 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(227,227,226,0.26)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_40px_80px_0px_rgba(0,0,0,0.4)]" />
    </div>
  );
}

function Container226() {
  return (
    <div className="gap-x-[60px] gap-y-[60px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_560.50px] h-[560.5px] relative shrink-0 w-full" data-name="Container">
      <Container227 />
      <BackgroundBorderShadow1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[60px] h-[800px] items-start left-1/2 max-w-[1360px] min-w-[1360px] px-[56px] top-[calc(50%-0.5px)] w-[1360px]" data-name="Frame">
      <Container224 />
      <Container226 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#073e23] h-[993px] left-1/2 overflow-clip top-[4792px] w-[1440px]">
      <Frame />
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#fcc82d] content-stretch flex flex-col items-start justify-center relative shrink-0 size-[6px]" data-name="Background">
      <div className="bg-[rgba(255,255,255,0)] shadow-[0px_0px_0px_4px_rgba(255,130,0,0.18)] shrink-0 size-[6px]" data-name="Overlay+Shadow" />
    </div>
  );
}

function Container287() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <Background5 />
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fcc82d] text-[11px] tracking-[1.76px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">By the numbers</p>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[900px] pb-[62px] relative shrink-0 w-[900px]" data-name="Heading 2">
      <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[72px] text-white tracking-[-1.8px] whitespace-nowrap">
        <p className="mb-0">
          <span className="leading-[73.44px]">{`Three decades of `}</span>
          <span className="font-['Newsreader:Italic',sans-serif] font-normal italic leading-[73.44px] text-[#fcc82d]">conviction</span>
          <span className="leading-[73.44px]">,</span>
        </p>
        <p className="leading-[73.44px]">compounded.</p>
      </div>
    </div>
  );
}

function Container288() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[88px] text-white tracking-[-2.64px] w-full">
        <p className="leading-[88px]">420</p>
      </div>
    </div>
  );
}

function Container289() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.5px] text-white w-full">
        <p className="leading-[normal]">Issuers under coverage</p>
      </div>
    </div>
  );
}

function Container290() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.8px] text-[rgba(227,227,226,0.55)] w-full">
        <p className="leading-[normal]">MENA + frontier markets</p>
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#226645] col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col gap-[4px] items-start px-[32px] py-[40px] relative size-full">
        <Container288 />
        <Container289 />
        <Container290 />
      </div>
    </div>
  );
}

function Container291() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[88px] text-white tracking-[-2.64px] w-full">
        <p className="leading-[88px]">54</p>
      </div>
    </div>
  );
}

function Container292() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.5px] text-white w-full">
        <p className="leading-[normal]">Senior analysts</p>
      </div>
    </div>
  );
}

function Container293() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.8px] text-[rgba(227,227,226,0.55)] w-full">
        <p className="leading-[normal]">Embedded across 9 desks</p>
      </div>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#226645] col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col gap-[4px] items-start px-[32px] py-[40px] relative size-full">
        <Container291 />
        <Container292 />
        <Container293 />
      </div>
    </div>
  );
}

function Container294() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[88px] text-white tracking-[-2.64px] w-full">
        <p className="leading-[88px]">21+</p>
      </div>
    </div>
  );
}

function Container295() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.5px] text-white w-full">
        <p className="leading-[normal]">Years of research</p>
      </div>
    </div>
  );
}

function Container296() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.7px] text-[rgba(227,227,226,0.55)] w-full">
        <p className="leading-[normal]">Through every regional cycle</p>
      </div>
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#226645] col-3 justify-self-stretch relative row-1 self-start shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col gap-[4px] items-start px-[32px] py-[40px] relative size-full">
        <Container294 />
        <Container295 />
        <Container296 />
      </div>
    </div>
  );
}

function Container297() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[88px] text-white tracking-[-2.64px] w-full">
        <p className="leading-[88px]">417</p>
      </div>
    </div>
  );
}

function Container298() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.5px] text-white w-full">
        <p className="leading-[normal]">Reports published YTD</p>
      </div>
    </div>
  );
}

function Container299() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.7px] text-[rgba(227,227,226,0.55)] w-full">
        <p className="leading-[normal]">+18% vs. 2025</p>
      </div>
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-[#226645] col-4 justify-self-stretch relative row-1 self-start shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col gap-[4px] items-start px-[32px] py-[40px] relative size-full">
        <Container297 />
        <Container298 />
        <Container299 />
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(227,227,226,0.14)] gap-x-px gap-y-px grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[_217.50px] h-[217.5px] relative shrink-0 w-full" data-name="Overlay">
      <Background6 />
      <Background7 />
      <Background8 />
      <Background9 />
    </div>
  );
}

function Container286() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[18px] items-start left-1/2 max-w-[1360px] px-[56px] top-[96px] w-[1360px]" data-name="Container">
      <Container287 />
      <Heading6 />
      <Overlay />
    </div>
  );
}

function Frame14() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#226645] h-[669px] left-1/2 overflow-clip top-[4123px] w-[1440px]">
      <Container286 />
    </div>
  );
}

function Background10() {
  return (
    <div className="bg-[#fcc82d] content-stretch flex flex-col items-start justify-center relative shrink-0 size-[6px]" data-name="Background">
      <div className="bg-[rgba(255,255,255,0)] shadow-[0px_0px_0px_4px_rgba(255,130,0,0.18)] shrink-0 size-[6px]" data-name="Overlay+Shadow" />
    </div>
  );
}

function Container301() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <Background10 />
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#a7a6a6] text-[12px] tracking-[1.76px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Geographic coverage</p>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1d1b] text-[72px] tracking-[-1.8px] w-full">
        <p>
          <span className="leading-[73.44px]">{`Seven markets. `}</span>
          <span className="font-['Newsreader:Italic',sans-serif] font-normal italic leading-[73.44px] text-[#27774f]">One desk.</span>
        </p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full">
      <Container301 />
      <Heading7 />
    </div>
  );
}

function Container302() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[603.56201171875px] pt-[1.99px] relative shrink-0 w-[603.56px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4d4e52] text-[16px] whitespace-nowrap">
        <p className="leading-[27px]">Hover a market to preview. Click to drill into coverage.</p>
      </div>
    </div>
  );
}

function Container300() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[154px] items-start left-[96px] max-w-[900px] top-0 w-[900px]" data-name="Container">
      <Frame17 />
      <Container302 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute h-[3448.255px] left-[-718px] top-[-1550px] w-[4899.021px]">
      <div className="absolute h-[297.93px] left-[682.77px] top-[2993.63px] w-[300.147px]" data-name="Shape">
        <div className="absolute inset-[-8.26%_-16.16%_-23.8%_-15.91%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 396.415 393.439">
            <g filter="url(#filter0_d_1_1301)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p1dbdb380} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1dbdb380} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="393.439" id="filter0_d_1_1301" width="396.415" x="1.78814e-06" y="3.57628e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1301" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1301" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[164.623px] left-[982.93px] top-[2960.43px] w-[185.989px]" data-name="Shape">
        <div className="absolute inset-[-14.96%_-25.68%_-43.28%_-26.09%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 282.259 260.495">
            <g filter="url(#filter0_d_1_1326)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p162002e0} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p162002e0} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="260.495" id="filter0_d_1_1326" width="282.259" x="1.19209e-06" y="-9.53674e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1326" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1326" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[226.042px] left-[864.97px] top-[3013.23px] w-[210.869px]" data-name="Shape">
        <div className="absolute inset-[-10.98%_-22.65%_-31.37%_-22.65%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 306.378 321.767">
            <g filter="url(#filter0_d_1_1477)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p2f112880} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p2f112880} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="321.767" id="filter0_d_1_1477" width="306.378" x="-1.54972e-06" y="-3.57628e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1477" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1477" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[39.096px] left-[1113.4px] top-[3210.31px] w-[31.775px]" data-name="Shape">
        <div className="absolute inset-[-62.92%_-150.57%_-181.37%_-150.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 127.373 134.606">
            <g filter="url(#filter0_d_1_1460)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p9b3b880} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p9b3b880} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="134.606" id="filter0_d_1_1460" width="127.373" x="-1.54972e-06" y="3.57628e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1460" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1460" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[53.378px] left-[1027.86px] top-[3281.54px] w-[53.126px]" data-name="Shape">
        <div className="absolute inset-[-46.09%_-89.89%_-133.12%_-90.52%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 148.973 149.032">
            <g filter="url(#filter0_d_1_1483)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p30d912e0} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p30d912e0} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="149.032" id="filter0_d_1_1483" width="148.973" x="1.43051e-06" y="8.34465e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1483" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1483" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[332.266px] left-[783.52px] top-[3115.99px] w-[379.56px]" data-name="Shape">
        <div className="absolute inset-[-8.2%_-12.63%_-21.34%_-12.94%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 476.608 430.412">
            <g filter="url(#filter0_d_1_1426)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p52ec40} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path d={svgPaths.p122d5900} fill="var(--stroke-0, white)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="430.412" id="filter0_d_1_1426" width="476.608" x="-1.66893e-06" y="4.76837e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1426" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1426" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[290.752px] left-[682.81px] top-[2724.45px] w-[276.63px]" data-name="Shape">
        <div className="absolute inset-[-8.46%_-17.3%_-24.39%_-17.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 372.306 386.261">
            <g filter="url(#filter0_d_1_1430)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p5d1b100} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p5d1b100} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="386.261" id="filter0_d_1_1430" width="372.306" x="-1.43051e-06" y="5.96046e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1430" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1430" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[237.531px] left-[910.88px] top-[2779.39px] w-[272.247px]" data-name="Shape">
        <div className="absolute inset-[-10.57%_-17.54%_-29.85%_-17.55%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 367.771 333.541">
            <g filter="url(#filter0_d_1_1464)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p343cd900} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p343cd900} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="333.541" id="filter0_d_1_1464" width="367.771" x="-1.43051e-06" y="-3.57628e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1464" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1464" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[38.535px] left-[1072.57px] top-[2609.46px] w-[45.412px]" data-name="Shape">
        <div className="absolute inset-[-64.63%_-105.16%_-184.01%_-105.16%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140.921 134.348">
            <g filter="url(#filter0_d_1_1384)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p25457c80} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p25457c80} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="134.348" id="filter0_d_1_1384" width="140.921" x="-1.54972e-06" y="7.15256e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1384" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1384" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[326.095px] left-[1357.41px] top-[2295.37px] w-[244.12px]" data-name="Shape">
        <div className="absolute inset-[-7.54%_-19.56%_-22.08%_-19.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 339.634 422.711">
            <g filter="url(#filter0_d_1_1438)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p294a6140} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p294a6140} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="422.711" id="filter0_d_1_1438" width="339.634" x="-9.53674e-07" y="-5.96046e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1438" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1438" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[224.711px] left-[94.21px] top-[1692.46px] w-[284.131px]" data-name="Shape">
        <div className="absolute inset-[-10.95%_-16.81%_-33.38%_-17.59%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 381.858 324.317">
            <g filter="url(#filter0_d_1_1456)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p1c8c2e00} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1c8c2e00} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="324.317" id="filter0_d_1_1456" width="381.858" x="4.76837e-07" y="3.57628e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1456" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1456" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[189.03px] left-[582.42px] top-[1652.64px] w-[98.351px]" data-name="Shape">
        <div className="absolute inset-[-13.01%_-48.64%_-37.79%_-48.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 193.945 285.065">
            <g filter="url(#filter0_d_1_1338)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.pb8d0070} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.pb8d0070} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="285.065" id="filter0_d_1_1338" width="193.945" x="-2.38419e-07" y="1.19209e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1338" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1338" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[472.088px] left-[198.46px] top-[1657.01px] w-[492.611px]" data-name="Shape">
        <div className="absolute inset-[-5.21%_-9.79%_-15.1%_-9.69%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 588.582 567.955">
            <g filter="url(#filter0_d_1_1452)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p9e97300} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p9e97300} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="567.955" id="filter0_d_1_1452" width="588.582" x="-1.66893e-06" y="7.15256e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1452" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1452" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[344.569px] left-[630.38px] top-[1766.88px] w-[357.599px]" data-name="Shape">
        <div className="absolute inset-[-7.44%_-13.41%_-20.86%_-13.35%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 453.291 442.093">
            <g filter="url(#filter0_d_1_1448)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p39af6380} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p39af6380} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="442.093" id="filter0_d_1_1448" width="453.291" x="1.66893e-06" y="-4.76837e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1448" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1448" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[20.158px] left-[9.72px] top-[2251.82px] w-[68.377px]" data-name="Shape">
        <div className="absolute inset-[-122.04%_-71.55%_-354.12%_-70.23%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 165.322 116.141">
            <g filter="url(#filter0_d_1_1444)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p1052a600} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1052a600} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="116.141" id="filter0_d_1_1444" width="165.322" x="1.66893e-06" y="-4.76837e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1444" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1444" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[105.503px] left-0 top-[2186.09px] w-[134.745px]" data-name="Shape">
        <div className="absolute inset-[-23.32%_-35.44%_-67.21%_-35.44%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 230.254 201.013">
            <g filter="url(#filter0_d_1_1458)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p10429600} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p10429600} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="201.013" id="filter0_d_1_1458" width="230.254" x="-1.66893e-06" y="7.15256e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1458" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1458" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[39.126px] left-[14.82px] top-[2281.13px] w-[65.701px]" data-name="Shape">
        <div className="absolute inset-[-62.88%_-72.82%_-182.57%_-74.35%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 162.388 135.161">
            <g filter="url(#filter0_d_1_1442)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p29d07b70} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p29d07b70} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="135.161" id="filter0_d_1_1442" width="162.388" x="2.38419e-07" y="4.76837e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1442" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1442" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[202.6px] left-[746.49px] top-[2318.24px] w-[290.377px]" data-name="Shape">
        <div className="absolute inset-[-12.14%_-16.64%_-35.23%_-16.45%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 386.45 298.585">
            <g filter="url(#filter0_d_1_1440)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p224aea00} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p224aea00} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="298.585" id="filter0_d_1_1440" width="386.45" x="-1.54972e-06" y="-5.96046e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1440" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1440" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[227.571px] left-[471.14px] top-[2252.68px] w-[278.923px]" data-name="Shape">
        <div className="absolute inset-[-10.81%_-17.12%_-31.16%_-17.12%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 374.432 323.081">
            <g filter="url(#filter0_d_1_1468)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p26c18840} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p26c18840} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="323.081" id="filter0_d_1_1468" width="374.433" x="-1.78814e-06" y="8.34465e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1468" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1468" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[145.361px] left-[424.28px] top-[2287.18px] w-[69.802px]" data-name="Shape">
        <div className="absolute inset-[-16.92%_-68.41%_-48.98%_-68.54%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 165.396 241.164">
            <g filter="url(#filter0_d_1_1434)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.pf883600} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.pf883600} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="241.164" id="filter0_d_1_1434" width="165.396" x="-1.43051e-06" y="-5.96046e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1434" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1434" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[122.615px] left-[403.54px] top-[2318.24px] w-[43.986px]" data-name="Shape">
        <div className="absolute inset-[-20.06%_-108.67%_-58.26%_-108.94%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 139.703 218.646">
            <g filter="url(#filter0_d_1_1446)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p2e604640} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p2e604640} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="218.646" id="filter0_d_1_1446" width="139.703" x="-1.19209e-07" y="2.38419e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1446" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1446" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[272.039px] left-[609.41px] top-[2269.91px] w-[175.216px]" data-name="Shape">
        <div className="absolute inset-[-9.13%_-27.57%_-26.36%_-27.44%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 271.608 368.573">
            <g filter="url(#filter0_d_1_1416)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p14069880} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p14069880} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="368.573" id="filter0_d_1_1416" width="271.608" x="-1.19209e-06" y="-3.57628e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1416" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1416" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[147.29px] left-[202.7px] top-[2329.79px] w-[144.262px]" data-name="Shape">
        <div className="absolute inset-[-16.7%_-33.1%_-48.14%_-33.1%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 239.772 242.799">
            <g filter="url(#filter0_d_1_1432)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p751d080} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p751d080} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="242.799" id="filter0_d_1_1432" width="239.772" x="-1.19209e-06" y="3.57628e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1432" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1432" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[152.233px] left-[329.09px] top-[2318.78px] w-[100.429px]" data-name="Shape">
        <div className="absolute inset-[-16.58%_-48.04%_-46.58%_-47.55%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 196.433 248.389">
            <g filter="url(#filter0_d_1_1422)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p29c41500} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p29c41500} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="248.389" id="filter0_d_1_1422" width="196.433" x="-7.15256e-07" y="4.76837e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1422" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1422" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[132.228px] left-[46.58px] top-[2280.58px] w-[176.449px]" data-name="Shape">
        <div className="absolute inset-[-18.86%_-27.06%_-53.63%_-27.44%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 272.611 228.074">
            <g filter="url(#filter0_d_1_1418)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p67be00} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p67be00} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="228.074" id="filter0_d_1_1418" width="272.611" x="9.53674e-07" y="1.19209e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1418" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1418" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[94.637px] left-[131.32px] top-[2382.45px] w-[98.771px]" data-name="Shape">
        <div className="absolute inset-[-26%_-48.35%_-74.94%_-48.81%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 194.74 190.157">
            <g filter="url(#filter0_d_1_1412)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p20981a80} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p20981a80} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="190.157" id="filter0_d_1_1412" width="194.74" x="-1.90735e-06" y="3.57628e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1412" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1412" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[75.033px] left-[90.08px] top-[2346.05px] w-[68.074px]" data-name="Shape">
        <div className="absolute inset-[-32.79%_-70.15%_-95.32%_-70.66%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 163.927 171.157">
            <g filter="url(#filter0_d_1_1475)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p381f6680} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p381f6680} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="171.157" id="filter0_d_1_1475" width="163.927" x="-1.3113e-06" y="3.57628e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1475" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1475" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[160.928px] left-[1.27px] top-[1908.13px] w-[198.175px]" data-name="Shape">
        <div className="absolute inset-[-15.29%_-24.1%_-44.06%_-24.16%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 293.819 256.438">
            <g filter="url(#filter0_d_1_1408)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p38b64880} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p38b64880} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="256.438" id="filter0_d_1_1408" width="293.819" x="-1.3113e-06" y="3.57628e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1408" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1408" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[314.437px] left-[1.13px] top-[1917.17px] w-[286.205px]" data-name="Shape">
        <div className="absolute inset-[-7.6%_-17.86%_-22.56%_-16.69%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 385.082 409.25">
            <g filter="url(#filter0_d_1_1344)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p2bc2cdb0} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p2bc2cdb0} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="409.25" id="filter0_d_1_1344" width="385.082" x="-7.15256e-07" y="5.36442e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1344" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1344" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[366.908px] left-[111.88px] top-[1975.99px] w-[394.79px]" data-name="Shape">
        <div className="absolute inset-[-6.7%_-12.1%_-19.33%_-12.31%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 491.135 462.418">
            <g filter="url(#filter0_d_1_1410)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p3dd89880} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p3dd89880} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="462.418" id="filter0_d_1_1410" width="491.135" x="-2.38419e-07" y="3.57628e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1410" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1410" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[131.741px] left-[273.93px] top-[2222.77px] w-[193.492px]" data-name="Shape">
        <div className="absolute inset-[-18.67%_-24.68%_-53.82%_-24.9%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 289.422 227.249">
            <g filter="url(#filter0_d_1_1402)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p4fab580} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p4fab580} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="227.249" id="filter0_d_1_1402" width="289.422" x="1.19209e-07" y="-7.15256e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1402" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1402" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[285.533px] left-[410.51px] top-[2014.46px] w-[364.883px]" data-name="Shape">
        <div className="absolute inset-[-8.62%_-13.09%_-25.27%_-13.09%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 460.393 382.275">
            <g filter="url(#filter0_d_1_1400)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p2879ea00} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p2879ea00} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="382.275" id="filter0_d_1_1400" width="460.393" x="-2.38419e-07" y="3.57628e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1400" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1400" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[392.22px] left-[725.04px] top-[2014.45px] w-[236.213px]" data-name="Shape">
        <div className="absolute inset-[-6.32%_-20.22%_-18.08%_-20.23%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 331.753 487.944">
            <g filter="url(#filter0_d_1_1396)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p1dc2e5f0} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1dc2e5f0} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="487.944" id="filter0_d_1_1396" width="331.753" x="2.38419e-07" y="-5.96046e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1396" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1396" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[257.624px] left-[979.66px] top-[1797.25px] w-[253.275px]" data-name="Shape">
        <div className="absolute inset-[-10.14%_-18.85%_-27.52%_-18.85%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 348.785 354.648">
            <g filter="url(#filter0_d_1_1394)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p263b11b0} fill="var(--fill-0, #E3E3C6)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p263b11b0} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="354.648" id="filter0_d_1_1394" width="348.785" x="-1.07288e-06" y="-7.15256e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1394" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1394" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[148.007px] left-[616.08px] top-[2528.82px] w-[129.924px]" data-name="Shape">
        <div className="absolute inset-[-16.63%_-36.76%_-48.38%_-36.76%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 225.433 244.227">
            <g filter="url(#filter0_d_1_1499)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p1bc2d770} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1bc2d770} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="244.227" id="filter0_d_1_1499" width="225.433" x="1.78814e-06" y="-8.34465e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1499" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1499" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[33.322px] left-[628.75px] top-[2530.1px] w-[49.71px]" data-name="Shape">
        <div className="absolute inset-[-75.13%_-96.07%_-214.23%_-96.07%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 145.22 129.743">
            <g filter="url(#filter0_d_1_1390)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p30e400} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p30e400} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="129.743" id="filter0_d_1_1390" width="145.22" x="7.15256e-07" y="-8.34465e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1390" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1390" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[208.433px] left-[668.83px] top-[2495.33px] w-[165.964px]" data-name="Shape">
        <div className="absolute inset-[-11.82%_-28.77%_-34.35%_-29.06%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 261.946 304.666">
            <g filter="url(#filter0_d_1_1388)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p1ba6680} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1ba6680} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="304.666" id="filter0_d_1_1388" width="261.946" x="-1.54972e-06" y="-3.57628e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1388" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1388" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[480.63px] left-[913.66px] top-[2017.52px] w-[386.837px]" data-name="Shape">
        <div className="absolute inset-[-5.58%_-12.43%_-14.75%_-12.35%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 482.677 578.357">
            <g filter="url(#filter0_d_1_1392)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p2f144c80} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p2f144c80} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="578.357" id="filter0_d_1_1392" width="482.677" x="1.43051e-06" y="-2.38419e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1392" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1392" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[44.709px] left-[1376.75px] top-[2279.44px] w-[41.084px]" data-name="Shape">
        <div className="absolute inset-[-55.78%_-116.24%_-160.3%_-116.24%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 136.593 141.316">
            <g filter="url(#filter0_d_1_1386)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p1c1de680} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1c1de680} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="141.316" id="filter0_d_1_1386" width="136.593" x="-8.34465e-07" y="5.96046e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1386" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1386" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[135.95px] left-[1251.89px] top-[2149.45px] w-[156.984px]" data-name="Shape">
        <div className="absolute inset-[-18.86%_-31.03%_-52.16%_-30.42%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 253.454 232.493">
            <g filter="url(#filter0_d_1_1382)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p3e663100} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p3e663100} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="232.493" id="filter0_d_1_1382" width="253.454" x="-1.78814e-06" y="-2.38419e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1382" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1382" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[273.415px] left-[1169.07px] top-[2226.98px] w-[351.176px]" data-name="Shape">
        <div className="absolute inset-[-9%_-13.6%_-25.93%_-13.6%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 446.689 368.925">
            <g filter="url(#filter0_d_1_1380)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p1c454900} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1c454900} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="368.925" id="filter0_d_1_1380" width="446.689" x="-2.38419e-07" y="5.96046e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1380" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1380" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[43.297px] left-[1222.82px] top-[1719.83px] w-[32.474px]" data-name="Shape">
        <div className="absolute inset-[-56.82%_-147.06%_-164.68%_-148.57%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128.475 139.199">
            <g filter="url(#filter0_d_1_1374)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p233c4270} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p233c4270} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="139.199" id="filter0_d_1_1374" width="128.475" x="-1.19209e-07" y="1.19209e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1374" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1374" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[129.675px] left-[1233.96px] top-[1653.55px] w-[162.722px]" data-name="Shape">
        <div className="absolute inset-[-19.03%_-30.42%_-54.87%_-29.72%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 260.594 225.51">
            <g filter="url(#filter0_d_1_1368)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p26b4e400} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p26b4e400} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="225.51" id="filter0_d_1_1368" width="260.594" x="-4.76837e-07" y="7.15256e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1368" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1368" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[132.52px] left-[2478.76px] top-[1946.84px] w-[99.05px]" data-name="Shape">
        <div className="absolute inset-[-18.56%_-48.31%_-54.26%_-48.21%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 194.656 229.021">
            <g filter="url(#filter0_d_1_1497)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p102b7580} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p102b7580} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="229.021" id="filter0_d_1_1497" width="194.656" x="-5.96046e-07" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1497" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1497" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[691.912px] left-[2018.7px] top-[1703.93px] w-[656.847px]" data-name="Shape">
        <div className="absolute inset-[-3.56%_-7.31%_-10.25%_-7.37%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 753.261 787.463">
            <g filter="url(#filter0_d_1_1370)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p3986f4c0} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p3986f4c0} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="787.463" id="filter0_d_1_1370" width="753.261" x="-1.19209e-06" y="2.38419e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1370" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1370" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[316.934px] left-[2473.51px] top-[1220.43px] w-[742.349px]" data-name="Shape">
        <div className="absolute inset-[-7.76%_-6.43%_-22.37%_-6.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 838.365 412.444">
            <g filter="url(#filter0_d_1_1366)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p3577d600} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p3577d600} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="412.444" id="filter0_d_1_1366" width="838.365" x="-9.53674e-07" y="3.57628e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1366" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1366" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[32.385px] left-[1220.65px] top-[1779.01px] w-[12.14px]" data-name="Shape">
        <div className="absolute inset-[-75.96%_-395.05%_-224.17%_-393.36%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 107.855 129.584">
            <g filter="url(#filter0_d_1_1324)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p220a8a80} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p220a8a80} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="129.584" id="filter0_d_1_1324" width="107.855" x="-1.54972e-06" y="8.34465e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1324" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1324" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[98.796px] left-[1200.38px] top-[1758.36px] w-[34.37px]" data-name="Shape">
        <div className="absolute inset-[-25.34%_-139.25%_-72.57%_-139.45%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 130.161 195.528">
            <g filter="url(#filter0_d_1_1454)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p322b8a00} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p322b8a00} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="195.528" id="filter0_d_1_1454" width="130.161" x="4.76837e-07" y="9.53674e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1454" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1454" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[109.516px] left-[1218.81px] top-[1756.82px] w-[99.829px]" data-name="Shape">
        <div className="absolute inset-[-23.21%_-48.19%_-64.75%_-47.96%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 195.819 205.839">
            <g filter="url(#filter0_d_1_1466)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p1788e640} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1788e640} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="205.839" id="filter0_d_1_1466" width="195.819" x="7.15256e-07" y="4.76837e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1466" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1466" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[108.592px] left-[2045.38px] top-[1488.58px] w-[257.827px]" data-name="Shape">
        <div className="absolute inset-[-22.65%_-18.52%_-65.3%_-18.52%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 353.337 204.102">
            <g filter="url(#filter0_d_1_1481)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p23dc5d70} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p23dc5d70} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="204.102" id="filter0_d_1_1481" width="353.337" x="1.43051e-06" y="-1.19209e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1481" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1481" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[71.724px] left-[1336.36px] top-[1474.4px] w-[161.372px]" data-name="Shape">
        <div className="absolute inset-[-34.3%_-29.59%_-98.86%_-30.46%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 258.282 167.233">
            <g filter="url(#filter0_d_1_1364)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.pbae9100} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.pbae9100} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="167.233" id="filter0_d_1_1364" width="258.282" x="-1.90735e-06" y="-5.96046e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1364" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1364" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[172.607px] left-[1012px] top-[1517.86px] w-[440.79px]" data-name="Shape">
        <div className="absolute inset-[-14.76%_-10.83%_-41.24%_-10.99%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 536.995 269.258">
            <g filter="url(#filter0_d_1_1356)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p3bf88af0} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path d={svgPaths.p2e1d680} fill="var(--stroke-0, white)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="269.258" id="filter0_d_1_1356" width="536.995" x="4.76837e-07" y="4.76837e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1356" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1356" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[51.876px] left-[2249.63px] top-[1693.08px] w-[54.216px]" data-name="Shape">
        <div className="absolute inset-[-47.42%_-88.08%_-136.83%_-88.41%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 149.902 147.459">
            <g filter="url(#filter0_d_1_1354)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p30897040} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p30897040} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="147.459" id="filter0_d_1_1354" width="149.902" x="-5.96046e-07" y="-1.19209e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1354" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1354" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[101.127px] left-[2299.35px] top-[1842.14px] w-[178.265px]" data-name="Shape">
        <div className="absolute inset-[-24.33%_-27.58%_-70.12%_-26.79%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 275.177 196.636">
            <g filter="url(#filter0_d_1_1348)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.pc740980} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.pc740980} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="196.636" id="filter0_d_1_1348" width="275.177" x="-1.54972e-06" y="-8.34465e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1348" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1348" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[442.32px] left-[2562.51px] top-[1891.17px] w-[202.203px]" data-name="Shape">
        <div className="absolute inset-[-5.56%_-24.13%_-16.03%_-23.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 299.052 537.83">
            <g filter="url(#filter0_d_1_1346)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p1e7a980} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1e7a980} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="537.83" id="filter0_d_1_1346" width="299.052" x="5.96046e-07" y="8.34465e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1346" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1346" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[38.444px] left-[2493.93px] top-[1897.57px] w-[68.894px]" data-name="Shape">
        <div className="absolute inset-[-63.99%_-70.83%_-184.45%_-69.63%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 165.658 133.953">
            <g filter="url(#filter0_d_1_1406)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p3d111e00} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p3d111e00} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="133.953" id="filter0_d_1_1406" width="165.658" x="-1.3113e-06" y="1.19209e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1406" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1406" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[79.939px] left-[773.23px] top-[1425.24px] w-[84.08px]" data-name="Shape">
        <div className="absolute inset-[-30.77%_-56.8%_-90.11%_-56.8%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 179.591 176.575">
            <g filter="url(#filter0_d_1_1503)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p21262a00} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p21262a00} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="176.575" id="filter0_d_1_1503" width="179.591" x="-3.57628e-07" y="4.76837e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1503" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1503" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[110.223px] left-[730.34px] top-[1385.97px] w-[126.422px]" data-name="Shape">
        <div className="absolute inset-[-22.62%_-38.05%_-64.13%_-37.94%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 222.481 205.839">
            <g filter="url(#filter0_d_1_1495)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p29edc000} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p29edc000} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="205.839" id="filter0_d_1_1495" width="222.481" x="8.34465e-07" y="5.96046e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1495" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1495" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[86.642px] left-[852.94px] top-[1501.29px] w-[42.945px]" data-name="Shape">
        <div className="absolute inset-[-28.39%_-113.62%_-82.48%_-111.58%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 139.658 182.708">
            <g filter="url(#filter0_d_1_1336)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p185f3000} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p185f3000} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="182.708" id="filter0_d_1_1336" width="139.658" x="7.15256e-07" y="3.57628e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1336" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1336" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[144.284px] left-[178.48px] top-[1516.02px] w-[78.896px]" data-name="Shape">
        <div className="absolute inset-[-17.05%_-60.53%_-49.15%_-60.53%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 174.407 239.794">
            <g filter="url(#filter0_d_1_1334)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p11899800} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p11899800} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="239.794" id="filter0_d_1_1334" width="174.407" x="-1.19209e-07" y="-3.57628e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1334" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1334" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[138.68px] left-[882.76px] top-[1330.47px] w-[213.02px]" data-name="Shape">
        <div className="absolute inset-[-17.96%_-22.42%_-51.45%_-22.42%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 308.529 234.931">
            <g filter="url(#filter0_d_1_1479)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p13b4c000} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p13b4c000} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="234.931" id="filter0_d_1_1479" width="308.529" x="5.96046e-07" y="-3.57628e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1479" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1479" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[81.029px] left-[924.14px] top-[1456.1px] w-[147.438px]" data-name="Shape">
        <div className="absolute inset-[-30.57%_-32.57%_-87.51%_-32.39%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 243.218 176.71">
            <g filter="url(#filter0_d_1_1414)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p909f800} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p909f800} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="176.71" id="filter0_d_1_1414" width="243.218" x="-1.3113e-06" y="2.38419e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1414" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1414" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[45.658px] left-[881.6px] top-[1506.34px] w-[63.532px]" data-name="Shape">
        <div className="absolute inset-[-54.43%_-75.17%_-154.67%_-75.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 159.042 141.129">
            <g filter="url(#filter0_d_1_1505)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p10c9c7b0} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p10c9c7b0} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="141.129" id="filter0_d_1_1505" width="159.042" x="-5.96046e-07" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1505" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1505" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[398.948px] left-[1212.99px] top-[1791.19px] w-[497.71px]" data-name="Shape">
        <div className="absolute inset-[-6.17%_-9.59%_-17.9%_-9.6%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 593.254 494.975">
            <g filter="url(#filter0_d_1_1332)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p2a80fc80} fill="var(--fill-0, #939202)" fillOpacity="0.2" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p2a80fc80} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="494.975" id="filter0_d_1_1332" width="593.254" x="-1.19209e-07" y="-4.76837e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1332" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1332" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[211.734px] left-[1622.06px] top-[1974.24px] w-[188.95px]" data-name="Shape">
        <div className="absolute inset-[-11.98%_-25.27%_-33.67%_-25.58%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 285.047 308.396">
            <g filter="url(#filter0_d_1_1450)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p2f50fe80} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p2f50fe80} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="308.396" id="filter0_d_1_1450" width="285.047" x="-9.53674e-07" y="2.38419e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1450" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1450" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[37.375px] left-[1591.71px] top-[1951.2px] w-[24.345px]" data-name="Shape">
        <div className="absolute inset-[-65.82%_-196.16%_-189.72%_-202.49%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121.395 132.885">
            <g filter="url(#filter0_d_1_1309)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.pf2da5f0} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.pf2da5f0} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="132.885" id="filter0_d_1_1309" width="121.395" x="-1.19209e-06" y="-4.76837e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1309" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1309" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[90.785px] left-[1621.26px] top-[1944.81px] w-[112.535px]" data-name="Shape">
        <div className="absolute inset-[-27.1%_-42.62%_-78.16%_-42.84%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 208.711 186.344">
            <g filter="url(#filter0_d_1_1436)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p2b728900} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p2b728900} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="186.344" id="filter0_d_1_1436" width="208.711" x="1.54972e-06" y="-5.96046e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1436" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1436" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[224.807px] left-[1311.19px] top-[1648.03px] w-[231.382px]" data-name="Shape">
        <div className="absolute inset-[-10.94%_-21.19%_-31.6%_-20.68%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328.246 320.439">
            <g filter="url(#filter0_d_1_1340)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p1c0fe800} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1c0fe800} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="320.439" id="filter0_d_1_1340" width="328.246" x="-2.38419e-07" y="-4.76837e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1340" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1340" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[42.645px] left-[1495.97px] top-[1843.23px] w-[45.531px]" data-name="Shape">
        <div className="absolute inset-[-57.69%_-106.42%_-166.54%_-106.24%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 142.354 138.267">
            <g filter="url(#filter0_d_1_1398)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p1e066700} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1e066700} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="138.267" id="filter0_d_1_1398" width="142.354" x="4.76837e-07" y="-7.15256e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1398" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1398" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[287.38px] left-[291.73px] top-[1247.69px] w-[340.875px]" data-name="Shape">
        <div className="absolute inset-[-8.61%_-14.01%_-24.67%_-14.01%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 436.385 383.045">
            <g filter="url(#filter0_d_1_1328)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p1495f300} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path d={svgPaths.pc080600} fill="var(--stroke-0, white)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="383.045" id="filter0_d_1_1328" width="436.385" x="-1.90735e-06" y="-8.34465e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1328" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1328" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[214.952px] left-[185.5px] top-[1469.7px] w-[299.683px]" data-name="Shape">
        <div className="absolute inset-[-11.44%_-15.94%_-32.99%_-15.94%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 395.193 310.462">
            <g filter="url(#filter0_d_1_1376)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p36bcf00} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path d={svgPaths.p2fa5b400} fill="var(--stroke-0, white)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="310.462" id="filter0_d_1_1376" width="395.193" x="1.54972e-06" y="3.57628e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1376" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1376" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[187.117px] left-[874.42px] top-[1526.08px] w-[149.945px]" data-name="Shape">
        <div className="absolute inset-[-13.21%_-31.85%_-37.9%_-32.06%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 245.774 282.748">
            <g filter="url(#filter0_d_1_1320)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.pbd5ad00} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path d={svgPaths.pd05c370} fill="var(--stroke-0, white)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="282.748" id="filter0_d_1_1320" width="245.774" x="5.96046e-07" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1320" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1320" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[31.039px] left-[1157.38px] top-[1690.94px] w-[54.674px]" data-name="Shape">
        <div className="absolute inset-[-79.26%_-87.35%_-228.45%_-87.34%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150.186 126.548">
            <g filter="url(#filter0_d_1_1318)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p162b2d80} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p162b2d80} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="126.548" id="filter0_d_1_1318" width="150.186" x="-1.43051e-06" y="-3.57628e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1318" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1318" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[230.584px] left-[1189.38px] top-[2465.74px] w-[190.184px]" data-name="Shape">
        <div className="absolute inset-[-10.67%_-26.07%_-31.09%_-25.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 287.568 326.872">
            <g filter="url(#filter0_d_1_1362)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p20291900} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p20291900} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="326.872" id="filter0_d_1_1362" width="287.568" x="-1.19209e-06" y="2.38419e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1362" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1362" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[132.992px] left-[1085.43px] top-[2483.01px] w-[129.159px]" data-name="Shape">
        <div className="absolute inset-[-18.86%_-36.97%_-53.32%_-38.03%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 226.039 228.978">
            <g filter="url(#filter0_d_1_1501)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p199a1d80} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p199a1d80} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="228.978" id="filter0_d_1_1501" width="226.039" x="0" y="-3.57628e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1501" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1501" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[244.269px] left-[1722.21px] top-[1417.45px] w-[411.036px]" data-name="Shape">
        <div className="absolute inset-[-10.35%_-11.62%_-29.54%_-11.84%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 507.469 341.719">
            <g filter="url(#filter0_d_1_1316)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p19af9200} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p19af9200} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="341.719" id="filter0_d_1_1316" width="507.469" x="4.76837e-07" y="4.76837e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1316" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1316" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[972.048px] left-[2150.93px] top-[1175.81px] w-[1416.011px]" data-name="Shape">
        <div className="absolute inset-[-2.53%_-3.37%_-7.29%_-3.49%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1513.22 1067.55">
            <g filter="url(#filter0_d_1_1311)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p24c56100} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path d={svgPaths.p28423110} fill="var(--stroke-0, white)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1067.55" id="filter0_d_1_1311" width="1513.22" x="1.43051e-06" y="1.19209e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1311" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1311" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[90.69px] left-[2286.46px] top-[2357.4px] w-[49.401px]" data-name="Shape">
        <div className="absolute inset-[-27.13%_-96.67%_-78.19%_-96.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 144.911 186.199">
            <g filter="url(#filter0_d_1_1342)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p91ee00} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p91ee00} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="186.199" id="filter0_d_1_1342" width="144.911" x="-8.34465e-07" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1342" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1342" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[335.529px] left-[1409.38px] top-[2868.92px] w-[171.023px]" data-name="Shape">
        <div className="absolute inset-[-7.33%_-27.92%_-21.13%_-27.92%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 266.532 431.039">
            <g filter="url(#filter0_d_1_1491)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p16679800} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p16679800} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="431.039" id="filter0_d_1_1491" width="266.532" x="1.54972e-06" y="3.57628e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1491" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1491" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[166.355px] left-[1399.87px] top-[2126.26px] w-[281.05px]" data-name="Shape">
        <div className="absolute inset-[-14.97%_-16.99%_-42.62%_-17.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 376.968 262.165">
            <g filter="url(#filter0_d_1_1305)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p2dc2cc00} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path d={svgPaths.pe7cff00} fill="var(--stroke-0, white)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="262.165" id="filter0_d_1_1305" width="376.968" x="1.90735e-06" y="3.57628e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1305" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1305" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[208.856px] left-[1644.44px] top-[1502.98px] w-[334.551px]" data-name="Shape">
        <div className="absolute inset-[-11.78%_-14.32%_-33.95%_-14.27%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 430.204 304.365">
            <g filter="url(#filter0_d_1_1297)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.pc5eb200} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.pc5eb200} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="304.365" id="filter0_d_1_1297" width="430.204" x="1.07288e-06" y="-2.38419e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1297" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1297" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[393.269px] left-[1437.9px] top-[1580.58px] w-[460.399px]" data-name="Shape">
        <div className="absolute inset-[-6.26%_-10.37%_-18.04%_-10.37%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 555.909 488.814">
            <g filter="url(#filter0_d_1_1372)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p29c29880} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p29c29880} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="488.814" id="filter0_d_1_1372" width="555.909" x="1.3113e-06" y="2.38419e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1372" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1372" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[447.409px] left-[1496.77px] top-[1112.73px] w-[961.473px]" data-name="Shape">
        <div className="absolute inset-[-5.5%_-4.98%_-15.85%_-4.97%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1057.15 542.92">
            <g filter="url(#filter0_d_1_1470)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p129a8280} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path d={svgPaths.p1537b380} fill="var(--stroke-0, white)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="542.92" id="filter0_d_1_1470" width="1057.15" x="-5.96046e-07" y="1.19209e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1470" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1470" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[1542.767px] left-[862.5px] top-0 w-[4036.518px]" data-name="Shape">
        <div className="absolute inset-[-1.59%_-1.18%_-4.6%_-1.2%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4132.72 1638.28">
            <g filter="url(#filter0_d_1_1269)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p2d94a000} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path d={svgPaths.p211e4900} fill="var(--stroke-0, white)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1638.28" id="filter0_d_1_1269" width="4132.72" x="-1.90735e-06" y="1.19209e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1269" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1269" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[447.231px] left-[691.58px] top-[2455.65px] w-[433.444px]" data-name="Shape">
        <div className="absolute inset-[-5.5%_-11.02%_-15.86%_-11.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 529.353 542.741">
            <g filter="url(#filter0_d_1_1267)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.pb278180} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.pb278180} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="542.741" id="filter0_d_1_1267" width="529.353" x="-1.90735e-06" y="8.34465e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1267" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1267" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[49.817px] left-[1077.32px] top-[2640.05px] w-[38.047px]" data-name="Shape">
        <div className="absolute inset-[-49.67%_-126.75%_-144.18%_-123.2%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 133.144 146.39">
            <g filter="url(#filter0_d_1_1265)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p3c126b90} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p3c126b90} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="146.39" id="filter0_d_1_1265" width="133.144" x="-9.53674e-07" y="1.19209e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1265" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1265" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[404.915px] left-[1101.27px] top-[2835.16px] w-[250.071px]" data-name="Shape">
        <div className="absolute inset-[-6.26%_-19.1%_-17.56%_-19.22%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 345.884 501.398">
            <g filter="url(#filter0_d_1_1299)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p1bb13e00} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1bb13e00} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="501.398" id="filter0_d_1_1299" width="345.884" x="-1.43051e-06" y="4.76837e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1299" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1299" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[260.451px] left-[1085.9px] top-[2604.88px] w-[257.158px]" data-name="Shape">
        <div className="absolute inset-[-9.51%_-18.59%_-27.23%_-18.63%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 352.878 356.136">
            <g filter="url(#filter0_d_1_1263)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p28f94e00} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p28f94e00} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="356.136" id="filter0_d_1_1263" width="352.878" x="5.96046e-07" y="5.96046e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1263" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1263" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[179.887px] left-[1162.24px] top-[2812.96px] w-[73.976px]" data-name="Shape">
        <div className="absolute inset-[-13.68%_-64.55%_-39.42%_-64.55%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 169.485 275.396">
            <g filter="url(#filter0_d_1_1261)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p6d28680} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p6d28680} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="275.396" id="filter0_d_1_1261" width="169.485" x="-7.15256e-07" y="-5.96046e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1261" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1261" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[119.525px] left-[2002.3px] top-[1554.41px] w-[180.375px]" data-name="Shape">
        <div className="absolute inset-[-20.58%_-26.59%_-59.33%_-26.48%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 276.098 215.034">
            <g filter="url(#filter0_d_1_1462)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p26ac3180} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p26ac3180} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="215.034" id="filter0_d_1_1462" width="276.098" x="-1.19209e-06" y="3.57628e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1462" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1462" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[67.435px] left-[1418.97px] top-[1540.61px] w-[79.164px]" data-name="Shape">
        <div className="absolute inset-[-36.48%_-61.09%_-105.15%_-61.6%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 176.289 162.944">
            <g filter="url(#filter0_d_1_1257)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.pe82c4f0} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.pe82c4f0} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="162.944" id="filter0_d_1_1257" width="176.289" x="1.66893e-06" y="-7.15256e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1257" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1257" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[95.979px] left-[1455.18px] top-[1525.03px] w-[113.407px]" data-name="Shape">
        <div className="absolute inset-[-26.01%_-42.11%_-74.61%_-42.83%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 209.737 192.56">
            <g filter="url(#filter0_d_1_1485)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p3087b800} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path d={svgPaths.p5335b80} fill="var(--stroke-0, white)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="192.56" id="filter0_d_1_1485" width="209.737" x="2.38419e-07" y="-8.34465e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1485" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1485" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[239.94px] left-[1833.97px] top-[1624.6px] w-[336.566px]" data-name="Shape">
        <div className="absolute inset-[-10.25%_-14.48%_-29.55%_-14.19%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 433.053 335.449">
            <g filter="url(#filter0_d_1_1509)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p14815300} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p14815300} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="335.449" id="filter0_d_1_1509" width="433.053" x="-3.57628e-07" y="-1.19209e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1509" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1509" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[352.887px] left-[1842.99px] top-[1660.64px] w-[391.054px]" data-name="Shape">
        <div className="absolute inset-[-7.06%_-12.3%_-20.25%_-12.79%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 489.146 449.253">
            <g filter="url(#filter0_d_1_1255)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.pa3a7880} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.pa3a7880} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="449.253" id="filter0_d_1_1255" width="489.146" x="0" y="5.96046e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1255" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1255" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[383.039px] left-[2630.09px] top-[2454.04px] w-[1083.644px]" data-name="Shape">
        <div className="absolute inset-[-6.42%_-4.41%_-18.51%_-4.41%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1179.15 478.551">
            <g filter="url(#filter0_d_1_1238)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p34afd800} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path d={svgPaths.p3da4ae00} fill="var(--stroke-0, white)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="478.551" id="filter0_d_1_1238" width="1179.15" x="1.43051e-06" y="2.38419e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1238" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1238" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[296.45px] left-[564.86px] top-[1371.34px] w-[269.727px]" data-name="Shape">
        <div className="absolute inset-[-8.3%_-17.7%_-23.92%_-17.7%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 365.236 391.959">
            <g filter="url(#filter0_d_1_1233)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p2f6ddc00} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path d={svgPaths.p1f83f700} fill="var(--stroke-0, white)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="391.959" id="filter0_d_1_1233" width="365.236" x="1.07288e-06" y="3.57628e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1233" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1233" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[37.915px] left-[834.96px] top-[1480.31px] w-[28.583px]" data-name="Shape">
        <div className="absolute inset-[-66.9%_-171.01%_-189%_-167.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 125.389 134.94">
            <g filter="url(#filter0_d_1_1231)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p381f080} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p381f080} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="134.94" id="filter0_d_1_1231" width="125.389" x="-1.19209e-07" y="-7.15256e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1231" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1231" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[117.865px] left-[841.99px] top-[1395.97px] w-[94.794px]" data-name="Shape">
        <div className="absolute inset-[-20.94%_-50.38%_-60.25%_-50.51%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 190.428 213.559">
            <g filter="url(#filter0_d_1_1350)" id="Shape">
              <path clipRule="evenodd" d={svgPaths.p360392f0} fill="var(--fill-0, #CEE4D9)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p360392f0} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="213.559" id="filter0_d_1_1350" width="190.428" x="0" y="-9.53674e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1350" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1350" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[42.625px] left-[861.51px] top-[1471.21px] w-[54.677px]" data-name="Shape">
        <div className="absolute inset-[-57.71%_-88.23%_-166.59%_-87.34%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150.671 138.235">
            <g filter="url(#filter0_d_1_1229)" id="Shape">
              <path d={svgPaths.p31920100} stroke="var(--stroke-0, white)" strokeWidth="2.89423" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="138.235" id="filter0_d_1_1229" width="150.671" x="4.76837e-07" y="3.57628e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="23.1538" />
                <feGaussianBlur stdDeviation="23.1538" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1229" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1229" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold h-[21.295px] justify-center leading-[0] left-[1369.1px] text-[#798217] text-[28.394px] top-[1991.1px] w-[171.248px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[12.319px]" dir="auto">
          Saudi Arabia
        </p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold h-[21.295px] justify-center leading-[0] left-[1050.56px] text-[#798217] text-[28.394px] top-[1928.1px] w-[79.857px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[12.319px]" dir="auto">
          Egypt
        </p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#fafafa] h-[750px] left-1/2 overflow-clip top-[186px] w-[1440px]">
      <Frame3 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute h-[936px] left-0 top-[2426px] w-[1440px]">
      <Container300 />
      <Frame4 />
    </div>
  );
}

function Background11() {
  return (
    <div className="bg-[#fcc82d] content-stretch flex flex-col items-start justify-center relative shrink-0 size-[6px]" data-name="Background">
      <div className="bg-[rgba(255,255,255,0)] shadow-[0px_0px_0px_4px_rgba(255,130,0,0.18)] shrink-0 size-[6px]" data-name="Overlay+Shadow" />
    </div>
  );
}

function Container304() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <Background11 />
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fcc82d] text-[11px] tracking-[1.76px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Institutional access</p>
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[72px] text-white tracking-[-1.8px] w-full">
        <p>
          <span className="leading-[73.44px]">{`See what the `}</span>
          <span className="font-['Newsreader:Italic',sans-serif] font-normal italic leading-[73.44px] text-[#fcc82d]">desks</span>
          <span className="leading-[73.44px]">{` see.`}</span>
        </p>
      </div>
    </div>
  );
}

function Container305() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[603.56201171875px] pt-[6px] relative shrink-0 w-[603.56px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e2] text-[16.2px] whitespace-nowrap">
        <p className="leading-[27px] mb-0">Access to the terminal is by request. We onboard new buy-side firms on a</p>
        <p className="leading-[27px]">rolling basis.</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#fcc82d] content-stretch flex items-center justify-center px-[23px] py-[13px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1b] text-[13px] text-center tracking-[0.13px] whitespace-nowrap">
        <p className="leading-[normal]">Request access →</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#efefef] content-stretch flex items-center justify-center px-[23px] py-[13px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(227,227,226,0.26)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black text-center tracking-[0.13px] whitespace-nowrap">
        <p className="leading-[normal]">Download sample report</p>
      </div>
    </div>
  );
}

function Container306() {
  return (
    <div className="content-stretch flex gap-[14px] items-start pt-[22px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container303() {
  return (
    <div className="max-w-[780px] relative shrink-0 w-[780px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[18px] items-start max-w-[inherit] relative size-full">
        <Container304 />
        <Heading8 />
        <Container305 />
        <Container306 />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="-translate-x-1/2 absolute left-1/2 max-w-[1360px] rounded-[24px] top-[5881px] w-[1328px]" style={{ backgroundImage: "linear-gradient(149.901deg, rgb(18, 71, 52) 0%, rgb(11, 34, 24) 100%)" }} data-name="Frame">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] overflow-clip px-[81px] py-[101px] relative rounded-[inherit] size-full">
        <div className="absolute right-[-149px] rounded-[250px] size-[500px] top-[-99px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 500 500\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(35.355 0 0 35.355 250 250)\\'><stop stop-color=\\'rgba(255,130,0,0.22)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(255,130,0,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" }} data-name="Gradient" />
        <Container303 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(227,227,226,0.26)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Container307() {
  return (
    <div className="h-[88px] max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid max-w-[inherit] size-full" />
      </div>
    </div>
  );
}

function HorizontalBorder27() {
  return (
    <div className="h-[41px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div className="content-stretch flex flex-col items-start px-[80px] relative size-full">
        <Container307 />
      </div>
    </div>
  );
}

function LinkEfgHermeslogoPng3() {
  return (
    <div className="absolute h-[26.241px] left-[93.55px] top-0 w-[157.445px]" data-name="Link → EFGHermeslogo.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[166.52%] left-[-59.43%] max-w-none top-0 w-[159.42%]" src={imgLinkEfgHermeslogoPng1} />
      </div>
    </div>
  );
}

function LinkEfgHermeslogoPng2() {
  return (
    <div className="h-[28.523px] overflow-clip relative shrink-0 w-[251px]" data-name="Link → EFGHermeslogo.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[153.18%] left-[-0.01%] max-w-none top-[0.01%] w-[100.01%]" src={imgLinkEfgHermeslogoPng} />
      </div>
      <LinkEfgHermeslogoPng3 />
    </div>
  );
}

function Container310() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[384px] relative shrink-0 w-[384px]" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22.75px] mb-0">An EFG Holding Company. The leading investment bank in</p>
        <p className="leading-[22.75px] mb-0">the Middle East and North Africa, providing research,</p>
        <p className="leading-[22.75px]">brokerage, asset management, and private equity services.</p>
      </div>
    </div>
  );
}

function Container309() {
  return (
    <div className="col-[1/span_2] content-stretch flex flex-col gap-[16px] items-start justify-self-stretch pb-[92.25px] relative row-1 self-start shrink-0" data-name="Container">
      <LinkEfgHermeslogoPng2 />
      <Container310 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="capitalize flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-white tracking-[2.2px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16.5px]">PLATFORM</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Research Library</p>
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px pt-[2.75px] relative shrink-0 w-full" data-name="Item">
      <Link4 />
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Our Coverage</p>
      </div>
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px pt-[2.75px] relative shrink-0 w-full" data-name="Item">
      <Link5 />
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Sectors</p>
      </div>
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px pt-[2.75px] relative shrink-0 w-full" data-name="Item">
      <Link6 />
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Macro-Strategy</p>
      </div>
    </div>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px pt-[2.75px] relative shrink-0 w-full" data-name="Item">
      <Link7 />
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">My EFG Dashboard</p>
      </div>
    </div>
  );
}

function Item9() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px pt-[2.75px] relative shrink-0 w-full" data-name="Item">
      <Link8 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <Item5 />
      <Item6 />
      <Item7 />
      <Item8 />
      <Item9 />
    </div>
  );
}

function Container311() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[20px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Heading9 />
      <List1 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="capitalize flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-white tracking-[2.2px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16.5px]">COMPANY</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">About EFG Hermes</p>
      </div>
    </div>
  );
}

function Item10() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px pt-[2.75px] relative shrink-0 w-full" data-name="Item">
      <Link9 />
    </div>
  );
}

function Link10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Our Analysts</p>
      </div>
    </div>
  );
}

function Item11() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px pt-[2.75px] relative shrink-0 w-full" data-name="Item">
      <Link10 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="SVG">
          <path d={svgPaths.p33503b00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.833333" />
          <path d={svgPaths.p19f3da00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.833333" />
        </g>
      </svg>
    </div>
  );
}

function Link11() {
  return (
    <div className="content-stretch flex gap-[4.01px] items-center relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">EFG Holding</p>
      </div>
      <Svg2 />
    </div>
  );
}

function Item12() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px pt-[2.75px] relative shrink-0 w-full" data-name="Item">
      <Link11 />
    </div>
  );
}

function Link12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Careers</p>
      </div>
    </div>
  );
}

function Item13() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px pt-[2.75px] relative shrink-0 w-full" data-name="Item">
      <Link12 />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <Item10 />
      <Item11 />
      <Item12 />
      <Item13 />
    </div>
  );
}

function Container312() {
  return (
    <div className="col-4 content-stretch flex flex-col gap-[20px] items-start justify-self-stretch pb-[36px] relative row-1 self-start shrink-0" data-name="Container">
      <Heading10 />
      <List2 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="capitalize flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-white tracking-[2.2px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16.5px]">LEGAL</p>
      </div>
    </div>
  );
}

function Link13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">{`Terms & Conditions`}</p>
      </div>
    </div>
  );
}

function Item14() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px pt-[2.75px] relative shrink-0 w-full" data-name="Item">
      <Link13 />
    </div>
  );
}

function Link14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Privacy Policy</p>
      </div>
    </div>
  );
}

function Item15() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px pt-[2.75px] relative shrink-0 w-full" data-name="Item">
      <Link14 />
    </div>
  );
}

function Link15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Disclaimer</p>
      </div>
    </div>
  );
}

function Item16() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px pt-[2.75px] relative shrink-0 w-full" data-name="Item">
      <Link15 />
    </div>
  );
}

function Link16() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Cookie Preferences</p>
      </div>
    </div>
  );
}

function Item17() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px pt-[2.75px] relative shrink-0 w-full" data-name="Item">
      <Link16 />
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <Item14 />
      <Item15 />
      <Item16 />
      <Item17 />
    </div>
  );
}

function Container313() {
  return (
    <div className="col-5 content-stretch flex flex-col gap-[20px] items-start justify-self-stretch pb-[36px] relative row-1 self-start shrink-0" data-name="Container">
      <Heading11 />
      <List3 />
    </div>
  );
}

function Container308() {
  return (
    <div className="gap-x-[40px] gap-y-[40px] grid grid-cols-[repeat(5,minmax(0,1fr))] grid-rows-[_204.50px] relative shrink-0 w-[1216px]" data-name="Container">
      <Container309 />
      <Container311 />
      <Container312 />
      <Container313 />
    </div>
  );
}

function Container315() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.3)] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[16px]">Copyright © 2026 EFG Hermes Holding SAE and/or its affiliates. All rights reserved.</p>
      </div>
    </div>
  );
}

function Link17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.3)] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[16px]">LinkedIn</p>
      </div>
    </div>
  );
}

function Link18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.3)] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[16px]">Twitter</p>
      </div>
    </div>
  );
}

function Container316() {
  return (
    <div className="content-stretch flex gap-[24.01px] items-center relative shrink-0" data-name="Container">
      <Link17 />
      <Link18 />
    </div>
  );
}

function Container314() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] px-[32px] py-[24px] relative size-full">
          <Container315 />
          <Container316 />
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder28() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pt-px px-[80px] relative size-full">
        <Container314 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#144834] content-stretch flex flex-col gap-[64px] items-center left-1/2 top-[6445px] w-[1440px]" data-name="Footer">
      <HorizontalBorder27 />
      <Container308 />
      <HorizontalBorder28 />
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white relative size-full" data-name="Home">
      <Frame5 />
      <Frame9 />
      <Frame11 />
      <Frame12 />
      <Frame16 />
      <Frame14 />
      <Frame13 />
      <Frame1 />
      <Footer />
    </div>
  );
}