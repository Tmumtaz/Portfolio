import styled from "styled-components";

export const ShowcaseParticleContainer = styled.div`
  position: relative;
`;

export const ShowcaseImageCard = styled.div`
  border: 1px solid white;
  width: max-content;
  
  
  border-radius: 6rem;
  position: relative;
  overflow: hidden;
`;

export const Particle = styled.img`
  position: absolute;
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  transform: rotate(${({ rotate}) => rotate})
`;
