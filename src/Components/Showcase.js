import React from "react";

import {
  PaddingContainer,
  FlexContainer,
  Heading,
  ParaText,
  BlueText,
  IconContainer,
} from "../Styles/Global.styled";

import { ShowcaseParticleContainer, ShowcaseImageCard, Particle } from "../Styles/Showcase.styled";

import { BsLinkedin, BsGithub } from 'react-icons/bs'

import ShowcaseImage from '../Assets/showcase-img.png'
import BackgroundImg from '../Assets/particle.png'

const Showcase = () => {
  return (
    <PaddingContainer id="Home" left="3%" right="10%" top="15%" bottom="10%">
      <FlexContainer align="center" fullWidthChild>
        
        <div>
          <Heading as="h1" size="h1">
            Taimur Mumtaz
          </Heading>

          <Heading as="h2" size="h2" top="0.5rem" bottom="1rem">
            Front End Developer <BlueText>UX/UI Designer</BlueText>
          </Heading>

      

         {/*-- Social Icons-- */}
          <FlexContainer  gap="40px">
            <IconContainer  size="2rem">
                <BsLinkedin color="white" />
            </IconContainer>

            <IconContainer size="2rem">
                <BsGithub color="white" />
            </IconContainer>
          </FlexContainer>
        </div>

        <FlexContainer justify="flex-end" >
            <ShowcaseParticleContainer>
                <ShowcaseImageCard>
                    <img src={ShowcaseImage} alt="Showcase" />
                </ShowcaseImageCard>
                <Particle src={BackgroundImg} alt="Particle" top="-80px" left="20px" rotate="60deg" />
                <Particle src={BackgroundImg} alt="Particle" top="50px" right="-70px" rotate="0deg" />
                <Particle src={BackgroundImg} alt="Particle" bottom="10px" left="-70px" rotate="50deg" />
            </ShowcaseParticleContainer>
        </FlexContainer>
      </FlexContainer>
    </PaddingContainer>
  );
};

export default Showcase;
