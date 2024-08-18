import { ReactNode } from 'react';
import '../styles/globals.css';

export interface ButtonProps {
  children: ReactNode;
  // className?: string;
}

export const Button = ({ children }: ButtonProps) => {
  return <button className="bg-green-800">{children}</button>;
};
