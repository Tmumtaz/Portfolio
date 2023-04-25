import React from "react";

import {
  PaddingContainer,
  FlexContainer,
  Heading,
  ParaText,
  BlueText,
  IconContainer,
} from "../Styles/Global.styled";

import {
  ShowcaseParticleContainer,
  ShowcaseImageCard,
  Particle,
} from "../Styles/Showcase.styled";

import { BsLinkedin, BsGithub } from "react-icons/bs";

import ShowcaseImage from "../Assets/About.png"
import BackgroundImg from "../Assets/particle.png";

const About = () => {
  return (
    <PaddingContainer id="Home" left="3%" right="10%" top="15%" bottom="10%">
      <FlexContainer align="center" fullWidthChild>
        <FlexContainer justify="flex-start">
          <ShowcaseParticleContainer>
            <ShowcaseImageCard>
              <img src={ShowcaseImage} alt="Showcase" />
            </ShowcaseImageCard>
            <Particle
              src={BackgroundImg}
              alt="Particle"
              top="-80px"
              left="20px"
              rotate="60deg"
            />
            <Particle
              src={BackgroundImg}
              alt="Particle"
              top="50px"
              right="-70px"
              rotate="0deg"
            />
            <Particle
              src={BackgroundImg}
              alt="Particle"
              bottom="10px"
              left="-70px"
              rotate="50deg"
            />
          </ShowcaseParticleContainer>
        </FlexContainer>

        <div>
          <Heading as="h1" size="h1">
            <BlueText>About</BlueText> Me
          </Heading>

          <ParaText as="p" top="2rem" bottom="4rem">
            Hello, my name is Taimur Mumtaz and I am a front-end developer
            who loves creating and designing user-friendly
            websites and web applications.
          </ParaText>
        </div>
      </FlexContainer>
    </PaddingContainer>
  );
};

export default About;
