import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <div className="navbar__logo">
          <Link to="/"><img alt="Logo" src="/sh_logo_hd.png" /></Link>
        </div>

        <div className="navbar__links">
          <Link to="/about"    className="navbar__link">About</Link>
          <Link to="/education" className="navbar__link">Education</Link>
          <a href="#projects"  className="navbar__link">Projects</a>
          <Link to="/experience" className="navbar__link">Experience</Link>
          <Link to="/contact"   className="navbar__link">Contact</Link>
          <a href="/resume.pdf" className="btn btn-primary">Download CV</a>
        </div>
      </div>
    </nav>
  );
}