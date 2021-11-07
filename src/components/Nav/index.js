import { useEffect } from "react";

import './index.css';

const Nav = (props) => {

  const {
    selectedNavLink,
    setSelectedNavLink
  } = props;

  useEffect(() => {
    document.title = selectedNavLink
  }, [selectedNavLink]);

  const handleHtmlThemeToggle = () => {
    const htmlEl = document.querySelector('html');

    const htmlThemeEl = htmlEl.getAttribute('theme');

    if (htmlThemeEl === 'Dark') {
      htmlEl.setAttribute('theme', 'Light')
    } else {
      htmlEl.setAttribute('theme', 'Dark')
    }
  }

  return (
    <header className='box'>
      <div className='row'>
        <h1 id='name' className='col-3'>
          <a href="https://www.markgiannelli.com" id='home'>Mark Giannelli <br /> Portfolio</a>
        </h1>
        <button onClick={handleHtmlThemeToggle}>Dark</button>
        <nav className='col-7'>
          <div className='box'>
            <ul id='nav-links' className='row'>
              <li className='col-2'>
                <a
                  className={`${selectedNavLink === 'About' && 'navActive'}`}
                  href="#about-me"
                  onClick={() =>
                    setSelectedNavLink('About')
                  }
                >About Me</a>
              </li>
              <li className='col-2'>
                <a
                  className={`${selectedNavLink === 'Portfolio' && 'navActive'}`}
                  href="#portfolio"
                  onClick={() =>
                    setSelectedNavLink('Portfolio')
                  }
                >Portfolio</a>
              </li>
              <li className='col-2'>
                <a
                  className={`${selectedNavLink === 'Contact' && 'navActive'}`}
                  href="#contact"
                  onClick={() =>
                    setSelectedNavLink('Contact')
                  }
                >Contact</a>
              </li>
              <li className='col-2'>
                <a
                  className={`${selectedNavLink === 'Resume' && 'navActive'}`}
                  href="#Resume"
                  onClick={() =>
                    setSelectedNavLink('Resume')
                  }
                >Resume</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <hr></hr>
    </header>
  )
}

export default Nav;