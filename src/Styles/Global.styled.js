import styled from "styled-components";

export const MainBody = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};1
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: auto;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  gap: ${({ gap }) => gap};
  flex-direction: ${({ direction }) => direction};

  & > div {
    flex: ${({ fullWidthChild }) => fullWidthChild && 1};
  }

  @media ${({ theme }) => theme.breakpoints.mobile} {
    display: ${({ responsiveFlex }) => (responsiveFlex ? "flex" : "block")};
    flex-direction: ${({ responsiveDirection }) => responsiveDirection};
  }
`;

export const PaddingContainer = styled.div`
  padding-top: ${({ top }) => top};
  padding-bottom: ${({ bottom }) => bottom};
  padding-left: ${({ left }) => left};
  padding-right: ${({ right }) => right};
  /* border:1px solid white; */
  align-items: ${(align) => align};

  @media ${({ theme }) => theme.breakpoints.mobile} {
    padding-top: ${({ responsiveTop }) => responsiveTop};
    padding-bottom: ${({ responsiveBottom }) => responsiveBottom};
    padding-left: ${({ responsiveLeft }) => responsiveLeft};
    padding-right: ${({ responsiveRight }) => responsiveRight};
  }
`;

export const Heading = styled(PaddingContainer)`
  color: ${({ theme }) => theme.colors.white};
  text-align: ${({ align }) => align};
  font-size: ${({ size }) => {
    switch (size) {
      case "h1":
        return "6rem";

      case "h2":
        return "4rem";

      case "h3":
        return "2rem";

      case "h4":
        return "1.2rem";

      default:
        return;
    }
  }};

  @media ${({ theme }) => theme.breakpoints.mobile} {
    font-size: ${({ size }) => {
      switch (size) {
        case "h1":
          return "2.5rem";

        case "h2":
          return "2rem";

        case "h3":
          return "1.5rem";

        case "h4":
          return "1rem";

        default:
          return;
      }
    }};
  }
`;

export const BlueText = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const ParaText = styled(PaddingContainer)`
  color: ${({ theme }) => theme.colors.para_text_color};
  line-height: 2rem;
  font-size: ${({ size }) => size};
`;

export const Particle = styled.img`
  position: absolute;
  top: ${({ initialTop }) => initialTop};
  left: ${({ initialLeft }) => initialLeft};
  right: ${({ initialRight }) => initialRight};
  bottom: ${({ initialBottom }) => initialBottom};
  transform: rotate(${({ rotate }) => rotate});
`;

export const IconContainer = styled.div`
  padding-top: ${({ top }) => top};
  color: ${({ color, theme }) => {
    switch (color) {
      case "white":
        return theme.colors.white;

      case "blue":
        return theme.colors.secondary;

      default:
        return;
    }
  }};
  font-size: ${({ size }) => size};

  &:hover {
    cursor: pointer;
  }
`;



export const Button = styled.a`
  display: inline-block;
  width: max-content;
  margin-top: 1rem;
  padding: 0.6rem 2rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 5px;

  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary_light};
    background-color: ${({ theme }) => theme.colors.secondary};
    border:none;
  }
`;
