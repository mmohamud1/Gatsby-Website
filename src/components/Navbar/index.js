import React, { useState, useEffect } from 'react'
import { FaBars, Fatimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon } from './NavbarElements'

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [scroll, setScroll] = useState(false);

    const handleClick = () => setClick(!click);

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
                        <MobileIcon onClick={handleClick}>
                            {click ? <Fatimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLink to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/images">Images</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/destinations">Destinations</NavLink>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
