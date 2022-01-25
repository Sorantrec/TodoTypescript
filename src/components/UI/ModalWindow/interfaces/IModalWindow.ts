import { ReactNode } from 'react';
export interface IModalWindow {
  children: ReactNode,
  visible: boolean,
  changeActiveWindow: () => void
}