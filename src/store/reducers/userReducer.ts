import { IUser } from '../../types/types';

export enum UserActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
  SET_USERS = 'SET_USERS',
}

interface UserState {
  users: IUser[];
  loading: boolean;
  error: null | string;
  page?: number;
  limit?: number;
}

interface FetchUsersAction {
  type: UserActionTypes.FETCH_USERS;
}

interface FetchUserSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS;
  payload: IUser[];
}

interface FetchUsersErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

interface SetUsers {
  type: UserActionTypes.SET_USERS;
  payload: number;
}

export type UserAction =
  | FetchUserSuccessAction
  | FetchUsersAction
  | FetchUsersErrorAction
  | SetUsers;

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
  page: 1,
  limit: 3,
};

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return { loading: true, error: null, users: [] };
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return { loading: false, error: null, users: action.payload };
    case UserActionTypes.FETCH_USERS_ERROR:
      return { loading: false, error: action.payload, users: [] };
    case UserActionTypes.SET_USERS:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};
