import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { 
  userRegisterReducer, 
  getUserReducer,
  getConversationsByIdReducer,
  getConversationsReducer,
  sendMessageReducer 
} from './reducers/userReducers';

const reducer = combineReducers({
  userRegister: userRegisterReducer,
  getUser: getUserReducer,
  getConversations: getConversationsReducer,
  getConversationsById: getConversationsByIdReducer,,
  sendMessage: sendMessageReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  userRegister: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
