import styled from "styled-components"

const PageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: auto;
  background-color: ${({ theme }) => theme.colors.backgroundColorLight};
`;

export {
  PageContainer,
};
