
import styled from 'styled-components';
import Main from '../../Main';
import path from '../../assets/Path.png'

const BackPage = ({ isVisible, setIsVisible }: any) => {
  return (
    <div>
      {/* <Main /> */}
      <Content>
        <Circle>
          <Path></Path>
        </Circle>
        <Heading>THANK YOU!</Heading>
        <Paragraph>We’ve added your card details</Paragraph>
        <Button onClick={() => setIsVisible(!isVisible)}>
          CONTINUE
        </Button>
      </Content>
    </div>
  );
};

export default BackPage;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Circle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(#6348fe, #610595);
  margin-top: 82px;
  display: flex;
`;

const Path = styled.div`
    background-image: url(${path});
    width: 30px;
    height: 22px;
    margin-top: 30px;
    margin-left: 26px;
    background-size: cover;
    
`

const Heading = styled.h1`
  width: 327px;
  height: 36px;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: 3.4px;
  font-weight: 500;
  font-family: 'Space Grotesk', sans-serif;
  color: #21092f;
  margin: 24px;
  text-align: center;
`;

const Paragraph = styled.p`
  width: 263px;
  height: 23px;
  font-weight: 500;
  font-family: 'Space Grotesk', sans-serif;
  color: #8f8694;
  font-size: 18px;
  line-height: 23px;
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
`;