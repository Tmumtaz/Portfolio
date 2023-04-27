import React, { useState, useEffect} from "react";

import { FlexContainer, PaddingContainer, Container, BlueText  } from "../Styles/Global.styled";
import { NavbarContainer, Logo, MenuIcon,  } from "../Styles/Navbar.styled";

import { GiHamburgerMenu } from 'react-icons/gi'
import { Theme } from "../Utils/Theme";
import NavMenu from "./Layouts/NavMenu";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            window.pageYOffset > 50 ? setSticky(true) : setSticky(false)
        }

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll)
    }, [])
    return(
        <NavbarContainer bgColor={ sticky ? Theme.colors.primary : 'transparent' }>
            <PaddingContainer top="1.2rem" bottom="1.2rem" responsiveLeft="1rem" responsiveRight="1rem">
                <Container>
                    <FlexContainer justify="space-between" responsiveFlex>
                        <a style={{ textDecoration: 'none' }} href="#Home"><Logo>T<BlueText>M</BlueText></Logo></a>

                        <MenuIcon onClick={() => { setIsOpen(true)}}>
                            <GiHamburgerMenu />
                        </MenuIcon>
                    </FlexContainer>
                </Container>
                {isOpen && <NavMenu setIsOpen={setIsOpen}/>}
            </PaddingContainer>

           
        </NavbarContainer>
    )
}

export default Navbar;