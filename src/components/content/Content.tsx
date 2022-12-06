import styled from 'styled-components';



const Content = ({isVisible, setIsVisible}:any) => {
  return (
    <Center>
      <Form>
        <Label>CARDHOLDER NAME</Label>
        <Input></Input>
        <Label>CARD NUMBER</Label>
        <InputCardNumber></InputCardNumber>
        <Details>
          <Container>
            <Label>EXP.DATE (MM/YY)</Label>
            <div style={{ display: 'flex' }}>
              <InputMonth></InputMonth>
              <InputYear style={{ marginLeft: '8px' }}></InputYear>
            </div>
          </Container>
          <Container style={{ marginLeft: '20px' }}>
            <Label>CVC</Label>
            <InputCVC></InputCVC>
          </Container>
        </Details>
      </Form>
      <Button onClick={()=> setIsVisible(!isVisible)}>Confirm</Button>
    </Center>
  );
};

export default Content;

const Center = styled.div`
  @media screen and (min-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vh;
    height: 45vw;
    margin-left: 42px;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 44px 32px 0px 32px;
  @media screen and (min-width: 700px) {
    display: flex;
  }
`;

const Label = styled.label`
  color: #21092f;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 2px;
  margin-top: 20px;
`;

const Input = styled.input.attrs({
  type: 'text',
  placeholder: 'e.g Jane Appleseed',
})`
  margin-top: 6px;
  border: 1px solid #dfdee0;
  height: 45px;
  border-radius: 8px;
  font-size: 18px;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  color: #21092f;

  ::placeholder {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 500;
    color: #dfdee0;
    padding-left: 16px;
  }
  @media screen and (min-width: 700px) {
    width: 381px;
  }
`;

const InputCardNumber = styled.input.attrs({
  type: 'number',
  placeholder: 'e.g 1234 5678 9123 000',
})`
  margin-top: 6px;
  border: 1px solid #dfdee0;
  height: 45px;
  border-radius: 8px;
  font-size: 18px;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  color: #21092f;

  ::placeholder {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 500;
    color: #dfdee0;
    padding-left: 16px;
  }
`;

const Details = styled.div`
  display: flex;
  /* flex-direction: column; */
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputMonth = styled.input.attrs({
  type: 'number',
  placeholder: 'MM',
})`
  margin-top: 6px;
  border: 1px solid #dfdee0;
  height: 45px;
  border-radius: 8px;
  font-size: 18px;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  color: #21092f;
  width: 72px;

  ::placeholder {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 500;
    color: #dfdee0;
    text-align: center;
  }
  @media screen and (min-width: 700px) {
    width: 81px;
  }
`;
const InputYear = styled.input.attrs({
  type: 'number',
  placeholder: 'YY',
})`
  margin-top: 6px;
  border: 1px solid #dfdee0;
  height: 45px;
  border-radius: 8px;
  font-size: 18px;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  color: #21092f;
  width: 72px;

  ::placeholder {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 500;
    color: #dfdee0;
    text-align: center;
  }
  @media screen and (min-width: 700px) {
    width: 81px;
  }
`;

const InputCVC = styled.input.attrs({
  type: 'number',
  placeholder: 'e.g 123',
})`
  margin-top: 6px;
  border: 1px solid #dfdee0;
  height: 45px;
  border-radius: 8px;
  font-size: 18px;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  color: #21092f;
  width: 141px;

  ::placeholder {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 500;
    color: #dfdee0;
    text-align: center;
  }
  @media screen and (min-width: 700px) {
    width: 191px;
  }
`;

const Button = styled.button`
  width: 312px;
  height: 53px;
  border-radius: 8px;
  background-color: #21092f;
  color: #fff;
  margin: 32px;
  border: none;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 18px;
  line-height: 23px;
  @media screen and (min-width: 700px) {
    width: 381px;
  }
`;
