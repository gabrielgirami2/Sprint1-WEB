import React from 'react';
import logo from '../../assets/img/logo-portoseguro-blue.svg'
import '../../assets/Styles/logoTest.css';

function Header(){
    return(
        <div className='icon'>    
            <img src={logo} alt="Logo" className="logoPorto" />
        </div>
    );
}

export default Header;