import {useState} from 'react';

import './index.css';

const ToggleSwitch = (props) => {
    const {toggled, handleToggle} = props

    return(
        <label className='toggle-switch'>
            <input type='checkbox' checked={toggled} onChange={handleToggle}></input>
            <span className='switch'></span>
            <span className='text'></span>
        </label>
    );
}

export default ToggleSwitch;