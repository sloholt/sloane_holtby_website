import Badge from '../components/badge';
import '../styles/pages/experience.css';

const EXPERIENCE = [
  {
    year:     '2025',
    duration: '4 months',
    category: 'Research',
    dates:    'May – August 2025',
    role:     'Summer Research Student',
    org:      'McGill University',
    team:     'Dept. of Mathematics & Statistics',
    bullets: [
      'Modeled the non-linear link between salary dispersion and NHL performance using Poisson GLM and dynamic-panel GMM; working through the complete data science life cycle.',
      'Built an interactive web dashboard and a reproducible pipeline in Python to explore team-year salary structures under the salary cap and translate my research into actionable insights.',
      'Supervised by Prof. Steele, Dept. of Mathematics & Statistics; currently expanding and editing for publishing.',
    ],
    tags: ['Regression Models', 'Econometric Models', 'R', 'Data Visualization', 'Python', 'Optimization'],
    links: [
      { label: 'Dashboard', href: 'https://nhl-salary-inequality-analysis-dash.onrender.com/' },
      { label: 'Paper',     href: 'https://sloholt.github.io/NHL-Salary-Inequality-Analysis/' },
    ],
  },
  {
    year:     '2024',
    duration: '4 months',
    category: 'Software',
    dates:    'May – August 2024',
    role:     'Full Stack Developer',
    org:      'LodgeLink',
    team:     'Product Engineering',
    bullets: [
      'Specialized in Developer Experience, enhancing productivity, streamlining workflows and measuring outcomes.',
      'Researched and implemented GitHub Copilot and SonarCloud to optimize developer workflow and code quality.',
      'Built and led workshops to teach developers on how to effectively use Copilot in their projects.',
      'Conducted data-driven analysis to reduce bottlenecks, improve system performance, and ensure maintainable codebases.',
      'Built automation pipelines using Python and C to streamline developer tasks.',
      'Developed front-end and back-end systems using TypeScript and SQL.',
      'Presented the business case for investing in developer experience to non-technical management, translating technical improvements into benefits for productivity, code quality, and delivery speed.',
    ],
    tags: ['React', 'Node.js', 'GitHub Copilot', 'SonarCloud', 'DevOps', 'AWS'],
  },
  {
    year:     '2023',
    duration: '3 months',
    category: 'Hospitality',
    dates:    'June – August 2023',
    role:     'Suite Attendant',
    org:      'Calgary Stampede',
    team:     'Infield Suites',
    bullets: [
      'Delivered exceptional service to high-profile guests in premium suites, ensuring seamless event experiences.',
      'Organized and managed detailed suite setup including inventory management.',
      'Acted as primary point of contact for client requests during high-volume events.',
    ],
    tags: ['Client Relations', 'Event Operations', 'Team Coordination', 'Organization'],
  },
];

const EXTRACURRICULARS = [
  {
    name: 'CodeJam McGill University',
    role: 'President',
    logo: '/images/codejam.png',
    bullets: [
      'Spearheaded the annual CodeJam Hackathon, hosting over 400 participants and sponsors.',
      'Led a 20-person team managing Sponsorship, Finance, Web Dev, Logistics, Marketing, and Participant selection.',
      'Built partnerships with students, sponsors and industry leaders to create a premier networking experience.',
    ],
  },
  {
    name: 'McGill Women in Computer Science',
    role: 'VP External',
    logo: '/images/mcwics.png',
    bullets: [
      'Served as liaison between McWiCS and other McGill clubs, representing McWiCS at Industry events.',
      'Coordinated joint events to foster inter-club collaborations and industry partnerships.',
      'McGill Representative for Pan-Canada WiCS events and initiatives.',
    ],
  },
  {
    name: 'Gordie Howe Cares Pro-Am',
    role: 'Volunteer',
    logo: '/images/ghc.png',
    bullets: [
      'Supported the Event Coordinator for the NHL Alumni Pro-Am tournament weekend: staging materials and preparing spaces.',
      'Optimised Draft Night flow by assisting check-in, jersey distribution, and maintaining the live draft order.',
    ],
  },
];

export default function Experience() {
  return (
    <section className="experience">
      <div className="experience__inner">

        <header className="experience__header">
          <Badge>EXPERIENCE</Badge>
          <h1 className="experience__heading">Experience in Practice</h1>
          <p className="experience__lead text-secondary">
            From building software to analyzing team performance, my experiences are shaped by
            problem-solving, collaboration, and working with people.
          </p>
        </header>

        <hr className="experience__rule" />

        <ol className="experience__timeline">
          {EXPERIENCE.map(job => (
            <li key={job.year} className="experience__row">
              <div className="experience__when">
                <span className="experience__year">{job.year}</span>
                <span className="experience__duration text-body-small text-secondary">{job.duration}</span>
                <span className="experience__dot" />
              </div>

              <article className="experience__card">
                <div className="experience__card-top">
                  <span className="experience__category text-caption">{job.category}</span>
                  <span className="experience__dates text-body-small text-secondary">{job.dates}</span>
                </div>
                <h2 className="experience__role text-heading">{job.role}</h2>
                <p className="experience__org text-secondary">
                  {job.org}<span className="experience__org-sep">·</span>{job.team}
                </p>
                <span className="experience__accent" />
                <ul className="experience__bullets text-body text-secondary">
                  {job.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}
                </ul>
                <div className="experience__tags">
                  {job.tags.map(tag => (
                    <span key={tag} className="experience__tag text-label">{tag}</span>
                  ))}
                  {job.links?.map(link => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="experience__link text-label"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label}
                      <img src="/icons/arrow-up-right-teal.svg" alt="" className="experience__link-icon" />
                    </a>
                  ))}
                </div>
              </article>
            </li>
          ))}
        </ol>

        <hr className="experience__rule" />

        <header className="experience__header">
          <Badge>EXTRACURRICULARS</Badge>
          <h2 className="experience__subheading">Leadership &amp; Volunteering</h2>
          <p className="experience__lead text-secondary">Selected extracurricular leadership roles and volunteering.</p>
        </header>

        <div className="experience__extras">
          {EXTRACURRICULARS.map(item => (
            <article key={item.name} className="experience__extra">
              <img src={item.logo} alt={`${item.name} logo`} className="experience__extra-logo" />
              <h3 className="experience__extra-name">{item.name}</h3>
              <p className="experience__extra-role text-body-small">{item.role}</p>
              <hr className="experience__extra-rule" />
              <ul className="experience__bullets experience__bullets--sm text-body-small text-secondary">
                {item.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}
              </ul>
            </article>
          ))}
        </div>

        <div className="experience__end" aria-hidden="true">
          <img src="/icons/divider-taper.svg" alt="" className="experience__end-line" />
          <img src="/sh_logo_grey_hd.png" alt="" className="experience__end-logo" />
          <img src="/icons/divider-taper.svg" alt="" className="experience__end-line experience__end-line--right" />
        </div>

      </div>
    </section>
  );
}
