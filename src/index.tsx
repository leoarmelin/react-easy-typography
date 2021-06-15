import * as React from 'react';
import styled from 'styled-components';

export interface TypographyProps {
  text: string;
  name?:
    | 'LargeTitle'
    | 'TitleOne'
    | 'TitleTwo'
    | 'TitleThree'
    | 'Headline'
    | 'Body'
    | 'Caption'
    | 'Footer';
}

const handleType = (typeName: string) => {
  if (typeName === 'LargeTitle' || typeName === 'TitleOne') return 'h1';
  if (typeName === 'TitleTwo') return 'h2';
  if (typeName === 'TitleThree') return 'h3';
  if (typeName === 'Headline') return 'b';
  return 'p';
};

export const Typography = ({
  text,
  name = 'Body',
}: TypographyProps): JSX.Element => {
  const tagName = handleType(name);

  const Text = styled(tagName)``;

  return <Text>{text}</Text>;
};
