import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from '../reducers/types';

import axios from 'axios';

export const register =
  (firstName, lastName, emailAddress, phoneNumber, role, isPrimaryAgent) =>
  async (dispatch) => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.post(
        'https://knockin.getsandbox.com/account',
        {
          firstName,
          lastName,
          emailAddress,
          phoneNumber,
          role,
          isPrimaryAgent,
        },
        config
      );

      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      });

      localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload: error.response.data.detail,
      });
    }
  };
