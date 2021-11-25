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
  try {
    var options = {
      method: 'GET',
      url: 'https://edamam-recipe-search.p.rapidapi.com/search',
      params: { q: 'all', to: '100' },
      headers: {
        'x-rapidapi-host': 'edamam-recipe-search.p.rapidapi.com',
        'x-rapidapi-key': `${process.env.REACT_APP_EDAMAM_KEY}`,
      },
    };
    const response = await axios
      .request(options)
      .then((response) => response.data.hits);

    dispatch(fetchFoodsSuccess(response));
  } catch (e) {
    dispatch(fetchFoodsError(e));
  }
};

export const filterFoodItems = (payload) => ({
  type: types.FILTER_FOOD_ITEMS,
  payload,
});
