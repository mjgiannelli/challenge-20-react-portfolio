import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <footer className='box'>
      <hr></hr>
      <div className='row'>
        <h5 className='col-10'>
          <span>&copy;</span> 2021 Designs by Gia, LLC.
        </h5>
        <div id='icon-div' className='row'>
          <div className='social-icons'>
          <SocialIcon url='https://twitter.com/MarkGiannelli2' />
          <SocialIcon url='https://github.com/mjgiannelli' />
          <SocialIcon url='https://www.linkedin.com/in/mark-giannelli-mba-458585108/' />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;