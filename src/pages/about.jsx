import { Link } from 'react-router-dom';
import '../styles/pages/about.css';

const FACTS = [
  { label: 'Now',           value: 'MS Business Analytics, UT Austin' },
  { label: 'Before',        value: 'BSc Math Stats & Software Eng, McGill' },
  { label: 'Based in',      value: 'Austin, TX' },
  { label: 'Interests',     value: 'Finance, energy & sports' },
  { label: 'Off the clock', value: 'Volleyball, Golf, Wake Sports' },
];

export default function About() {
  return (
    <section className="about">
      <div className="about__inner">

        <div className="about__aside">
          <div className="about__pic">
            <div className="about__pic-back" />
            <img
              src="/images/about-vball@2x.jpg"
              srcSet="/images/about-vball@1x.jpg 1x, /images/about-vball@2x.jpg 2x, /images/about-vball@3x.jpg 3x"
              alt="Sloane playing volleyball"
              className="about__pic-front"
            />
          </div>

          <div className="about__glance">
            <p className="about__glance-title">At a glance</p>
            <dl className="about__facts">
              {FACTS.map(fact => (
                <div key={fact.label} className="about__fact">
                  <dt className="about__fact-label">{fact.label}</dt>
                  <dd className="about__fact-value">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="about__content">
          <p className="about__eyebrow">
            <img src="/icons/section-dot.svg" alt="" width="7" height="7" />
            About me
          </p>
          <h1 className="about__heading">A little bit about me</h1>

          <div className="about__body">
            <p className="about__lead">
              My background has always been a mix of different interests, from mathematics and technology to business and sports. After completing my undergraduate studies in Mathematical Statistics and Software Engineering at McGill University, I moved to Austin to pursue a Master's in Business Analytics at the University of Texas, where I'm continuing to explore how technical thinking can inform real-world business decisions.
            </p>
            <p>
              Sports have also played a defining role in my life. Balancing the demands of varsity volleyball with a double major in STEM taught me how to manage competing priorities, adapt quickly, and perform under pressure. Beyond the court, the experience reinforced the importance of teamwork, resilience, and accountability, qualities that continue to shape how I approach challenges, collaborate with others, and lead teams.
            </p>
            <p>
              I'm naturally curious and like working across disciplines. I enjoy learning new things and value collaborating with people who bring different perspectives to the table. I'm especially drawn to the intersection of data, technology, and business in industries like finance, energy, and sports, but what motivates me most is tackling complex challenges, building practical solutions, and bridging the gap between technical thinking and real-world decision-making.
            </p>
          </div>

          <div className="about__ctas">
            <Link to="/projects" className="about__cta about__cta--primary">See my projects&nbsp;&nbsp;→</Link>
            <Link to="/contact" className="about__cta">Get in touch</Link>
          </div>
        </div>

      </div>
    </section>
  );
}
