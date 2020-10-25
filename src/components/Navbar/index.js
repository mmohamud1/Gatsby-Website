import React, { useState, useEffect } from 'react'
import { FaBars, Fatimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

const Navbar = () => {
    const [click, setClick] = useSate(false);
    const [scroll, setScroll] = useSate(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };

    useEffect(() => {
        changeNav();
        window.addEventListener('scroll', changeNav)
    }, []);

    return (
        <>
            <IconContext.Provider value= {{ color: "#141414"}} >
                <Nav active={scroll} click={click}>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <NavIcon />
                            EXPLORE
                        </NavLogo>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
