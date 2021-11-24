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
      const recipes = action.foodsList.map((el) => el.recipe);

      const foods = recipes.map((el) => ({
        image: el.image,
        label: el.label,
        diets: el.healthLabels,
        totalTime: el.totalTime,
        cuisine: el.cuisineType,
        dishType: el.dishType,
        mealType: el.mealType,
        calories: el.calories,
        imgredients: el.ingredientLines,
        stars: Math.round((Math.random() * 4 + 1) * 10) / 10,
        price: Math.floor(Math.random() * 1000) + 20,
        isFree: Math.random() > 0.7,
      }));


      return { ...state, loading: false, foods: foods };
    case types.FETCH_FOODS_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default foodReducer;
