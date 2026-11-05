import { Link } from 'react-router-dom';
import Badge from '../components/badge';
import PicContainer from '../components/piccontainer';

const LINKS = {
  viewProjects: '/projects',
  github:       'https://github.com/sloholt',
  contact:      'mailto:sloaneholtby@gmail.com',
  linkedin:     'https://www.linkedin.com/in/sloane-holtby-58b76422a/',
};

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__text">
          <Badge>Graduating May 2027 <span className="badge__separator">·</span> open to full-time roles &amp; relocation</Badge>
          <h1 className="text-display">Bridging technical thinking and business impact.</h1>
          <p className="text-body text-secondary">I'm Sloane, a Master's student in Business Analytics at UT Austin with a background in mathematical statistics and software engineering from McGill University. I take a multidisciplinary approach to problem-solving, combining quantitative analysis, technology, and business strategy to develop practical solutions <br /> to complex challenges.</p>
          <div className="hero__buttons">
            <Link to={LINKS.viewProjects} className="btn btn-primary">View Projects &rarr;</Link>
            <a href={LINKS.github}       className="btn btn-secondary" target="_blank" rel="noreferrer">GitHub</a>
            <a href={LINKS.contact}      className="btn btn-secondary">Contact</a>
            <a href={LINKS.linkedin}     className="btn btn-secondary" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className="hero__image">
          <PicContainer
            src="/images/headshot@2x.jpg"
            srcSet="/images/headshot@1x.jpg 1x, /images/headshot@2x.jpg 2x, /images/headshot@3x.jpg 3x"
            alt="Sloane Holtby"
          />
        </div>
      </div>
    </section>
  );
}
