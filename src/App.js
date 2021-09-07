import { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {

  const [navLinks] = useState([
    {
      name: 'about'
    },
    {
      name: 'portfolio'
    },
    {
      name: 'contact'
    },
    {
      name: 'resume'
    },
  ])
  
  const [selectedNavLink, setSelectedNavLink] = useState(navLinks[0].name);

  return (
    <div>
      <Nav
        navLinks={navLinks}
        selectedNavLink={selectedNavLink}
        setSelectedNavLink={setSelectedNavLink}
      />
      <main>
        {selectedNavLink === 'about' ? (
          <>
            <About />
          </>
        ) : selectedNavLink === 'portfolio' ? (
          <>
            <Portfolio />
          </>
        ) : selectedNavLink === 'contact' ? (
          <>
            <Contact />
          </>
        ) : (
          <>
            <Resume />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
