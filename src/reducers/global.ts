import {LOGIN_USER_SUCCESS} from '../constants/actionTypes';

const INITIAL_STATE = {
  currentUser: null,
  isLoggedIn: false,
};

export default function globalReducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        currentUser: action.payload.user,
      };

    default:
      return state;
  }
}
