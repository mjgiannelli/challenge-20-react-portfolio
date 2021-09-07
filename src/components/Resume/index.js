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
            <h2>Resume</h2>
            <a href='https://drive.google.com/uc?export=download&id=1LuV8Xtmh3IbubZY3IaxK8kGpKIrT23pE' download>Download Resume</a>
            <h3>Proficiencies</h3>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill.name}</li>
                ))}
            </ul>
        </section>
    )
}

export default Resume;
