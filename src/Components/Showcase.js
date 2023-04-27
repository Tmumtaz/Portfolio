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

import { FadeInLeftVariant, FadeInTopVariant } from "../Utils/Variants";

const Showcase = () => {
  return (
    <PaddingContainer
      id="Home"
      top="30%"
      bottom="28%"
      responsiveLeft="1rem"
      responsiveRight="1rem"
      responsiveTop="8rem"
    >
      <FlexContainer fullWidthChild>
        <motion.div
          variants={FadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
        >
          <Heading as="h1" size="h1">
          Taimur Mumtaz
          </Heading>

          <Heading
            as={motion.h2}
            variants={FadeInTopVariant}
            size="h2"
            initial="hidden"
            whileInView="visible"
            top="1rem"
            bottom="1rem"
          >
            <BlueText>  Front End Developer</BlueText>
          </Heading>
        </motion.div>
      </FlexContainer>
    </PaddingContainer>
  );
};

export default Showcase;
