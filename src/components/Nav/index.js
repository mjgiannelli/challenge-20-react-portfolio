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
    <header className='box'>
      <div className='row'>
        <h1 id='name' className='col-3'>
          <a href="https://mjgiannelli.github.io/mark-giannelli-portfolio/" id='home'>Mark Giannelli <br /> Portfolio</a>
        </h1>
        <nav className='col-7'>
          <div className='box'>
            <ul className='row'>
              <li className='col-2'>
                <a
                  href="#about-me"
                  onClick={() =>
                    setSelectedNavLink('About')
                  }
                >About Me</a>
              </li>
              <li className='col-2'>
                <a href="#portfolio"
                  onClick={() =>
                    setSelectedNavLink('Portfolio')
                  }
                >Portfolio</a>
              </li>
              <li className='col-2'>
                <a href="#contact"
                  onClick={() =>
                    setSelectedNavLink('Contact')
                  }
                >Contact</a>
              </li>
              <li className='col-2'>
                <a href="#Resume"
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