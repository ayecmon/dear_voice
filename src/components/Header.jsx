import { NavLink } from 'react-router';
import './Header.css';
export function Header(){
    return(
        <div className='header'>
            <NavLink to="/">
                <button className= 'back-button'> နောက်သို့ </button>
            </NavLink>   
        </div>
    );
}