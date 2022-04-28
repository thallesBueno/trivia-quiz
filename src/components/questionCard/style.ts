import styled from "styled-components";

interface props {
  small: boolean
}

const Card = styled.div<props>`
  padding: 24px 16px;
  max-width: 800px;
  
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  text-align: left;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.20);

  h2 {
    font-size: ${({ small }) => small ? 16 : 24}px;
  }
  h3 {
    font-size: ${({ small }) => small ? 16 : 12}px;
    color: ${({ theme }) => theme.colors.mainColor};
    margin-bottom: 8px ;
  }
`;


export { Card };