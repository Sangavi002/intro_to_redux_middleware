import { INCREMENT_TYPE, DECREMENT_TYPE } from './actionType';

export const countReducer = (state = { count: 0 }, action) => {

    switch (action.type) {
      case INCREMENT_TYPE:
        return {
          ...state,
          count: state.count + action.payload
        };
      case DECREMENT_TYPE:
        return {
          ...state,
          count: state.count -  action.payload
        };
      default:
        return state;
    }
  };
  