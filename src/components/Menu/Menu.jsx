import React, { useEffect } from 'react';
import List from './List/List';
import './Menu.scss';

import { useDispatch } from 'react-redux';
import { fetchFoods } from '../../store/actions';

function Menu() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFoods());
  }, [dispatch]);

  return (
    <section>
      <p>All items 8798</p>
      <List />
    </section>
  );
}

export default Menu;
