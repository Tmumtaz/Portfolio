import React from "react";
import { motion } from "framer-motion";
import uuid from "react-uuid";
import { PaddingContainer, Heading, BlueText } from "../Styles/Global.styled";

import { FadeInLeftVariant, FadeInTopVariant } from "../Utils/Variants";

import Project from "./Layouts/Project";
import Project1 from "../Assets/Kicks.png";
import Project2 from "../Assets/o-slot.png";
import Project3 from "../Assets/todo.png";
import Project4 from "../Assets/kanban.png";

const MyProjects = () => {
  const projectDetails = [
    {
      id: uuid,
      projectName: "E-Commerce Clothing Store",
      projectDescription:
        "This application was created with the goal of providing a modern, intuitive and secure platform for customers to browse and purchase clothing items online. The includes user authentication, payment processing, product management, shopping cart functionality and is fully scalable for any kind of exponential expansion",
      techStack: ["ReactJs", "Sass", "Firebase", "Stripe API", "Redux"],
      projectImage: Project1,
      reverse: true,
      webURL: "https://github.com/Tmumtaz/Kicks",
    },
    {
      id: uuid,
      projectName: "To-Do Application",
      projectDescription:
        "This project had the goal of providing a simple and intuitive tool for managing daily to-do tasks and to-do lists. The application features a user friendly interface, allowing users to easily add, edit and delete tasks.",
      techStack: ["ReactJs", "Sass", "Firebase"],
      projectImage: Project3,
      reverse: false,
    },
    {
      id: uuid,
      projectName: "Booking App",
      projectDescription:
        "This web application is a booking system that allows users to schedule appointments online. Users can create an account, view available appointments and book appointments that fit their schedule. The app stores all data securely in Firebase, allowing for easy access and management. With a simple interface, the application makes it easy for both businesses and customers to management appointment efficiently and effectively",
      techStack: ["ReactJs", "Sass", "Firebase"],
      projectImage: Project2,
      reverse: true,
      webURL: "https://github.com/Tmumtaz/O-Slot---Appointment-Booker",
    },
    {
      id: uuid,
      projectName: "Drag 'n Drop",
      projectDescription:
        "This is an interactive web app using Javascript that allows users to drag,drop and edit various items and rearrange then according to their preferences.",
      techStack: ["Javascript", "CSS"],
      projectImage: Project4,
      reverse: false,
      webURL: "https://github.com/Tmumtaz/Kanban-Drag-and-Drop",
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
        Projects:
      </Heading>

      <Heading
        as={motion.h3}
        variants={FadeInLeftVariant}
        initial="hidden"
        whileInView="visible"
        size="h3"
      >
        What I've
        <BlueText
          as={motion.h3}
          variants={FadeInTopVariant}
          initial="hidden"
          whileInView="visible"
        >
          {" "}
          Built
        </BlueText>
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
