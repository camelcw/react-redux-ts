export enum TodoActionTypes {
  FETCH_TODO = 'FETCH_TODO',
  FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS',
  FETCH_TODO_ERROR = 'FETCH_USERS_ERROR',
  SET_TODO = 'SET_TODO',
}

interface ITodo {
  id: number;
  title: string;
}

interface TodoState {
  todos: ITodo[];
  loading: boolean;
  error: null | string;
}

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
};

interface FetchTodoAction {
  type: TodoActionTypes.FETCH_TODO;
}

interface FetchTodoSuccessAction {
  type: TodoActionTypes.FETCH_TODO_SUCCESS;
  payload: ITodo[];
}

interface FetchTodoErrorAction {
  type: TodoActionTypes.FETCH_TODO_ERROR;
  payload: string;
}

interface SetTodoAction {
  type: TodoActionTypes.SET_TODO;
  payload: number;
}

export type TodoAction =
  | FetchTodoAction
  | FetchTodoErrorAction
  | FetchTodoSuccessAction
  | SetTodoAction;

export const todoReducer = (state = initialState, action: TodoAction) => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODO:
      return { ...state, loading: true };
    case TodoActionTypes.FETCH_TODO_SUCCESS:
      return { ...state, loading: false, todos: action.payload };
    case TodoActionTypes.FETCH_TODO_ERROR:
      return { ...state, loading: false, error: 'Error' };
    case TodoActionTypes.SET_TODO:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};
