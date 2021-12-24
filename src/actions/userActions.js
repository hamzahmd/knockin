import {
  GET_USER_FAIL,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  GET_CONVERSATIONS_REQUEST,
  GET_CONVERSATIONS_SUCCESS,
  GET_CONVERSATIONS_FAIL,
  GET_CONVERSATIONS_BY_ID_REQUEST,
  GET_CONVERSTATIONS_BY_ID_SUCCESS,
  GET_CONVERSTATIONS_BY_ID_FAIL,
  SEND_MESSAGE_REQUEST,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAIL,
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
        payload: error.response.data.message,
      });
    }
  };

export const getUserAction = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_USER_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.get(
      'https://knockin.getsandbox.com/account',
      config
    );

    dispatch({
      type: GET_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getConversationsAction = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_CONVERSATIONS_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.get(
      'https://knockin.getsandbox.com/conversations',
      config
    );

    dispatch({
      type: GET_CONVERSATIONS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_CONVERSATIONS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getConversationsByIdAction = (index) => async (dispatch) => {
  try {
    dispatch({
      type: GET_CONVERSATIONS_BY_ID_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.get(
      `https://knockin.getsandbox.com/conversations/${index}`,
      config
    );

    dispatch({
      type: GET_CONVERSTATIONS_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_CONVERSTATIONS_BY_ID_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const sendMessageAction =
  (conversationId, userId, message) => async (dispatch) => {
    try {
      dispatch({
        type: SEND_MESSAGE_REQUEST,
      });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.put(
        'https://knockin.getsandbox.com/conversations',
        { conversationId, userId, message },
        config
      );

      dispatch({
        type: SEND_MESSAGE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: SEND_MESSAGE_FAIL,
        payload: error.response.message,
      });
    }
  };
