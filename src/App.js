import React from "react";
import { ThemeProvider } from "styled-components";
import { Theme } from "./Utils/Theme";
import { Container, MainBody } from "./Styles/Global.styled";
import Showcase from "./Components/Showcase";

function App() {
  return (
    <ThemeProvider theme={Theme}>
     <MainBody>
      <Container>
        <Showcase />
      </Container>
     </MainBody>
    </ThemeProvider>
  );
}

export default App;
