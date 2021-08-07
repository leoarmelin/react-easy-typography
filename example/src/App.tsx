import React, { useState } from 'react';

import { Typography } from 'react-easy-typography';

import { Container, ExamplesContainer, Button } from './styles/App';
import GlobalStyle from './styles/global';

import { screenToggler, ScreensList } from './utils/screenToggler';

const App = () => {
  const [screen, toggleScreen] = useState<keyof ScreensList | undefined>(
    undefined,
  );
  return (
    <Container>
      <GlobalStyle />
      <Typography type='TitleOne' className='title'>
        Welcome to react-easy-typography!
      </Typography>
      <Typography type='TitleThree'>
        Choose one of the examples to run:
      </Typography>

      <ExamplesContainer>
        <Button onClick={() => toggleScreen('classnameScreen')}>
          <Typography>Change css with classname</Typography>
        </Button>
        <Button onClick={() => toggleScreen('styledScreen')}>
          <Typography>Change css with styled components</Typography>
        </Button>
      </ExamplesContainer>

      {screen && screenToggler(screen)}
    </Container>
  );
};

export default App;
