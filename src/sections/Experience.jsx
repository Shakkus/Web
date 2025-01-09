import styled from "styled-components";
import ItemProject from "../Components/ItemProject";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  background-color: #2e3233;
  padding: 10px 30px;
  margin: 10px;
  border-radius: 5px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: rgb(61, 145, 142);
  margin: 5px 0;
`;

const Projects = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
const hola="hola";
const hola="hola";

const experience = () => {
  const Experiences = [
    {
      image: "x",
      name: "Entre Copas",
      description: "Sitio web desarrollado para juntadas, previas, etc.",
      stack: ["React", "Typescript", "TailWind", "Vercel"],
    },
    {
      image: "x",
      name: "Portal Paciente",
      description: "Aplicacion Web para ",
      stack: ["React", "Typescript", "Redux", "Material Ui"],
    },
  ];

  return (
    <Main>
      <Title>Experience</Title>
      <Projects>
        {Experiences.map((project, index) => (
          <ItemProject data={project} key={index} />
        ))}
      </Projects>
    </Main>
  );
};

export default experience;
