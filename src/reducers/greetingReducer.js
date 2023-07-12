import { SET_GREETING } from '../actions/greetingActions';

// Initial state
const initialState = {
  greeting: null,
};

// Greeting reducer
const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GREETING:
      return {
        ...state,
        greeting: action.payload,
      };
    default:
      return state;
  }
};

export default greetingReducer;
