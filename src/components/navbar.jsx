import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <div className="navbar__logo">
          <Link to="/"><img alt="Logo" src="/sh_logo.png" /></Link>
        </div>

        <div className="navbar__links">
          <Link to="/about"    className="navbar__link">About</Link>
          <a href="#education" className="navbar__link">Education</a>
          <a href="#projects"  className="navbar__link">Projects</a>
          <a href="#experience" className="navbar__link">Experience</a>
          <a href="#contact"   className="navbar__link">Contact</a>
          <a href="/resume.pdf" className="btn btn-primary">Download CV</a>
        </div>
      </div>
    </nav>
  );
}