const Nav = (props) => {

  const {
    contactSelected,
    setContactSelected
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
                setContactSelected(false)
              }
              >About Me</a>
            </li>
            <li>
              <a href="#portfolio"
              // onClick={() => 
              //   setAboutSelected(false),
              //   setContactSelected(false),
              //   setPortfolioSelected(true),
              //   setResumeSelected(false)
              // }
              >Portfolio</a>
            </li>
            <li>
              <a href="#contact"
              onClick={() => 
                setContactSelected(true)
              }
              >Contact</a>
            </li>
            <li>
              <a href="#Resume"
              // onClick={() => 
              //   setAboutSelected(false),
              //   setContactSelected(false),
              //   setPortfolioSelected(false),
              //   setResumeSelected(true)
              // }
              >Resume</a>
            </li>
          </ul>
        </nav>
      </header>
    )
}

export default Nav;