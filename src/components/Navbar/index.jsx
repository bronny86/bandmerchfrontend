import React from "react";
import {
    Nav,
    NavLink,
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
                    <NavLink to="/index" activestyle>
                        Home
                    </NavLink>
                    <NavLink to="/GetStarted" activestyle>
                        Get Started
                    </NavLink>
                    
                
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signup">
                        Sign Up
                    </NavBtnLink>
                </NavBtn>
                <NavBtn>
                    <NavBtnLink to="/login">
                        Login
                    </NavBtnLink>
                </NavBtn>
                <NavBtn>
                    <NavBtnLink to="/cart">
                        Cart
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;