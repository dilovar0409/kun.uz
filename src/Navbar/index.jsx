import React from 'react'
import NavbarImg from '../assets/images/Kun.uz_logosi.jpg';
import NavbarImg1 from '../assets/images/ung.png';
import { NavbarLogo, NavbarUl, NavbarWrapper } from './style';
import Text from '../First/Language/language';

function Navbar() {
    return (
        <div>
            <NavbarWrapper>
                <NavbarLogo src={NavbarImg} alt="Kun-uz" />
                <NavbarUl>
                    <li><Text id="uzb" /></li>
                    <li><Text id="world" /></li>
                    <li><Text id="eco" /></li>
                    <li><Text id="com" /></li>
                    <li><Text id="fan" /></li>
                    <li><Text id="sport" /></li>
                    <li>LIGHT</li>
                    <li>BUSINESS CLASS</li>
                    <li>AUDIO</li>
                </NavbarUl>
                <NavbarLogo src={NavbarImg1} alt="Gaz" />
            </NavbarWrapper>
        </div>
    )
}

export default Navbar;
