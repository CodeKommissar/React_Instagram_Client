import React from "react";
import "./HeaderIcons.css";
import {
    NavbarItem
} from "bloomer";
import FontAwesome from 'react-fontawesome';

const HeaderIcons = () => {
    return (
        <NavbarItem className="HeaderIcons">
            <FontAwesome 
                name='compass' 
                size='2x' 
            />
            <FontAwesome 
                name='heart-o' 
                size='2x' 
                className="MiddleIcon"
            />
            <FontAwesome 
                name='user-o' 
                size='2x' 
            />
        </NavbarItem>
    )
}

export default HeaderIcons;