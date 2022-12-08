import './App.css';
import styled from 'styled-components';
import Main from './Main';
import Content from './components/content/Content';
import BackPage from './components/BackPage/BackPage';
import { useState } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [name, setName] = useState<string>('');
  const [month, setMonth] = useState<number>();
  const [year, setYear] = useState<number>();
  const [cvc, setCvc] = useState<number>();
  const [mask, setMask] = useState<number | string>();
  return (
    <body>
      <ParentContainer>
        <Main
          name={name}
          setName={setName}
          month={month}
          year={year}
          cvc={cvc}
          mask={mask}
        />
        {isVisible ? (
          <Content
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            name={name}
            setName={setName}
            month={month}
            setMonth={setMonth}
            year={year}
            setYear={setYear}
            cvc={cvc}
            setCvc={setCvc}
            mask={mask}
            setMask={setMask}
          />
        ) : (
          <BackPage
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            name={name}
            setName={setName}
            month={month}
            cvc={cvc}
            mask={mask}
          />
        )}
      </ParentContainer>
    </body>
  );
}

export default App;

const ParentContainer = styled.div`
  min-height: 100vh;
  @media screen and (min-width: 700px) {
    min-height: 100vh;
    display: flex;
  }
`;
