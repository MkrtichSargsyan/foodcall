import React from 'react';
import './Filters.scss';

function Filters({ title, items }) {
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
