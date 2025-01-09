import styled from "styled-components";

const Item = styled.div`
background: #221f1f;
  display: flex;  
  flex-direction: column;
  align-items: center;
  justify-content:space-around;
  padding: 15px;
  border-radius: 15px;
  max-width: 500px;
`;
const ItemName = styled.h2`
`;
const ItemDescription = styled.p``;
const TechStack = styled.div``;
const ItemTechnology = styled.p``;

const ItemProject = (data) => {
    const {image,name,description,stack} = data.data;

    return (
    <Item>
      <img src={image} alt={`Imagen de tecnologia ${name}`} />
      <ItemName>{name}</ItemName>
      <ItemDescription>{description}</ItemDescription>
      <TechStack>
        {stack.map((item,index)=>(
          <ItemTechnology key={index}>
            {item}
          </ItemTechnology>
        ))}
      </TechStack>
    </Item>
  )
}
export default ItemProject