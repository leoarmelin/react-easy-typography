import * as React from 'react';
import styled from 'styled-components';
import { Text } from './typography';

export interface TypographyProps {
  children?: React.ReactNode;
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
  children,
  type = 'Body',
  guideline = 'Google',
  className = '',
}: TypographyProps): JSX.Element => {
  const tagName = handleType(type);

  return (
    <Text as={tagName} type={type} guideline={guideline} className={className}>
      {children}
    </Text>
  );
};

export const TypographyStyle = styled(Typography)``;
