import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';

import './styles/components/navbar.css';
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
        </Routes>
      </main>
    </>
  );
}

export default App;
