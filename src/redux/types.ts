import { SET_USERS, SET_SEARCH, SET_SORT_USERS } from './constants';

export interface UsersState {
  users: Array<Object>;
  searchName: string;
}

export interface SetUsersAction {
  type: typeof SET_USERS,
  payload: Array<Object>
}

export interface SetSearchNameAction {
  type: typeof SET_SEARCH,
  payload: string
}

export interface SetSortUsersAction {
  type: typeof SET_SORT_USERS,
  payload: Array<Object>
}

export type UsersActionTypes = SetUsersAction | SetSearchNameAction | SetSortUsersAction;