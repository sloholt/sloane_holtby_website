import Badge from "../components/Badge";
import Button from "../components/Button";
import PicContainer from "../components/PicContainer";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <Badge>Available for work</Badge>
        <h1 className="hero__heading">Your Name Here</h1>
        <p className="hero__paragraph">
          Short intro line about who you are and what you build.
        </p>
        <div className="hero__actions">
          <Button variant="primary">Contact Me</Button>
          <Button variant="secondary">GitHub</Button>
        </div>
      </div>
      <PicContainer src="/images/headshot.jpg" alt="Your name" />
    </section>
  );
}