import React from 'react';
import './Food.scss';

function Food({ data }) {
  const { mealtype, dishType } = data;
  return (
    <div className="food">
      <article>
        <img className="foodImage" src={data.image} alt="alt" />
        <div>
          <h4>{data.label}</h4>
          <span className="subItem">{dishType && dishType[0]}</span>
          <span className="subItem">{mealtype && mealtype[0]}</span>
          <div className="time">
            <img
              src="https://img.icons8.com/material-outlined/24/000000/clock--v1.png"
              alt="time"
            />
            {data.totalTime} m
          </div>
        </div>
      </article>

      <article>
        <div className="star">
          <img
            src="https://img.icons8.com/color/48/000000/star--v1.png"
            alt="star"
          />
          <span>{data.stars}</span>
        </div>
        <div className="price">
          <p>
            <img
              src="https://img.icons8.com/fluency-systems-regular/48/000000/delivery.png"
              alt="delivery"
            />

            <span style={{ color: data.isFree && 'green' }}>
              {data.isFree ? 'Free' : `$${data.delivery}`}
            </span>
          </p>
          <p>Min. $ {data.price}</p>
        </div>
      </article>
    </div>
  );
}

export default Food;
