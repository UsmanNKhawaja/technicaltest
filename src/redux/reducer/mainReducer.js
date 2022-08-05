import {SAVE_DATA} from './types';

const initialState = {
  apiData: null,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_DATA:
      return {
        ...state,
        apiData: action.payload,
      };
    default:
      return state;
  }
};

export default mainReducer;
