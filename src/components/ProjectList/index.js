import { useState } from 'react';
import { formatTitle } from '../../utils/helpers';

const ProjectList = () => {

    const [projects] = useState([
        {
            name: 'find-my-boards',
            deploy: 'https://findmyboards.herokuapp.com/',
            github: 'https://github.com/janekv20/find-my-boards'
        },
        {
            name: 'movie-date',
            deploy: 'https://mjgiannelli.github.io/movie_date/',
            github: 'https://github.com/mjgiannelli/movie_date'
        },
        {
            name: 'note-taker',
            deploy: 'https://shrouded-escarpment-97500.herokuapp.com/',
            github: 'https://github.com/mjgiannelli/challenge-11-note-taker'
        },
        {
            name: 'pizza-hunt',
            deploy: 'https://whispering-shelf-04252.herokuapp.com/',
            github: 'https://github.com/mjgiannelli/pizza-hunt'
        },
        {
            name: 'tech-blog',
            deploy: 'https://polar-woodland-67241.herokuapp.com/',
            github: 'https://github.com/mjgiannelli/tech-blog'
        },
        {
            name: 'weather-dash',
            deploy: 'https://mjgiannelli.github.io/challenge-6-weather-dashboard/',
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
                                    <p className='project-title'>Deployed App and Github Repo Links</p>
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