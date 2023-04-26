import React from "react";

import {
  PaddingContainer,
  FlexContainer,
  Heading,
  BlueText,
  IconContainer,
} from "../Styles/Global.styled";

import { motion } from "framer-motion";

import { BsLinkedin, BsGithub } from "react-icons/bs";

import { FadeInLeftVariant } from "../Utils/Variants";

const Showcase = () => {
  return (
    <PaddingContainer
      id="Home"
      left="3%"
      right="10%"
      top="15%"
      bottom="10%"
      responsiveLeft="1rem"
      responsiveRight="1rem"
      responsiveTop="8rem"
    >
      <FlexContainer align="center" fullWidthChild>
        <motion.div
          variants={FadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
        >
          <Heading as="h1" size="h1">
            Taimur Mumtaz
          </Heading>

          <Heading as="h2" size="h2" top="0.5rem" bottom="1rem">
            Front End Developer <BlueText>UX/UI Designer</BlueText>
          </Heading>

          {/*-- Social Icons-- */}
          <FlexContainer gap="40px" responsiveFlex>
            <IconContainer size="2rem">
              <BsLinkedin color="white" />
            </IconContainer>

            <IconContainer size="2rem">
              <BsGithub color="white" />
            </IconContainer>
          </FlexContainer>
        </motion.div>
      </FlexContainer>
    </PaddingContainer>
  );
};

export default Showcase;
