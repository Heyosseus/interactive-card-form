import styled from 'styled-components';
import MaskedInput from 'react-text-mask';
import './Content.css';
import { useState, useEffect } from 'react';

const Content = ({
  isVisible,
  setIsVisible,
  name,
  setName,
  month,
  setMonth,
  year,
  setYear,
  cvc,
  setCvc,
  setMask,
  mask,
}: any) => {
  function nameHandler(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
    setName(e.target.value.replace(/[^a-z]\s/gi, ''));
  }

  function monthHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setMonth(e.target.value.replace(/[^0-9]/gi, ''));
  }
  function yearHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setYear(e.target.value.replace(/[^0-9]/gi, ''));
  }
  function cvcHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setCvc(e.target.value.replace(/[^0-9]/gi, ''));
  }
  function maskHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setMask(e.target.value);
  }
  const [monthError, setMonthError] = useState<string>('');
  const [maskError, setMaskError] = useState<string>('');
  useEffect(() => {
    if (month === '') {
      setMonthError('Cant be blank');
    } else {
      setMonthError('');
    }
  }, [month]);

  useEffect(() => {
    if (cvc === '') {
      setMaskError('Cant be blank');
    } else {
      setMaskError('');
    }
  }, [cvc]);

  function completed() {
    if (
      month !== '' &&
      year !== '' &&
      cvc !== '' &&
      name !== '' &&
      mask !== ''
    ) {
      setIsVisible(!isVisible);
    } else {
      setIsVisible(isVisible);
    }
  }

  return (
    <Center>
      <Form>
        <Label>CARDHOLDER NAME</Label>
        <Input onChange={nameHandler} value={name} maxLength={30} />
        <Label>CARD NUMBER</Label>
        <MaskedInput
          className="input"
          placeholder="e.g 1234 5678 9123 000"
          mask={[
            /[1,2,3,4,5,6,7,8,9]/,
            /\d/,
            /\d/,
            /\d/,
            ' ',
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            ' ',
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            ' ',
            /\d/,
            /\d/,
            /\d/,
            /\d/,
          ]}
          onChange={maskHandler}
        />

        <Details>
          <Container>
            <Label>EXP.DATE (MM/YY)</Label>
            <div style={{ display: 'flex' }}>
              <InputMonth
                maxLength={2}
                value={month}
                onChange={monthHandler}
                required
                min={1}
                max={month}
              />
              <InputYear
                style={{ marginLeft: '8px' }}
                value={year}
                onChange={yearHandler}
                maxLength={2}

                // style={{borderColor: year !== 0 ? '' : 'red'}}
              />
            </div>
            <Error>{monthError}</Error>
          </Container>
          <Container style={{ marginLeft: '20px' }}>
            <Label>CVC</Label>
            <InputCVC
              maxLength={3}
              value={cvc}
              onChange={cvcHandler}
            />
            <Error>{maskError}</Error>
          </Container>
        </Details>
      </Form>
      <Button onClick={completed}>Confirm</Button>
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
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 44px 32px 0px 32px;
  @media screen and (min-width: 700px) {
    display: flex;
  }
`;
const Error = styled.div`
  color: #ff5050;
  font-size: 12px;
  line-height: 15px;
  font-family: 'Space Grotesk', sans-serif;
  margin-top: 6px;
  letter-spacing: 0.6px;
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
  padding-left: 16px;
  outline: none;
  &:hover {
    outline: none;
    border: 1px solid #610595;
  }

  ::placeholder {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 500;
    color: #dfdee0;
  }
  &[value] {
    text-transform: uppercase;
  }

  @media screen and (min-width: 700px) {
    width: 381px;
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
  type: 'tel',
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
  text-align: center;
  outline: none;
  ::placeholder {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 500;
    color: #dfdee0;
    text-align: center;
  }
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  @media screen and (min-width: 700px) {
    width: 81px;
  }
`;
const InputYear = styled.input.attrs({
  type: 'tel',
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
  text-align: center;
  outline: none;
  ::placeholder {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 500;
    color: #dfdee0;
    text-align: center;
  }
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  @media screen and (min-width: 700px) {
    width: 81px;
  }
`;

const InputCVC = styled.input.attrs({
  type: 'tel',
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
  text-align: center;
  outline: none;
  ::placeholder {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 500;
    color: #dfdee0;
    text-align: center;
  }
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
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
  cursor: pointer;
  @media screen and (min-width: 700px) {
    width: 381px;
  }
`;
