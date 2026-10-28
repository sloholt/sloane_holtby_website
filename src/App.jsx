import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import EndDivider from './components/enddivider';
import Home from './pages/home';
import About from './pages/about';
import Education from './pages/education';
import Contact from './pages/contact';
import Experience from './pages/experience';
import Projects from './pages/projects';

import './styles/components/navbar.css';
import './styles/components/end-divider.css';
import './styles/components/pic-container.css';
import './styles/sections/hero.css';
import './styles/sections/feature-project.css';
import './styles/sections/skills.css';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/"      element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <EndDivider />
      </main>
    </>
  );
}

export default App;
