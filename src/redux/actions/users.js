import axios from "axios";
import { SET_USERS, SET_SEARCH, SET_SORT_USERS } from "../constants";

export const fetchUsers = () => {
  return async (dispatch) => {
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

export const setUsers = (users) => ({
  type: SET_USERS,
  payload: users,
});

export const setSearchName = (name) => ({
  type: SET_SEARCH,
  payload: name,
});

export const setSortUsers = (users) => ({
  type: SET_SORT_USERS,
  payload: users,
});