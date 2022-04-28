import { ReactNode } from 'react';
import { StyledButton } from './style';

enum ButtonVariant {
  primary,
  success,
  error,
}
interface props {
  children: ReactNode,
  onClick: () => void;
  variant?: ButtonVariant,
}

const Button: React.FC<props> = ({ children, onClick, variant = ButtonVariant.primary }) =>  (
  <StyledButton onClick={onClick} variant={variant}>{children}</StyledButton>
);

export { ButtonVariant };
export default Button;
