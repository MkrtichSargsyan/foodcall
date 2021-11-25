import React, { useEffect } from 'react';
import List from './List/List';
import Loader from '../Loader/Loader';
import './Menu.scss';

import { useDispatch, useSelector } from 'react-redux';
import { fetchFoods } from '../../store/actions';

function Menu() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFoods());
  }, [dispatch]);

  const { foods, loading, filters } = useSelector((state) => state.foodReducer);

  let filteredFoods = foods;

  filters.length > 0 &&
    filters.forEach((filter) => {
      if (filter.name === 'bestrated') {
        filteredFoods = [...filteredFoods.filter((food) => food.stars >= 4)];
      } else if (filter.name === 'budgetrecipes') {
        filteredFoods = [...filteredFoods.filter((food) => food.price < 200)];
      } else if (filter.name === 'freedelivery') {
        filteredFoods = [...filteredFoods.filter((food) => food.isFree)];
      } else {
        filteredFoods = [
          ...filteredFoods.filter((food) =>
            food[filter.title].includes(filter.name.toLowerCase())
          ),
        ];
      }
    });

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section>
          <p className="total">Total - {filteredFoods.length}</p>
          <List foods={filteredFoods} />
        </section>
      )}
    </>
  );
}

export default Menu;
