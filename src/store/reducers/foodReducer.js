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
      // const foods = action.foodsList.map((el) => ({
      //   image: el.resipe.image,
      //   label: el.resipe.label,
      //   diets: el.resipe.healthLabels,
      //   totalTime: el.resipe.totalTime,
      //   cuisine: el.resipe.cuisineType,
      //   dishType: el.resipe.dishType,
      //   mealType: el.resipe.mealType,
      //   calories: el.resipe.calories,
      //   imgredients: el.resipe.ingredientLines,
      // }));

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
      }));
      console.log(foods);

      return { ...state, loading: false, foods: foods };
    case types.FETCH_FOODS_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default foodReducer;
