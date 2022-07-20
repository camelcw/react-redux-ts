import axios from 'axios';
import { Dispatch } from 'redux';
import { TodoAction, TodoActionTypes } from '../reducers/todoReducer';

export const fetchTodo = () => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionTypes.FETCH_TODO });
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      dispatch({ type: TodoActionTypes.FETCH_TODO_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({ type: TodoActionTypes.FETCH_TODO_ERROR, payload: `Error: ${e}` });
    }
  };
};
