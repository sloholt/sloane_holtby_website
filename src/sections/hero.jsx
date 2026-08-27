import Badge from '../components/badge';
import PicContainer from '../components/piccontainer';

const LINKS = {
  viewProjects: '#projects',
  github:       'https://github.com/sloholt',
  contact:      '#contact',
  linkedin:     'https://www.linkedin.com/in/sloane-holtby-58b76422a/',
};

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__text">
          <Badge>Graduating May 2027 · open to full-time roles &amp; relocation</Badge>
          <h1 className="text-display">HEADING</h1>
          <p className="text-body text-secondary">Paragraph</p>
          <div className="hero__buttons">
            <a href={LINKS.viewProjects} className="btn btn-primary">View Projects &rarr;</a>
            <a href={LINKS.github}       className="btn btn-secondary" target="_blank" rel="noreferrer">GitHub</a>
            <a href={LINKS.contact}      className="btn btn-secondary">Contact</a>
            <a href={LINKS.linkedin}     className="btn btn-secondary" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className="hero__image">
          <PicContainer alt="Sloane Holtby" />
        </div>
      </div>
    </section>
  );
}
