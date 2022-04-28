import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center ;

  text-align: center;
  padding: 32px;

  h4 {
    margin-bottom: 16px;
  }
`;

const ButtonsContainer = styled.div`
  margin-top: 32px;
  display: flex;
  gap: 32px;
`;

export { Container, ButtonsContainer };