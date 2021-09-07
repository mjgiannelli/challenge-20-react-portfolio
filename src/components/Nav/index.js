const Nav = (props) => {

  const {
    navLinks = [],
    selectedNavLink,
    setSelectedNavLink
  } = props;

    return(
        <header>
        <h1>
          <a href="https://mjgiannelli.github.io/mark-giannelli-portfolio/">Mark Giannelli <br /> Portfolio</a>
        </h1>
        <nav>
          <ul>
            <li>
              <a 
              href="#about-me"
              onClick={() => 
                setSelectedNavLink('about')
              }
              >About Me</a>
            </li>
            <li>
              <a href="#portfolio"
              onClick={() => 
                setSelectedNavLink('portfolio')
              }
              >Portfolio</a>
            </li>
            <li>
              <a href="#contact"
              onClick={() => 
                setSelectedNavLink('contact')
              }
              >Contact</a>
            </li>
            <li>
              <a href="#Resume"
              onClick={() => 
                setSelectedNavLink('resume')
              }
              >Resume</a>
            </li>
          </ul>
        </nav>
      </header>
    )
}

export default Nav;