function AboutMe() {
    return (
      <section className="hero">
        <article className="me">
          <h2 className="title">About Me</h2>
          <div className="bio">
            <p className="para1">
              Hello and welcome to my portfolio! My name is Mark Giannelli. In 2021, I decided to leave the
              accounting industry for good and pursue a career path that aligns more with my values. I have a
              passion for coding, logic and problem solving. I have a thirst for knowledge that will never be
              quenched no matter how many gatorades I drink.
            </p>
            <div>
              <img className="selfie" src={require('../../assets/images/me-black-background-3.jpg').default}
                alt="professional selfie for Mark Giannelli" />
            </div>
            <p className="para2">
              Currently I'm a student in UT's coding bootcamp. I've never been more challenged and excited at the
              same time in my life. At this point we have studied HTML & CSS, with Javascript on the horizon. This
              webpage will be an example of all the skills I've developed from this camp. I hope you're as
              thrilled as me to see how this portfolio evolves over the next 6 months! Enjoy!
            </p>
          </div>
        </article>
      </section>
    )
  }

  export default AboutMe;