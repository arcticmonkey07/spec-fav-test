import { SET_USERS, SET_SEARCH, SET_SORT_USERS } from "../constants";
import { UsersActionTypes, UsersState } from './../types';

const initialState: UsersState = {
  users: [],
  searchName: "",
};

const users = (state = initialState, action: UsersActionTypes): UsersState => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case SET_SEARCH:
      return {
        ...state,
        searchName: action.payload,
      };
    case SET_SORT_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default users;
