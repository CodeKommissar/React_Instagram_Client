import React from "react";
import "./Logo.css";
import {
    NavbarItem
} from "bloomer";
import FontAwesome from 'react-fontawesome';

const Logo = () => {
    return (
        <NavbarItem className="Logo">
            <FontAwesome 
                name='instagram' 
                size='2x' 
                className="InstagramIcon"
            />
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" 
                alt="Instagram Logo"
                className="InstagramLogo"
            />
        </NavbarItem>
    )
}

export default Logo;