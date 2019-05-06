import React from 'react';
import './Navbar.css'
import logo from './images/reforge_logo_v3.png'

class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <img src={logo} alt={""}/>
            </nav>
        );
    }
}

export default Navbar;