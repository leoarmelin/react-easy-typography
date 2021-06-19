import React from 'react';

import { Typography } from 'react-typography';

import { Container } from '../styles/Classname';

const Classname = () => {
  return (
    <Container>
      <Typography type='TitleTwo' className='titletwo-example'>
        This is a TitleTwo component
      </Typography>
      <Typography type='Footer' className='footer-example'>
        This is a Footer component
      </Typography>
    </Container>
  );
};

export default Classname;
