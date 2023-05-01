import React from "react";
import { ThemeProvider } from "styled-components";
import { Theme } from "./Utils/Theme";
import { Container, MainBody } from "./Styles/Global.styled";
import Showcase from "./Components/Showcase";
import MySkills from "./Components/Skills";
import MyProjects from "./Components/MyProjects";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";

function App() {
  return (
    <ThemeProvider theme={Theme}>
     <MainBody>
      <Container>
        <Navbar />
        <Showcase />
        <About />
        <MySkills />
        <MyProjects />
        <Contact />
      </Container>
     </MainBody>
    </ThemeProvider>
  );
}

export default App;
