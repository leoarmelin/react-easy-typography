import React from 'react';

import { Typography } from 'react-typography';

const App = () => {
  return (
    <>
      <Typography type='LargeTitle' guideline='Google' text='LargeTitle' />
      <Typography type='TitleOne' guideline='Google' text='TitleOne' />
      <Typography type='TitleTwo' guideline='Google' text='TitleTwo' />
      <Typography type='TitleThree' guideline='Google' text='TitleThree' />
      <Typography type='Headline' guideline='Google' text='Headline' />
      <Typography type='Body' guideline='Google' text='Body' />
      <Typography type='Caption' guideline='Google' text='Caption' />
      <Typography type='Footer' guideline='Google' text='Footer' />

      <Typography type='LargeTitle' guideline='Apple' text='LargeTitle' />
      <Typography type='TitleOne' guideline='Apple' text='TitleOne' />
      <Typography type='TitleTwo' guideline='Apple' text='TitleTwo' />
      <Typography type='TitleThree' guideline='Apple' text='TitleThree' />
      <Typography type='Headline' guideline='Apple' text='Headline' />
      <Typography type='Body' guideline='Apple' text='Body' />
      <Typography type='Caption' guideline='Apple' text='Caption' />
      <Typography type='Footer' guideline='Apple' text='Footer' />
    </>
  );
};

export default App;
