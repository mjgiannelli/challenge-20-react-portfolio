const Resume = () => {
    const skills = [
        {
            name: 'HTML'
        },
        {
            name: 'CSS'
        },
        {
            name: 'SASS'
        },
        {
            name: 'JavaScript'
        },
        {
            name: 'React'
        },
        {
            name: 'Node.js'
        },
        {
            name: 'Express'
        },
        {
            name: 'MongoDB'
        },
        {
            name: 'MySQL'
        }
    ]

    console.log(skills)

    return (
        <section>
            <h2 className='title'>Resume</h2>
            <div className='box'>
                <div id='resume-link-div' className='row'>
                    <a id='resume-link' href='https://drive.google.com/uc?export=download&id=1LuV8Xtmh3IbubZY3IaxK8kGpKIrT23pE' download>Click Me To Download Resume 😃</a>
                </div>
                <h3>Proficiencies</h3>
                <div id='skills-div' className='row'>
                    <ul>
                        {skills.map((skill, index) => (
                            <li className='skill' key={index}>{skill.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Resume;
