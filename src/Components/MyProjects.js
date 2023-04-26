import React from "react";
import { motion } from "framer-motion";

import {
  PaddingContainer,
  FlexContainer,
  Heading,
  ParaText,
  BlueText,
  IconContainer,
} from "../Styles/Global.styled";

import { FadeInLeftVariant, FadeInTopVariant } from "../Utils/Variants";

import Project from "./Layouts/Project";
import Project1 from "../Assets/Project1.png";
import Project2 from "../Assets/Project2.png";

const MyProjects = () => {
  const projectDetails = [
    {
      id: 0,
      projectName: "E-Commerce Clothing Store",
      projectDescription: "Description 1",
      techStack: ["ReactJs", "Sass", "Firebase"],
      projectImage: Project1,
      reverse: true,
    },
    {
      id: 1,
      projectName: "Journaling App",
      projectDescription: "Description 2",
      techStack: ["React Native", "Sass", "Firebase"],
      projectImage: Project2,
      reverse: false,
    },
    {
      id: 1,
      projectName: "Booking App",
      projectDescription: "Description 2",
      techStack: ["React Native", "Sass", "Firebase"],
      projectImage: Project2,
      reverse: true,
    },
  ];

  return (
    <PaddingContainer
      id="Projects"
      top="5%"
      bottom="5%"
      responsiveTop="20%"
      responsiveLeft="1rem"
      responsiveRight="1rem"
    >
      <Heading
        as={motion.h2}
        variants={FadeInTopVariant}
        size="h2"
        initial="hidden"
        whileInView="visible"
      >
        Projects
      </Heading>

      <Heading
        as={motion.h3}
        variants={FadeInLeftVariant}
        initial="hidden"
        whileInView="visible"
        size="h3"
      >
        What I've<BlueText as={motion.h3}
        variants={FadeInTopVariant}
        initial="hidden"
        whileInView="visible"> Built</BlueText>
      </Heading>

      {projectDetails.map((project) => (
        <PaddingContainer key={project.id} top="5rem" bottom="5rem">
          <Project data={project} />
        </PaddingContainer>
      ))}
    </PaddingContainer>
  );
};

export default MyProjects;
