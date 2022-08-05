import {combineReducers, createStore} from 'redux';
import mainReducer from './reducer/mainReducer';

const rootReducer = combineReducers({mainReducer: mainReducer});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
