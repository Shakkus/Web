import styled from "styled-components";

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #221f1f;
  margin: 10px;
  padding: 10px;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  transition: 0.3s;

  &:hover {
    scale: 1.1;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  }
`;
const ItemName = styled.p`
margin:0;
  color: rgb(181, 202, 201);
`;
const ItemIcon = styled.img`
  width: 50px;`;

const ItemComponent = (item) => {
  const { icon,name } = item.data;
  
  return (
    <Item>
      <ItemIcon src={icon} alt="icon"></ItemIcon>
      <ItemName>{name}</ItemName>
    </Item>
  );
}
export default ItemComponent