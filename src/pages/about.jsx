import '../styles/pages/about.css';

export default function About() {
  return (
    <section className="about">
      <div className="about__inner">

        <div className="about__image">
          <img src="/vball-pic-container.png" alt="Sloane playing volleyball" className="about__photo" />
        </div>

        <div className="about__content">
          <h1 className="text-display">A little bit about me:</h1>
          <div className="about__body text-body">
            <p>PARAGRAPH</p>
          </div>
        </div>

      </div>
    </section>
  );
}
