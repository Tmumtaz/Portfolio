import React from "react";

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

const MySkills = () => {
  const SkillsData = [
    {
      id: 0,
      tech: "React JS",
      icon: <FaReact color="white" />,
    },
    {
      id: 1,
      tech: "Node JS",
      icon: <FaNode color="white" />,
    },
    {
      id: 2,
      tech: "CSS",
      icon: <FaCss3Alt color="white" />,
    },
    {
      id: 3,
      tech: "Javascript",
      icon: <SiJavascript color="white" />,
    },
  ];

  return (
    <PaddingContainer id="Skills" top="10%" bottom="10%" responsiveLeft="1rem" responsiveRight="1rem">
      <FlexContainer fullWidthChild responsiveFlex responsvieDirection="column">
        <SkillsCardContainer>
          {SkillsData.map((skill) => (
            <SkillsCard key={skill.id}>
              <IconContainer size="5rem">{skill.icon}</IconContainer>

              <Heading as="h4" size="h4">
                {skill.tech}
              </Heading>
            </SkillsCard>
          ))}
        </SkillsCardContainer>

        <div>
          <Heading as="h2" size="h2">
            Skills
          </Heading>

          <Heading as="h3" size="h3">
            <BlueText>Projects Built With</BlueText>
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
            maintainable applications. This has allowed me to create efficient
            and sustainable code that can adapt to the changing needs of a
            business.
          </ParaText>
        </div>
      </FlexContainer>
    </PaddingContainer>
  );
};

export default MySkills;
