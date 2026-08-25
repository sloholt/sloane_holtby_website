export default function PicContainer({ src, alt }) {
  return (
    <div className="pic-container">
      <div className="pic-container__back" />
      <img src={src} alt={alt} className="pic-container__front" />
    </div>
  );
}