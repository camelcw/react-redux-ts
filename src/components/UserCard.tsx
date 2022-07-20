import React, { FC } from 'react';
import { IUser } from '../types/types';
import styles from '../assets/styles/UserCard.module.css';
import MyButton from './UI/MyButton';

const UserCard: FC<IUser> = ({ id, name, address, company }) => {
  return (
    <div className={styles.user}>
      <ul className={styles.user__content}>
        <li>
          ФИО: <strong>{name}</strong>
        </li>
        <li>
          ID: <strong>{id}</strong>
        </li>
        <li>
          Город: <strong>{address?.city}</strong>
        </li>
        <li>
          Компания: <strong>{company?.name}</strong>
        </li>
      </ul>
      <MyButton>Список дел</MyButton>
    </div>
  );
};

export default UserCard;
