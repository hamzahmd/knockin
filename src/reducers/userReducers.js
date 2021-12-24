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
} from './types';

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getUserReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return { loading: true };
    case GET_USER_SUCCESS:
      return { loading: false, user: action.payload };
    case GET_USER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getConversationsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CONVERSATIONS_REQUEST:
      return { loading: true };
    case GET_CONVERSATIONS_SUCCESS:
      return { loading: false, conversations: action.payload };
    case GET_CONVERSATIONS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getConversationsByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CONVERSATIONS_BY_ID_REQUEST:
      return { loading: true };
    case GET_CONVERSTATIONS_BY_ID_SUCCESS:
      return { loading: false, conversationsById: action.payload };
    case GET_CONVERSTATIONS_BY_ID_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const sendMessageReducer = (state = {}, action) => {
  switch (action.type) {
    case SEND_MESSAGE_REQUEST:
      return { loading: true };
    case SEND_MESSAGE_SUCCESS:
      return { loading: false, messageSent: action.payload };
    case SEND_MESSAGE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
