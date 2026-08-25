import SkillTag from "../components/SkillTag";
import Button from "../components/Button";

const skills = ["Business Strategy", "Software Engineering", "Data Analytics"];

export default function Skills() {
  return (
    <section className="skills">
      <h2 className="skills__heading">Skills</h2>
      <div className="skills__group">
        {skills.map((s) => (
          <SkillTag key={s} label={s} />
        ))}
      </div>
      <Button variant="primary">View Projects</Button>
    </section>
  );
}
jsx