import styled from "styled-components";
import { ButtonVariant } from ".";

interface props {
  variant: ButtonVariant
}

const StyledButton = styled.button<props>`
height: 48px ;
padding: 8px 20px;

color: ${({ theme }) => theme.colors.white};
font-size: 20px;
text-transform: uppercase;
letter-spacing: 1px;

background-color: ${({ theme, variant }) => {
  if (variant === ButtonVariant.success) {
    return theme.colors.green;
  }

  if (variant === ButtonVariant.error) {
    return theme.colors.red;
  }
  return theme.colors.mainColor;
}};

cursor: pointer;

border-radius: 12px;
border: none;
box-shadow: none;

&:hover {
  box-shadow: 0px 2px 10px rgba(240, 125, 0, 0.3);
}

&:active {
  background-color: ${({ theme, variant }) => {
  if (variant === ButtonVariant.success) {
    return theme.colors.darkGreen;
  }

  if (variant === ButtonVariant.error) {
    return theme.colors.darkRed;
  }
  return theme.colors.mainColorDarkers;
}};
}
`;

export { StyledButton };