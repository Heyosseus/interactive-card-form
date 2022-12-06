import styled from "styled-components";
import bg from './assets/bg.png'
const Main = () => {
  return (
    <div>
      <Container>
        <Image>
          <BackCard>
            <Rectangle></Rectangle>
            <CVC>sss</CVC>
          </BackCard>
          <FrontCard>
            <div style={{ display: 'flex' }}>
              <Circles></Circles>
              <LittleCircle></LittleCircle>
            </div>
            <Numbers>0000 0000 0000 0000</Numbers>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Name>JANE APPLESEED</Name>
              <Date>00/00</Date>
            </div>
          </FrontCard>
        </Image>
      </Container>
    </div>
  );
}

export default Main

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${bg});
  background: #21092f;
  height: 240px;

  @media screen and (min-width: 700px) {
    width: 483px;
    height: 100vh;
    padding: 20px 63px;
  }
`;

const Image = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 375px;
`;
const BackCard = styled.div`
  width: 286px;
  height: 157px;
  background: linear-gradient(#ffffff, #d2d3d9);
  margin: 0px 16px 0 73px;
  border-radius: 6px;
  z-index: 0;
  grid-row-start: 1;
  grid-column-start: 1;
  margin-top: 50px;
`;
const Rectangle = styled.div`
  width: 286px;
  height: 35px;
  background: #2f2f2f;
  margin-top: 14px;
`;
const CVC = styled.div`
  width: 230px;
  height: 30px;
  background: #adb5be;
  margin: 16px 28px 0px;
  border-radius: 4px;
  justify-content: flex-end;
  color: #fff;
  font-family: 'Space Grotesk', sans-serif;
  align-items: center;
  display: flex;
`;

const FrontCard = styled.div`
  width: 286px;
  height: 157px;
  margin: 0px 13px 0 16px;
  background: linear-gradient(#6348fe, #610595);
  margin-left: 0;
  order: 2;
  z-index: 99;
  border-radius: 6px;
  grid-row-start: 1;
  grid-column-start: 1;
  margin-top: 145px;
  margin-left: 17px;
`;

const Circles = styled.div`
  background: #fff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin: 20px;
`;

const LittleCircle = styled.div`
  border: 1px solid white;
  background-color: transparent;
  border-radius: 50%;
  width: 13px;
  height: 13px;
  margin: 30px 0;
`;

const Numbers = styled.div`
  width: 260px;
  height: 23px;
  color: #fff;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 2.2px;
  margin: 8px 20px;
`;
const Name = styled.div`
  width: 100px;
  height: 11px;
  font-size: 9px;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: 1.2px;
  color: #fff;
  margin: 8px 20px;
`;

const Date = styled.div`
  width: 50px;
  height: 11px;
  font-size: 9px;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: 1.2px;
  color: #fff;
  margin-top: 8px;
`;