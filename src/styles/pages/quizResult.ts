import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 32px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center ;

  background-color: ${({ theme }) => theme.colors.backgroundColorLight};
  text-align: center;

  h4 {
    margin-bottom: 16px;
  }
`;

const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  div {
    margin-bottom: 8px;
  }

  margin-bottom: 24px;
`;


export { Container, QuestionsContainer };