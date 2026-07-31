import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { About } from './components/sections/About';
import { ClientWork } from './components/sections/ClientWork';
import { Contact } from './components/sections/Contact';
import { Home } from './components/sections/Home';
import { Loading } from './components/Loading';
import { MobileMenu } from './components/MobileMenu';
import { Navbar } from './components/Navbar';
import { Projects } from './components/sections/Projects';
import { NotificationPlatform } from './components/projects/NotificationPlatform';
import './index.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {!isLoaded && <Loading onComplete={() => setIsLoaded(true)} />}
              <div
                className={`min-h-screen transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-black text-gray-100`}
              >
                <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <Home />
                <About />
                <ClientWork />
                <Projects />
                <Contact />
              </div>
            </>
          }
        />
        <Route
          path="/projects/notification-platform"
          element={<NotificationPlatform />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
