import './App.css';
import styled from 'styled-components';
import Main from './Main';
import Content from './components/content/Content';
import BackPage from './components/BackPage/BackPage';
import { useState } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  return (
    <body>
      <ParentContainer>
        <Main />
        {isVisible ? (
          <Content
            isVisible={isVisible}
            setIsVisible={setIsVisible}
          />
        ) : (
          <BackPage
            isVisible={isVisible}
            setIsVisible={setIsVisible}
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
