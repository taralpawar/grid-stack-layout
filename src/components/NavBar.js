import React from 'react';
import '../GridStack.css';
import Logo from '../media/images/Logo-Telestream-Inverse.png';
const NavBar = (props) => {
    return(
        <div className='navBar'>
            <div className='logo'>
                <img src={Logo} className='logo-image' />
            </div>
            <button onClick={props.handleAppSelectOpen} className='add-item-button'>Add Widget</button>
        </div>
    );
}

export default NavBar;