import { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {

  const [aboutSelected, setAboutSelected] = useState(true);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <div>
      <Nav 
      aboutSelected={aboutSelected}
      setAboutSelected={setAboutSelected}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      portfolioSelected={portfolioSelected}
      setPortfolioSelected={setPortfolioSelected}
      resumeSelected={resumeSelected}
      setResumeSelected={setResumeSelected}
      />
      <main>
        {aboutSelected ? (
          <>
          <About />
          </>
        ) : (
          <>
          <Portfolio />
          <Contact />
          <Resume />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
