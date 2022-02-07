import axios from "axios";
import { AppDispatch } from "../index";
import { SET_USERS, SET_SEARCH, SET_SORT_USERS } from "../constants";
import { SetUsersAction, SetSearchNameAction, SetSortUsersAction } from './../types';

export const fetchUsers = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      let names = response.data.map((item) => item.name);
      dispatch(setUsers(names));
    } catch (e) {
      console.log(e);
    }
  };
};

export const setUsers = (users: Array<Object>): SetUsersAction => ({
  type: SET_USERS,
  payload: users,
});

export const setSearchName = (name: string): SetSearchNameAction => ({
  type: SET_SEARCH,
  payload: name,
});

export const setSortUsers = (users: Array<Object>): SetSortUsersAction => ({
  type: SET_SORT_USERS,
  payload: users,
});