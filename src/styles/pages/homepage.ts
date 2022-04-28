import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center ;

  text-align: center;

  h1 {
    margin-bottom: 24px;
    color: ${({ theme }) => theme.colors.mainColor};
  }

  p {
    margin-bottom: 16px;
  }

  h2 {
    margin-bottom: 24px;
  }
`;

export { Container };