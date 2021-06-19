import React from 'react';
import Classname from '../examples/Classname';
import Styled from '../examples/Styled';

export type ScreensList = {
  classnameScreen: () => JSX.Element;
  styledScreen: () => JSX.Element;
};

const Screens = {
  classnameScreen: Classname,
  styledScreen: Styled,
} as { [component: string]: () => JSX.Element };

export const screenToggler = (screenName?: keyof ScreensList) => {
  if (screenName) return React.createElement(Screens[screenName]);
  return null;
};
