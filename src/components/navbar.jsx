import imgShLogo1 from "public/sh_logo.png"
function Actions() {
  return (
    <div className="content-stretch flex gap-[var(--gap-md)] items-center justify-center relative shrink-0" data-name="Actions">
      <div className="bg-[var(--color-accent)] relative rounded-[var(--radius-md)] shrink-0" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[var(--padding-badge-x)] py-[6px] relative size-full">
            <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[var(--line-height-body)] not-italic relative shrink-0 text-[#f9fafb] text-[18px] whitespace-nowrap">Download CV</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[625px]">
      <div className="relative shrink-0" data-name="Link">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[var(--line-height-body)] not-italic relative shrink-0 text-[var(--color-nav-labels)] text-[18px] whitespace-nowrap">About</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Link">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[var(--line-height-body)] not-italic relative shrink-0 text-[var(--color-nav-labels)] text-[18px] whitespace-nowrap">Education</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Link">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[var(--line-height-body)] not-italic relative shrink-0 text-[var(--color-nav-labels)] text-[18px] whitespace-nowrap">Projects</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Link">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[var(--line-height-body)] not-italic relative shrink-0 text-[var(--color-nav-labels)] text-[18px] whitespace-nowrap">Experience</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Link">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[var(--line-height-body)] not-italic relative shrink-0 text-[var(--color-nav-labels)] text-[18px] whitespace-nowrap">Contact</p>
          </div>
        </div>
      </div>
      <Actions />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between px-[var(--gap-xl)] relative shrink-0 w-[1162px]" data-name="Container">
      <div className="h-[36px] relative shrink-0 w-[134px]" data-name="sh_logo 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgShLogo1} />
      </div>
      <Frame />
    </div>
  );
}

export default function NavBar() {
  return (
    <nav className="relative size-full" data-name="nav bar">
      <div className="content-stretch flex flex-col items-start px-[var(--gap-lg)] py-[var(--padding-card-sm)] relative size-full">
        <Container />
      </div>
      <div aria-hidden className="absolute border-[var(--color-border)] border-b-2 border-solid inset-[0_0_-1px_0] pointer-events-none" />
    </nav>
  );
}