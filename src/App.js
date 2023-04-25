import React from "react";
import { ThemeProvider } from "styled-components";
import { Theme } from "./Utils/Theme";
import { Container, MainBody } from "./Styles/Global.styled";
import Showcase from "./Components/Showcase";
import MySkills from "./Components/Skills";

function App() {
  return (
    <ThemeProvider theme={Theme}>
     <MainBody>
      <Container>
        <Showcase />
        <MySkills />
      </Container>
     </MainBody>
    </ThemeProvider>
  );
}

export default App;
