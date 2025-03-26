import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom
import {
    Nav,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                <NavLink to="/" activestyle={{ fontWeight: "bold", color: "red" }}>
                    Home
                    </NavLink>
                    <NavLink to="/GetStarted" activestyle={{ fontWeight: "bold", color: "red" }}>
                        Get Started
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signup">Sign Up</NavBtnLink>
                </NavBtn>
                <NavBtn>
                    <NavBtnLink to="/login">Login</NavBtnLink>
                </NavBtn>
                <NavBtn>
                    <NavBtnLink to="/cart">Cart</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;

