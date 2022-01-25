import * as React from 'react';
import styles from './ModalWindow.module.scss';
import { IModalWindow } from './interfaces/IModalWindow';

const ModalWindow = ({children, visible, changeActiveWindow}: IModalWindow) => {
  return (<div className={`${styles.window} ${visible ? styles.visible: ''}`} onClick={() => changeActiveWindow()}>
    <div className={`${styles.content}`} onClick={(e) => e.stopPropagation()}>
      {children}
    </div>
  </div>)
};
export default ModalWindow;