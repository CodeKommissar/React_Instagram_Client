import React from "react";
import "./Header.css";
import {
    Navbar,
    Container
} from "bloomer";

import Logo from "./Logo/Logo";
import SearchBar from "./SearchBar/SearchBar";
import HeaderIcons from "./HeaderIcons/HeaderIcons";

const Header = () => {
    return (
        <Navbar className="Header">
            <Container>
                <Logo />
                <SearchBar />
                <HeaderIcons />
            </Container>
        </Navbar>
    )
}

export default Header;