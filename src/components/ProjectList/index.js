import { useState } from 'react';

import './index.css';
import { formatTitle } from '../../utils/helpers';

const ProjectList = () => {

    const [projects] = useState([
        {
            name: 'board-reactions',
            deploy: 'https://board-reactions.herokuapp.com/',
            problem_solved: 'Connecting board game enthusiasts.',
            technologies_used: 'MERN Stack, JavaScript, GraphQL.',
            github: 'https://github.com/JSheleg/board-reactions'
        },
        {
            name: 'movie-date',
            deploy: 'https://mjgiannelli.github.io/movie_date/',
            problem_solved: 'Giving couples ideas on what movies to watch.',
            technologies_used: 'JavaScript, jQuery, Client Side APIs, UI-Kit.',
            github: 'https://github.com/mjgiannelli/movie_date'
        },
        {
            name: 'note-taker',
            deploy: 'https://shrouded-escarpment-97500.herokuapp.com/',
            problem_solved: 'Convienient way for small businesses to organize tasks.',
            technologies_used: 'Node, Express, JavaScript, Database, RESTful API.',
            github: 'https://github.com/mjgiannelli/challenge-11-note-taker'
        },
        {
            name: 'pizza-hunt',
            deploy: 'https://whispering-shelf-04252.herokuapp.com/',
            problem_solved: 'Helping a small business create a database of people\'s favorite pizzas.',
            technologies_used: 'MongoDB, Express, Node, JavaScript, RESTful API.',
            github: 'https://github.com/mjgiannelli/pizza-hunt'
        },
        {
            name: 'tech-blog',
            deploy: 'https://polar-woodland-67241.herokuapp.com/',
            problem_solved: 'Providing a platform for devs to discuss everything tech.',
            technologies_used: 'SQL, Node, Express, JavaScript, RESTful API.',
            github: 'https://github.com/mjgiannelli/tech-blog'
        },
        {
            name: 'weather-dash',
            deploy: 'https://mjgiannelli.github.io/challenge-6-weather-dashboard/',
            problem_solved: 'Allows user to search current weather and 5-day forecast for any city.',
            technologies_used: 'JavaScript, HTML, CSS, Client Side API.',
            github: 'https://github.com/mjgiannelli/challenge-6-weather-dashboard'
        }
    ])

    return (
        <div id='projects' className='row'>
            {projects.map((image, index) => (
                <div  className='project col-4'>
                    <h2>{formatTitle(image.name)}</h2>
                    <div>
                        <img
                            className='project_img'
                            src={require(`../../assets/images/${image.name}.png`).default}
                            alt={image.name}
                            key={index}
                        />
                        <div className='project_description border project-content'>
                            <div className='row project_details'>
                            <div className='col-10'>
                                    <p className='project-name'>{formatTitle(image.name)}</p>
                                </div>
                                <div className='col-10'>
                                    <p className='project-prob'>{image.problem_solved}</p>
                                </div>
                                <div className='col-10'>
                                    <p className='project-tech'>Tech Used: {image.technologies_used}</p>
                                </div>
                                <div className='col-10'>
                                    <a className='project-links' href={image.deploy} target='_blank'>Deployed App Link</a>
                                </div>
                                <div className='col-10'>
                                    <a className='project-links' href={image.github} target='_blank'>GitHub Repo Link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProjectList;