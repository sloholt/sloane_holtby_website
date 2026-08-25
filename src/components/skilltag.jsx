export default function SkillTag({ icon: Icon, label }) {
  return (
    <div className="skill-tag">
      {Icon && <Icon className="skill-tag__icon" />}
      <span>{label}</span>
    </div>
  );
}