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

import { SkillsCardContainer, SkillsCard } from "../Styles/Skills.styled";

// import { SkillsData, SkillsCard } from "../Utils/Data";
import { FaReact, FaNode, FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FadeInRightVariant, FadeInLeftVariant } from "../Utils/Variants";

const MySkills = () => {
  const SkillsData = [
    {
      id: 0,
      tech: "React JS",
      icon: <FaReact color="#7eadfc" />,
    },
    {
      id: 1,
      tech: "Node JS",
      icon: <FaNode color="#7eadfc" />,
    },
    {
      id: 2,
      tech: "CSS",
      icon: <FaCss3Alt color="#7eadfc" />,
    },
    {
      id: 3,
      tech: "Javascript",
      icon: <SiJavascript color="#7eadfc" />,
    },
  ];

  return (
    <PaddingContainer id="Skills" top="5%" bottom="20%" responsiveLeft="1rem" responsiveRight="1rem">
      <FlexContainer
       fullWidthChild 
       responsiveFlex 
       responsvieDirection="column"
       >
     

        <motion.div
          variants={FadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
        >
          <Heading as="h2" size="h2">
            Skills
          </Heading>

          <Heading as="h3" size="h3">
            <BlueText>Projects Built With:</BlueText>
          </Heading>

          <ParaText top="2rem" bottom="1.5rem">
            As a developer, I have a wide range of experience in front-end web
            development. I am proficient in JavaScript, React, Angular, HTML,
            and CSS. My strong experience in building responsive and dynamic
            user interfaces using React and Redux has allowed me to create
            engaging and interactive web applications.
          </ParaText>

          <ParaText>
            I have experience in using React for building scalable and
            maintainable applications, allowing me to create efficient
            and sustainable code that can adapt to the changing needs of a
            business.
          </ParaText>
        </motion.div>

        <SkillsCardContainer
         as={motion.div}
         variants={FadeInRightVariant}
         initial="hidden"
         whileInView="visible"
        >
          {SkillsData.map((skill) => (
            <SkillsCard key={skill.id}>
              <IconContainer size="5rem">{skill.icon}</IconContainer>

              <Heading as="h4" size="h4">
                {skill.tech}
              </Heading>
            </SkillsCard>
          ))}
        </SkillsCardContainer>
      </FlexContainer>
    </PaddingContainer>
  );
};

export default MySkills;
