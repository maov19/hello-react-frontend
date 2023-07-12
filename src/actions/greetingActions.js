import axios from 'axios';

// Action Types
export const SET_GREETING = 'SET_GREETING';

// Action Creator
export const setGreeting = (greeting) => ({
  type: SET_GREETING,
  payload: greeting,
});

// Async Action Creator
export const fetchRandomGreeting = () => {
  return (dispatch) => {
    return axios.get('http://localhost:3000/random-greeting')
      .then((response) => {
        dispatch(setGreeting(response.data.greeting));
      })
      .catch((error) => {
        // Handle error
        console.error('Error fetching random greeting:', error);
      });
  };
};
