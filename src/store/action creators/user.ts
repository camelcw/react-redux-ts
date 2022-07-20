import axios from 'axios';
import { Dispatch } from 'redux';
import { UserAction, UserActionTypes } from '../reducers/userReducer';

export const fetchUsers = (page = 1, limit = 2) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
        params: { _page: page, _limit: limit },
      });
      dispatch({ type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: 'Ошибка при загрузки пользователя',
      });
    }
  };
};

export const setUser = (page: number) => {
  return { type: UserActionTypes.SET_USERS, payload: page };
};
