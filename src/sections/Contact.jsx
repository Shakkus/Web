import styled from "styled-components";

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  background-color: #2e3233;
  padding: 10px 30px;
  margin: 10px;
  border-radius: 5px;
`;

const ContactMe = styled.div`
  display: flex;
  flex-direction: column;
`;
const ContactTitle = styled.p`
  font-weight: bold;
  font-size: x-large;
  color: rgb(61, 145, 142);
`;
const ContactItem = styled.p`
  font-weight: bold;
  color: #fff;
`;

const Form = styled.div`
  background: #221f1f;
  padding: 20px;
`;
const FormBox = styled.div`
`;
const FormLabel = styled.p``;
const FormInput = styled.p``;
const FormTextArea = styled.textarea``;
const FormButton = styled.button``;

const Contact = () => {
  return (
    <Main>
      <ContactMe>
        <ContactTitle>CONTACT ME</ContactTitle>
        <ContactItem>Sebadevalbornoz@gmail.com</ContactItem>
        <ContactItem>Mendoza, Argentina</ContactItem>
        <ContactItem>+54 261 251 8719</ContactItem>
      </ContactMe>
      <Form>
        <FormBox htmlFor="">
          <FormLabel>Nombre</FormLabel>
          <FormInput type="text" placeholder="Nombre" />
          <FormLabel>Apellido</FormLabel>
          <FormInput type="text" placeholder="Apellido" />
        </FormBox>
        <FormBox>
          <FormLabel>Email</FormLabel>
          <FormInput type="email" placeholder="Email" />
        </FormBox>
        <FormBox>
          <FormLabel>Mensaje</FormLabel>
          <FormTextArea placeholder="Message"></FormTextArea>
        </FormBox>
        <FormButton>Send</FormButton>
      </Form>
    </Main>
  );
};
export default Contact;
