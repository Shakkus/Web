import styled from "styled-components";
import ItemSkill from "../Components/ItemSkill";

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
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
`;
const Title = styled.h1`
  font-size: 24px;
  color: rgb(61, 145, 142);
  margin: 5px 0;
`;

const H2 = styled.h2`
  color: rgb(181, 202, 201);
  margin: 10px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 500px;
`;

const P = styled.p`
  color: rgb(181, 202, 201);
  max-width: 500px;
  font-size: 18px;
  margin: 10px;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const LanguageContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Language = styled.p`
  color: rgb(66, 148, 144);
  font-size: 18px;
  font-weight: bold;
`;

const BioBoxLink = styled.a`
  text-decoration: none;
  color: rgb(61, 145, 142);
  font-weight: bold;
  font-size: 18px;
`;

const AboutMe = () => {
  const techStack = [
    {
      icon: "/assets/Icons/flowbite--html-solid.svg",
      name: "HTML",
    },
    {
      icon: "/assets/Icons/flowbite--css-solid.svg",
      name: "CSS",
    },
    {
      icon: "/assets/Icons/simple-icons--javascript.svg",
      name: "JavaScript",
    },
    {
      icon: "/assets/Icons/react.svg",
      name: "React",
    },
    {
      icon:"/assets/Icons/astrojs.svg",
      name:"Astro"
    },
    {
      icon: "/assets/Icons/typescript.svg",
      name: "TypeScript",
    },
    {
      icon: "/assets/Icons/devicon-plain--git.svg",
      name: "Git",
    },
    {
      icon: "/assets/Icons/akar-icons--redux-fill.svg",
      name: "Redux",
    },
    {
      icon: "/assets/Icons/devicon-plain--materialui.svg",
      name: "Material UI",
    },
    {
      icon: "/assets/Icons/simple-icons--styledcomponents.svg",
      name: "Styled Components",
    },
    {
      icon:"/assets/Icons/devicon--tailwindcss.svg",
      name:"Tailwind CSS"
    }
   
  ];

  return (
    <Main>
      <Title>ABOUT ME</Title>

      <Container>
        <Box>
          <P>
            Mi nombre es Sebastian Albornoz, soy de
            Mendoza, Argentina.
            Tengo 24 años y soy un apasionado por la tecnologia.
          </P>
          <P>
            Estudio desarrollo web hace mas de 3 años. He realizado diferentes
            cursos de programacion. <br />
            Actualmente me encuentro colaborando con{" "}
            <BioBoxLink href="https://bioboxmed.com/site/">
              BioBoxMed
            </BioBoxLink>
            , una SaaS (Software as a service). En la misma realizo el
            mantenimiento de su visualizador de imagenes nucleares y al mismo
            tiempo desarrollando una aplicacion web para la gestion de estudios
            de pacientes.
          </P>
          <LanguageContainer>
            <Language>Español/ Spanish : nativo</Language>
            <div
              style={{ background: "rgb(66, 148, 144)", width: "2px" }}
            ></div>
            <Language>Ingles/ English: B2 (Intermediate)</Language>
          </LanguageContainer>
        </Box>
        <Box>
          <Box></Box>

          <H2>Skills</H2>
          <TechStack>
            {techStack.map((item, index) => (
              <ItemSkill key={index} data={item} />
            ))}
          </TechStack>
        </Box>
      </Container>
    </Main>
  );
};
export default AboutMe;
