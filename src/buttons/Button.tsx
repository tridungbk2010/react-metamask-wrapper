import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
export const Button: FC<Props> = ({ children }) => {
  return <button>{children}</button>;
};

export default Button;
