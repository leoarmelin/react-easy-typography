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

const jsonHandlerType = {
  LargeTitle: 'h1',
  TitleOne: 'h1',
  TitleTwo: 'h2',
  TitleThree: 'h3',
  HeadLine: 'b',
};

const handleType = (typeName: string) => jsonHandlerType[typeName] || 'p';

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
