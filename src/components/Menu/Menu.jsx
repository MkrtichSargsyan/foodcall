import React, { useEffect } from 'react';
import List from './List/List';
import './Menu.scss';

import { useDispatch } from 'react-redux';
import { fetchFoods } from '../../store/actions';

function Menu() {
  const dispatch = useDispatch();
  const KEY = `${process.env.REACT_APP_SPOONACULAR_KEY}`;
  useEffect(() => {
    dispatch(
      fetchFoods(
        `https://api.spoonacular.com/recipes/716429/information?apiKey=${KEY}&includeNutrition=true.`
      )
    );
  }, [KEY, dispatch]);

  return (
    <section>
      <p>All items 8798</p>
      <List />
    </section>
  );
}

export default Menu;
