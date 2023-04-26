import React, { useState} from "react";

import { FlexContainer, PaddingContainer, Container, BlueText  } from "../Styles/Global.styled";
import { NavbarContainer, Logo, MenuIcon,  } from "../Styles/Navbar.styled";

import { GiHamburgerMenu } from 'react-icons/gi'
import { Theme } from "../Utils/Theme";
import NavMenu from "./Layouts/NavMenu";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <NavbarContainer bgColor="transparent">
            <PaddingContainer top="1.2rem" bottom="1.2rem">
                <Container>
                    <FlexContainer justify="space-between">
                        <Logo>T<BlueText>M</BlueText></Logo>

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