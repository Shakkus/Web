import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  background-color: #2e3233;
  padding: 15px 30px;
  margin: 10px;
  border-radius: 5px;
`;

const Name = styled.h3`
  background: linear-gradient(90deg, rgb(7, 129, 127), rgb(61, 145, 142));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: auto 0;
`;
const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

const Item = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
  font: bold;
  font-weight: 500;
  margin: 10px;
`;

const Header = () => {
  return (
    <MainContainer>
      <Name>Sebastian Albornoz</Name>

      <Box>
        <Item href="#">About Me</Item>
        <Item href="#">My Projects</Item>
        <Item href="#">Contact</Item>
      </Box>
    </MainContainer>
  );
};
export default Header;
