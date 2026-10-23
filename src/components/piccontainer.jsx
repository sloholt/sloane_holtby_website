export default function PicContainer({ src = '/images/headshot.jpg', alt = '', width = 226, height = 264, offset = 24 }) {
  const size = { width, height };
  return (
    <div className="pic-container" style={size}>
      <div className="pic-container__back" style={{ ...size, top: offset, left: offset }} />
      <img src={src} alt={alt} className="pic-container__front" style={size} />
    </div>
  );
}
