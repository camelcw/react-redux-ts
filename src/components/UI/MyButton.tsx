import React, { FC } from 'react';
import styles from '../../assets/styles/MyButton.module.css';

interface ButtonProps {
  children: React.ReactNode | React.ReactChild;
  onClick?: () => void;
}

const MyButton: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default MyButton;
