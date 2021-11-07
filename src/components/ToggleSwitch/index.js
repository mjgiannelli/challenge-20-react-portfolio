import {useState} from 'react';

import './index.css';

const ToggleSwitch = (props) => {
    const [toggled, setToggled] = useState(false);

    const handleToggle = () => {
        setToggled(!toggled);
    }

    return(
        <label className='toggle-switch'>
            <input type='checkbox' checked={isToggled} onChange={handleToggle}></input>
            <span className='switch'></span>
        </label>
    );
}

export default ToggleSwitch;