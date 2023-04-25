import React from "react";
import { FaGithub } from "react-icons/fa";

import {
  PaddingContainer,
  Heading,
  FlexContainer,
  ParaText,
  IconContainer,
  Button,
} from "../../Styles/Global.styled";

import {
  ProjectImageContainer,
  TechStackCard,
  ProjectContentContainer,
  ProjectImage,
} from "../../Styles/Projects.styles";

const Project = ({ data }) => {
  return (
    <FlexContainer fullWidthChild>
      <ProjectContentContainer>
        <FlexContainer align="center" gap="1rem">
          <Heading as="h3" size="h3" bottom="1rem">
            {data.projectName}
          </Heading>

          <IconContainer size="2rem">
            <FaGithub color="white" />
          </IconContainer>
        </FlexContainer>

        <PaddingContainer top="1rem" bottom="1.5rem">
          <FlexContainer gap="1.5rem">
            {data.techStack.map((stack) => (
              <TechStackCard>{stack}</TechStackCard>
            ))}
          </FlexContainer>
        </PaddingContainer>

        <ParaText>{data.projectDescription}</ParaText>

        <Button>Visit Website</Button>
      </ProjectContentContainer>

      <ProjectImageContainer justify="flex-end">
        <ProjectImage src={data.projectImage} alt={data.projectName} />
      </ProjectImageContainer>
    </FlexContainer>
  );
};

export default Project;
