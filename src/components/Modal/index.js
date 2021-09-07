const Modal = ({ onClose, currentProject }) => {
    const { name, deploy, github } = currentProject
    return (
        <div>
            <h2>Deployed App and Github Repo Links</h2>
            <h3>{name}</h3>
            <a href={deploy}>Deployed App Link</a>
            <a href={github}>GitHub Repo Link</a>
            <button onClick={onClose} type="button">Close</button>
        </div>
    )
}

export default Modal;