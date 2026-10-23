export default function EndDivider() {
  return (
    <div className="end-divider" aria-hidden="true">
      <div className="end-divider__inner">
        <img src="/icons/divider-taper.svg" alt="" className="end-divider__line" />
        <img src="/sh_logo_grey_hd.png" alt="" className="end-divider__logo" />
        <img src="/icons/divider-taper.svg" alt="" className="end-divider__line end-divider__line--right" />
      </div>
    </div>
  );
}
