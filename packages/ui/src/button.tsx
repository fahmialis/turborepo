'use client';

import { ReactNode } from 'react';
import '../styles/globals.css';

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, appName }: ButtonProps) => {
  return (
    <button
      className="bg-pink-800"
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      hello {children}
    </button>
  );
};
