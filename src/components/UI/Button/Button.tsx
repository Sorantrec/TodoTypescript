import * as React from 'react';
import { IButton } from './interfaces/IButton';

export default function Button({text, onClickFunc}: IButton) {
  return <button onClick={() => onClickFunc()}>{text}</button>
};