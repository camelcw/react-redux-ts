import { fetchTodo } from './todo';
import { fetchUsers, setUser } from './user';

export const ActionCreator = {
  fetchUsers: fetchUsers,
  setUser: setUser,
  fetchTodo: fetchTodo,
};

console.log(ActionCreator);
