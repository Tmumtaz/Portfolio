import React from "react";
import uuid from "react-uuid";

import { PaddingContainer, FlexContainer } from "../../Styles/Global.styled";

import { AiOutlineClose } from "react-icons/ai";

import {
  MenuIcon,
  NavMenuContainer,
  MenuItem,
} from "../../Styles/Navbar.styled";

const NavMenu = ({ setIsOpen }) => {
  const NavLinks = [
    {
      id:uuid,
      name:'Home',
      href:'Home'
    },
    {
      id:uuid,
      name:'About',
      href:'About'
    },
    {
      id:uuid,
      name:'Skills',
      href:'Skills'
    },
    {
      id:uuid,
      name:'Projects',
      href:'Projects'
    },
    {
      id:uuid,
      name:'Contact',
      href:'Contact'
    },
  ]
  return (
    <NavMenuContainer>
      <PaddingContainer left="5%" right="5%" top="2rem">
        <FlexContainer justify="flex-end" responsiveFlex>
          <MenuIcon onClick={() => setIsOpen(false)}>
            <AiOutlineClose />
          </MenuIcon>
        </FlexContainer>
      </PaddingContainer>

      <PaddingContainer top="8%">
        <FlexContainer direction="column" align="center" justify="center" responsiveFlex>
          {NavLinks.map((link) => (
            <MenuItem key={link.id} href={`#${link.href}`} onClick={() => setIsOpen(false)}>
            {link.name}
          </MenuItem>
          ) )}
          
        </FlexContainer>
      </PaddingContainer>
    </NavMenuContainer>
  );
};

export default NavMenu;
