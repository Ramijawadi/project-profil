import './toggle.css';
import Sun from '../../img/sun.png';
import Moon from '../../img/moon.jpg';
import { useContext } from 'react';
import { ThemeContext } from '../../context';

const Toggle = () => {

const theme = useContext(ThemeContext);

const handleClick = () => {

theme.dispatch({type:"TOGGLE"})
}
    return (
        <div>
             <div className="t">
            <img src={Sun} alt="" className="t-icon" />
            <img src={Moon} alt="" className="t-icon" />
            <div className="t-button" onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25 }} ></div>
         </div>
        </div>
    )
}

export default Toggle