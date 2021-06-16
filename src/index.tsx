import * as React from 'react';
import styled from 'styled-components';
import { handleStyle } from './typography';

export interface TypographyProps {
  text: string;
  type?:
    | 'LargeTitle'
    | 'TitleOne'
    | 'TitleTwo'
    | 'TitleThree'
    | 'Headline'
    | 'Body'
    | 'Caption'
    | 'Footer';
  guideline?: 'Apple' | 'Google';
  className?: string;
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
  type = 'Body',
  guideline = 'Google',
  className = '',
}: TypographyProps): JSX.Element => {
  const tagName = handleType(type);
  const styleName = handleStyle(type);

  const Text = styled(tagName)`
    ${styleName}
  `;

  return (
    <Text guideline={guideline} className={className}>
      {text}
    </Text>
  );
};
