import React from "react";
import { motion } from "framer-motion";

import {
  PaddingContainer,
  FlexContainer,
  Heading,
  ParaText,
  BlueText,
} from "../Styles/Global.styled";

import { FadeInLeftVariant, FadeInRightVariant } from "../Utils/Variants";

import {
  ShowcaseParticleContainer,
  ShowcaseImageCard,
  Particle,
} from "../Styles/Showcase.styled";

import ShowcaseImage from "../Assets/About.png";
import BackgroundImg from "../Assets/particle.png";

const About = () => {
  return (
    <PaddingContainer id="About" left="3%" right="10%" top="15%" bottom="25%">
      <FlexContainer align="center" fullWidthChild>
        <FlexContainer
          as={motion.div}
          variants={FadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
          justify="flex-start"
        >
          <ShowcaseParticleContainer>
            <ShowcaseImageCard>
              <img src={ShowcaseImage} alt="Showcase" />
            </ShowcaseImageCard>
            <Particle
              as={motion.img}
              animate={{
                x: [0, 100, 0],
                rotate: 360,
                scale: [1, 0.5, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
              }}
              src={BackgroundImg}
              alt="Particle"
              top="-80px"
              left="20px"
              rotate="60deg"
            />
            <Particle
              as={motion.img}
              animate={{
                y: [0, 100, 0],
                rotate: 360,
                scale: [1, 0.8, 1],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
              }}
              src={BackgroundImg}
              alt="Particle"
              top="50px"
              right="-70px"
              rotate="0deg"
            />
            <Particle
              as={motion.img}
              animate={{
                y: [0, -100, 0],
                rotate: 360,
                scale: [1, 0.9, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
              }}
              src={BackgroundImg}
              alt="Particle"
              bottom="10px"
              left="-70px"
              rotate="50deg"
            />
            <Particle
              as={motion.img}
              animate={{
                x: [0, -200, 0],
                rotate: 360,
                scale: [1, 0.5, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
              }}
              src={BackgroundImg}
              alt="Particle"
              bottom="-80px"
              right="10px"
              rotate="60deg"
            />
          </ShowcaseParticleContainer>
        </FlexContainer>

        <motion.div
          variants={FadeInRightVariant}
          initial="hidden"
          whileInView="visible"
        >
          <Heading as="h2" size="h2">
            About <BlueText>Me</BlueText>
          </Heading>

          <ParaText as="p" top="2rem" bottom="4rem" size="1.2rem">
            Hello, my name is Taimur Mumtaz and I am a front-end developer who
            loves creating and designing scalable, seamlessly integrated,
            user-friendly websites and web applications.
          </ParaText>
        </motion.div>
      </FlexContainer>
    </PaddingContainer>
  );
};

export default About;
