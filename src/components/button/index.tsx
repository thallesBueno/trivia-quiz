import { ReactNode } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  height: 48px ;
  padding: 8px 20px;
  
  color: ${({ theme }) => theme.colors.backgroundColorLight};
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  background-color: ${({ theme }) => theme.colors.mainColor};
  cursor: pointer;

  border-radius: 12px;
  border: none;
  box-shadow: none;

  &:hover {
    box-shadow: 0px 2px 10px rgba(240, 125, 0, 0.3);
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.mainColorDarker};
  }
`;

interface props {
  children: ReactNode,
  onClick: () => {};
}

const Button: React.FC<props> = ({ children, onClick }) =>  (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);

export default Button;
