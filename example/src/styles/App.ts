import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  min-height: 100vh;
  height: auto;
  width: 100vw;

  padding: 3rem;

  background-color: #282a36;

  .title {
    margin-bottom: 0.5rem;
  }
`;

export const ExamplesContainer = styled.section`
  display: flex;
  flex-direction: column;

  align-items: center;

  max-width: 40rem;
  width: 100%;

  gap: 0.875rem;
  margin: 5rem 0 3rem 0;
`;

export const Button = styled.button`
  display: flex;

  justify-content: center;

  width: 75%;

  padding: 0.875rem 0;

  border: 0.125em solid #fff;
  border-radius: 3rem;

  background-color: #282a36;
  color: #fff;

  &:hover {
    filter: brightness(0.9);
  }
`;
