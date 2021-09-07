import { useState } from 'react';
import Modal from "../Modal";

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

    const [currentProject, setCurrentProject] = useState();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = (image) => {
        setCurrentProject(image)
        setIsModalOpen(!isModalOpen)
    }

    return (
        <div>
            {isModalOpen && <Modal currentProject={currentProject} onClose={toggleModal} />}
            <div>
                {projects.map((image) => (
                    <img
                        src={require(`../../assets/images/${image.name}.png`).default}
                        alt={image.name}
                        onClick={() => toggleModal(image)}
                        key={image.name}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProjectList;