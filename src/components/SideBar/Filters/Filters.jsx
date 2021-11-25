import React from 'react';
import './Filters.scss';

import { filterFoodItems } from '../../../store/actions';
import { useDispatch } from 'react-redux';

function Filters({ title, items }) {
  const dispatch = useDispatch();

  return (
    <div className="filterBlock">
      <h4 className="filterTitle">{title}</h4>
      {items.map((item, i) => (
        <ul key={i}>
          <li>
            <input
              className="filterCheckbox"
              type="checkbox"
              id={item}
              name={item}
              onClick={(e) =>
                dispatch(
                  filterFoodItems({
                    title: title,
                    name: e.target.name,
                    checked: e.target.checked,
                  })
                )
              }
            />
            <label className="filterLabel" htmlFor={item}>
              {item}
            </label>
          </li>
        </ul>
      ))}
      <p className="moreFilters">More (12)</p>
    </div>
  );
}

export default Filters;
