import { SocialIcon } from 'react-social-icons';

function Footer() {
    return (
      <footer>
        <h5>
          <span>&copy;</span> 2021 Designs by Gia, LLC.
        </h5>
        <div>
            <SocialIcon url='https://twitter.com/MarkGiannelli2' />
            <SocialIcon url='https://github.com/mjgiannelli' />
            <SocialIcon url='https://www.linkedin.com/in/mark-giannelli-mba-458585108/' />
        </div>
      </footer>
    )
  }

  export default Footer;