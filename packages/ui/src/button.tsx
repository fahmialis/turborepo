import { ReactNode } from 'react';
import { Button as AntdButton } from 'antd';
export interface ButtonProps {
  children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return <AntdButton>{children}</AntdButton>;
};
