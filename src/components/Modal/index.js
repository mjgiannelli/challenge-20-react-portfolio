const Modal = ({ onClose, currentProject }) => {
    const { name, deploy, github } = currentProject
    return (
        <div id='modal' className='box border'>
            <div id='modal-content' className='row'>
                <h3 id='modal-title'>{name}</h3>
                <div className='col-10'>
                    <p id='modal-subtitle'>Deployed App and Github Repo Links</p>
                </div>
                <div className='col-10 modal-links-div'>
                    <a className='modal-links' href={deploy} target='_blank'>Deployed App Link</a>
                </div>
                <div className='col-10 modal-links-div'>
                    <a className='modal-links' href={github} target='_blank'>GitHub Repo Link</a>
                </div>
                <div id='modal-close-btn-div' className='col-10'>
                    <button id='modal-close-btn' onClick={onClose} type="button">Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;