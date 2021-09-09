import { useEffect } from "react";

const Nav = (props) => {

  const {
    selectedNavLink,
    setSelectedNavLink
  } = props;

  useEffect(() => {
    document.title = selectedNavLink
  }, [selectedNavLink]);

  return (
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
                setSelectedNavLink('About')
              }
            >About Me</a>
          </li>
          <li>
            <a href="#portfolio"
              onClick={() =>
                setSelectedNavLink('Portfolio')
              }
            >Portfolio</a>
          </li>
          <li>
            <a href="#contact"
              onClick={() =>
                setSelectedNavLink('Contact')
              }
            >Contact</a>
          </li>
          <li>
            <a href="#Resume"
              onClick={() =>
                setSelectedNavLink('Resume')
              }
            >Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav;