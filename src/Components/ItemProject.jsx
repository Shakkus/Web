import styled from "styled-components";

const Item = styled.div`
  background: #221f1f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 15px;
  border-radius: 15px;
  width: 300px;
  color: #fff;
  transition: 0.3s;

  &:hover {
    scale: 1.1;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  }
`;
const ItemA = styled.a`
  text-decoration: none;
  text-align: center;
  color: white;
`;
const ItemName = styled.h2``;
const ItemDescription = styled.p``;
const ItemProperty = styled.p`
color: rgb(61, 145, 142);
`;
const TechStack = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
const ItemTechnology = styled.p`
  padding: 5px;
  border-radius: 5px;
  background: #2e3233;
`;

const ItemProject = (data) => {
  const { image, name, description, stack,link,propiedad } = data.data;

  return (
    <Item>
      <ItemA href={link} target="_blank">
        <img
          src={image}
          alt={`Imagen de tecnologia ${name}`}
          style={{ width: "100%", borderRadius: "10px 10px 0 0" }}
        />
        <ItemName>{name}</ItemName>
        <ItemDescription>{description}</ItemDescription>
        <ItemProperty>{propiedad}</ItemProperty>
        <TechStack>
          {stack.map((item, index) => (
            <ItemTechnology key={index}>{item}</ItemTechnology>
          ))}
        </TechStack>
      </ItemA>
    </Item>
  );
};
export default ItemProject;
