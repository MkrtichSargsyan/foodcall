import React from 'react';
import Food from '../Food/Food';

function List({ foods }) {
  return (
    <>
      {foods.map((el, i) => (
        <Food key={i} data={el} />
      ))}
    </>
  );
}

export default List;
