import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Presentation from "./sections/Presentation";
import Header from "./Header";
import styled from "styled-components";
import "./App.css";

const Main = styled.div`
  background-color: #221f1f;
  padding: 0;
  margin: 0;
`;
const Container = styled.div`
  padding: 30px 30px;
`;

function App() {
  return (
    <Main>
      <Container>
        <Header />
        <Presentation />
        <AboutMe />
        <Experience />
        <Contact />
      </Container>
    </Main>
  );
}

export default App;
