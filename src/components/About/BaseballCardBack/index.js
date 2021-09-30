const BaseballCardBack = (props) => {
    return (
        <div id='back-card-container' className='card-container' onClick={props.handleClick}>
            <div id='back-card-body'>
                <div id='back-header' className='row'>
                    <div className='topps-div'>
                        <img className='topps' src="https://www.logosurfer.com/wp-content/uploads/2018/03/topps-logo_0.png" alt="Topps Logo" />
                    </div>
                    <div id='num'> 
                        14
                    </div>
                </div>
                

            </div>
        </div>
    )
}

export default BaseballCardBack;