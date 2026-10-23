import Badge from '../components/badge';
import PicContainer from '../components/piccontainer';
import '../styles/pages/education.css';

const UT = {
  years:       '2026-2027',
  school:      'The University of Texas at Austin',
  college:     'McCombs School of Business',
  degree:      'M.S. Business Analytics',
  description: 'Advanced study in machine learning, optimization, unstructured analytics, and data-driven decision making.',
  courses: [
    'Deep Learning',
    'Optimization',
    'Unstructured Analytics',
    'Information Management',
    'Quantitative Finance',
    'Advanced Machine Learning',
  ],
  stats: [
    { label: 'Graduation', value: 'May 2027',                     icon: '/icons/calendar.svg' },
    { label: 'Focus',      value: 'Machine Learning + Analytics', icon: '/icons/bar-chart.svg', small: true },
  ],
};

const MCGILL = {
  years:       '2021-2026',
  school:      'McGill University',
  location:    'Montreal, Quebec',
  degree:      'B.A',
  programs:    'Major in Statistics, Major in Software Engineering, Minor in Economics',
  description: 'A multidisciplinary foundation that taught me how to model uncertainty, develop systems, and understand how markets and incentives shape the world.',
  subjects: [
    {
      title:       'Statistics',
      icon:        '/icons/chart-column.svg',
      description: 'Modeling uncertainty, identifying patterns in data, and drawing reliable conclusions through statistical inference.',
      courses:     ['Regression', 'Probability', 'GLMs', 'Inference', 'Multivariate Statistics'],
    },
    {
      title:       'Software Engineering',
      icon:        '/icons/square-terminal.svg',
      description: 'Designing and building software systems, with a focus on algorithms, data management, and maintainable code.',
      courses:     ['Algorithms', 'Databases', 'NLP', 'Software Design', 'Data Structures'],
    },
    {
      title:       'Economics',
      icon:        '/icons/circle-dollar-sign.svg',
      description: 'Understanding how markets, incentives, and resource allocation shape decisions by individuals, businesses, and governments.',
      courses:     ['Econometrics', 'Microeconomics', 'Macroeconomics', 'Financial Markets'],
    },
  ],
};

export default function Education() {
  return (
    <section className="education">
      <div className="education__inner">

        <div className="education__intro">
          <div className="education__intro-text">
            <Badge>EDUCATION</Badge>
            <h1 className="education__heading text-display">Statistics, Software Engineering &amp; Business Analytics</h1>
            <p className="education__lead text-body">
              My education has given me a multidisciplinary foundation for understanding systems, building
              models, working with data, and translating technical results into business decisions.
            </p>
          </div>
          <div className="education__photo">
            <PicContainer src="/images/ut_campus.jpg" alt="UT Austin campus" width={252} height={206} />
          </div>
        </div>

        <article className="education__card education__card--ut">
          <div className="education__main">
            <p className="education__years text-label">{UT.years}</p>
            <div className="education__title-row">
              <h2 className="education__school text-display">{UT.school}</h2>
              <span className="education__current">Current</span>
            </div>
            <p className="education__meta text-caption">{UT.college}</p>
            <h3 className="education__degree text-subheading">{UT.degree}</h3>
            <p className="education__desc text-body">{UT.description}</p>
            <div className="education__pills">
              {UT.courses.map(course => (
                <span key={course} className="education__pill text-body-small">{course}</span>
              ))}
            </div>
          </div>

          <div className="education__stats">
            {UT.stats.map(stat => (
              <div key={stat.label} className="education__stat">
                <img src={stat.icon} alt="" className="education__stat-icon" />
                <span className="education__stat-label">{stat.label}</span>
                <span className={`education__stat-value${stat.small ? ' education__stat-value--sm' : ''}`}>{stat.value}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="education__card education__card--mcgill">
          <div className="education__mcgill-top">
            <div className="education__main">
              <p className="education__years text-label">{MCGILL.years}</p>
              <h2 className="education__school text-display">{MCGILL.school}</h2>
              <p className="education__meta text-caption">{MCGILL.location}</p>
              <h3 className="education__degree text-subheading">{MCGILL.degree}</h3>
              <p className="education__desc text-body">{MCGILL.programs}</p>
              <p className="education__desc text-body">{MCGILL.description}</p>
            </div>
            <div className="education__photo">
              <PicContainer src="/images/mcgill_grad.jpg" alt="Sloane at McGill graduation" width={140} height={135} />
            </div>
          </div>

          <div className="education__subjects">
            {MCGILL.subjects.map(subject => (
              <div key={subject.title} className="education__subject">
                <div className="education__subject-header">
                  <img src={subject.icon} alt="" className="education__subject-icon" />
                  <h4 className="education__subject-title text-heading">{subject.title}</h4>
                </div>
                <p className="education__subject-desc text-caption">{subject.description}</p>
                <div className="education__pills education__pills--sm">
                  {subject.courses.map(course => (
                    <span key={course} className="education__pill education__pill--sm text-caption">{course}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>

      </div>
    </section>
  );
}
