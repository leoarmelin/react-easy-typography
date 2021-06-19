import styled from 'styled-components';

import { TypographyStyle } from 'react-typography';

export const Caption = styled(TypographyStyle)``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  height: auto;
  width: 100%;

  ${Caption} {
    margin-top: 0.5rem;

    font-weight: bold;

    color: #50fa7b;
  }
`;

export const Title = styled(TypographyStyle)`
  font-size: 2rem;
  font-weight: bolder;

  color: #ff79c6;
`;
