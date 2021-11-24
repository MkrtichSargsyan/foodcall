import axios from 'axios';
import * as types from './types';

const fetchFoodsStart = () => ({
  type: types.FETCH_FOODS_START,
});

const fetchFoodsSuccess = (foodsList) => ({
  type: types.FETCH_FOODS_SUCCESS,
  foodsList,
});

const fetchFoodsError = (e) => ({
  type: types.FETCH_FOODS_ERROR,
  error: e,
});

export const fetchFoods = (url) => async (dispatch) => {
  dispatch(fetchFoodsStart());
  console.log(url);
  try {
    const response = await axios.get(url);
    console.log(response,'sssssss');
    dispatch(fetchFoodsSuccess(response.data));
  } catch (e) {
    dispatch(fetchFoodsError(e));
  }
};
