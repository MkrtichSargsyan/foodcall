import * as types from '../types';

const initialState = {
  foods: [],
  loading: false,
  error: null,
};

const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_FOODS_START:
      return { ...state, loading: true };
    case types.FETCH_FOODS_SUCCESS:
  console.log(action,'aaa');

      return { ...state, loading: false, foods: action.foodsList };
    case types.FETCH_FOODS_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default foodReducer;
