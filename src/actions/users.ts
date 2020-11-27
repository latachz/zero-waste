import {LOGIN_USER_SUCCESS, LOGIN_USER_REQUEST} from '../constants/actionTypes';
import {signIn} from '../api/users';

export const loginUser = (email: string, password: string) => async (
  dispatch: any,
) => {
  dispatch({type: LOGIN_USER_REQUEST});

  try {
    const res = await signIn(email, password);
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: {
        user: res.user,
      },
    });
  } catch (error) {
    console.error(error);
  }
};
