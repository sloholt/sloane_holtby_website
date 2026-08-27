const PROJECT = {
  title:       'Salary Dispersion and NHL Team Performance',
  description: 'PARAGRAPH',
  stats: [
    { label: 'Seasons modeled', value: '2015-2024' },
    { label: 'Deliverables',    value: 'Paper + App' },
  ],
  tags: ['Python', 'R', 'Panel GMM', 'Poisson GLM'],
  links: [
    { label: 'Live Dashboard', href: 'https://nhl-salary-inequality-analysis-dash.onrender.com/', icon: '/icons/fi_external-link.png' },
    { label: 'Paper',          href: 'https://sloholt.github.io/NHL-Salary-Inequality-Analysis/', icon: '/icons/fi_file-text.png' },
    { label: 'Code',           href: 'https://github.com/sloholt/NHL-Salary-Inequality-Analysis', icon: '/icons/fi_github.png' },
  ],
};

export default function FeaturedProject() {
  return (
    <section className="featured-project">
      <div className="featured-project__inner">
        <p className="featured-project__label text-label text-secondary">Featured Project</p>
        <div className="featured-project__card">

          <div className="featured-project__top">
            <h2 className="featured-project__title">{PROJECT.title}</h2>
            <div className="featured-project__stats">
              {PROJECT.stats.map(stat => (
                <div key={stat.label} className="featured-project__stat">
                  <span className="featured-project__stat-label">{stat.label}</span>
                  <span className="featured-project__stat-value">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-body text-secondary">{PROJECT.description}</p>

          <div className="featured-project__footer">
            <div className="featured-project__tags">
              {PROJECT.tags.map(tag => (
                <span key={tag} className="featured-project__tag">{tag}</span>
              ))}
            </div>
            <div className="featured-project__links">
              {PROJECT.links.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="featured-project__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={link.icon} alt="" className="featured-project__link-icon" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
