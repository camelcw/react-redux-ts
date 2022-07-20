import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useActions } from '../hooks/useActions';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { fetchUsers } from '../store/action creators/user';
import { UserAction } from '../store/reducers/userReducer';

interface UserListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export default function UserList<T>(props: UserListProps<T>) {
  return (
    <div>
      <h1>Список Пользователей</h1>
      {props.items.map(props.renderItem)}
    </div>
  );
}
