import React, { useEffect, useMemo } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypeSelector } from '../hooks/useTypeSelector';
import MyButton from './UI/MyButton';
import UserCard from './UserCard';
import UserList from './UserList';

const UserPage = () => {
  const { users, error, loading, page, limit } = useTypeSelector((state) => state.user);
  const pages = [1, 2, 3, 4, 5];
  const { fetchUsers, setUser } = useActions();
  useEffect(() => {
    fetchUsers(page, limit);
  }, [page]);
  if (loading) {
    <div>Loading...</div>;
  }
  if (error) {
    <div>Error...</div>;
  }

  return (
    <div>
      <UserList
        items={users}
        renderItem={(user) => (
          <UserCard
            key={user.id}
            id={user.id}
            username={user.username}
            name={user.name}
            address={user.address}
            company={user.company}
          />
        )}
      />
      {pages.map((page) => (
        <MyButton key={page} onClick={() => setUser(page)}>
          {page}
        </MyButton>
      ))}
    </div>
  );
};

export default UserPage;
