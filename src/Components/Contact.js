import React from "react";
import { motion } from "framer-motion";

import {
  FlexContainer,
  PaddingContainer,
  Heading,
  IconContainer,
  ParaText,
  BlueText,
} from "../Styles/Global.styled";

import { BsLinkedin, BsGithub } from "react-icons/bs";

import { FadeInLeftVariant, FadeInRightVariant ,FadeInTopVariant } from "../Utils/Variants";

const Contact = () => {
  return (
    <PaddingContainer
      id="Contact"
      top="5%"
      bottom="20%"
      responsiveLeft="1rem"
      responsiveRight="1rem"
    >
      <FlexContainer
        fullWidthChild
        responsiveFlex
        responsvieDirection="column"
        justify="center"
        align="center"
        direction="column"
      >
        <Heading as="h2" variants={FadeInTopVariant}
        initial="hidden"
        whileInView="visible" size="h2">
          We Can Do So Much Together
        </Heading>

        <Heading size="h3">
          <BlueText as={motion.h3} variants={FadeInTopVariant}
        initial="hidden"
        whileInView="visible" size="h2">Lets talk.</BlueText>
        </Heading>
        
      </FlexContainer >

      <FlexContainer fullWidthChild
        responsiveFlex
        responsvieDirection="column"
        justify="center"
        align="center"
        direction="column">
            <Heading as="h3" top="5%"><BlueText>Email Me: </BlueText>
              taimur.mumtaz0@gmail.com
            </Heading>
            <Heading as="h3" top="2%"><BlueText>Call Me: </BlueText>
            +1 519 701 1478
            </Heading>

            <Heading as="h3" top="2%" bottom="1%"><BlueText>Connect</BlueText> Online:</Heading>
          <FlexContainer gap="40px" responsiveFlex>
            <IconContainer size="2rem" top="1rem">
              <a href="https://www.linkedin.com/feed/">
              <BsLinkedin color="white" />
              </a>
            </IconContainer>

            <IconContainer size="2rem" top="1rem">
              <a href="https://github.com/Tmumtaz">
              <BsGithub color="white" />
              </a>
            </IconContainer>
          </FlexContainer>

      </FlexContainer>
    </PaddingContainer>
  );
};

export default Contact;
