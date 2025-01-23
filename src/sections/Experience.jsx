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

const experience = () => {
  const Experiences = [
    {
      link:"https://entre-copas.vercel.app/",
      image: "public/assets/Projects/Imagenes-02-02.png",
      name: "Entre Copas",
      description: "Sitio web desarrollado para juntadas, previas, etc.",
      stack: ["React", "Typescript", "TailWind", "Vercel"],
      propiedad:"Propio"

    },

    { 
      link:"",
      image: "public/assets/Projects/Imagenes-02_Mesa de trabajo 1.png",
      name: "Portal Paciente",
      description: "Aplicacion Web para gestion de estudios medicos realizados.",
      stack: ["React", "Typescript", "Redux", "Material Ui"],
      propiedad:"Bio Box"
    },
    {
      link:"",
      image: "x",
      name: "Landing Page",
      description: "Landing page preparada para una agencia de modelaje",
      stack: ["Astro", "Tailwind"],
      propiedad:"Propio"

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
