const SKILLS = [
  {
    title:       'Data and Analytics',
    description: 'Statistical Modeling, Machine Learning, Data Visualization',
  },
  {
    title:       'Software Engineering',
    description: 'Full-Stack Development, Databases, AI/LLM Systems',
  },
  {
    title:       'Business and Strategy',
    description: 'Financial Modeling, Decision Analytics, Valuation',
  },
];

export default function Skills() {
  return (
    <section className="skills">
      <div className="skills__inner">
        <p className="skills__label text-body-small text-secondary">Skills</p>
        <div className="skills__grid">
          {SKILLS.map(skill => (
            <div key={skill.title} className="skills__card">
              <h3 className="skills__card-title text-subheading">{skill.title}</h3>
              <p className="skills__card-desc text-body-small text-secondary">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
