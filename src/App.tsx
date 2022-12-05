import './App.css';
import styled from 'styled-components'
import img from './assets/cards.png'
import bg from './assets/bg.png'

function App() {
  return (
    <div className='parentContainer'>
      <Container>
        <Image></Image>
      </Container>
      <Form>
          <Label>CARDHOLDER NAME</Label>
          <Input></Input>
          <Label>CARD NUMBER</Label>
          <Input></Input>
        </Form>
    </div>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${bg});
  background: #21092F;
  height: 240px;
`

const Image = styled.div`
  background-image:  url(${img});
  width: 343px;
  height: 251px;
  background-size: cover;
  margin-top: 32px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 44px 32px 0px 32px;
`

const Label = styled.label`
  color: #21092F;
  font-family: 'Space Grotesk', sans-serif;;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 2px;
  margin-top: 20px;
`

const Input = styled.input.attrs({type: 'text', placeholder: 'e.g Jane Appleseed'})`
  margin-top: 6px;
  border: 1px solid #DFDEE0;
  height: 45px; 
  border-radius: 8px;
  font-size: 18px;
  font-family: 'Space Grotesk', sans-serif;;
  font-weight: 500;
  color: #dfdee0;

  ::placeholder {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 500;
    color: #dfdee0;
    padding-left: 16px;
  }
`