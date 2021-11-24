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

  const { foods, loading } = useSelector((state) => state.foodReducer);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section>
          <p>Total - {foods.length}</p>
          <List foods={foods} />
        </section>
      )}
    </>
  );
}

export default Menu;
