import React from 'react';
import './Filters.scss';

function Filters({ id, title, items }) {
  return (
    <div className="filterBlock">
      <h4 className="filterTitle">{title}</h4>
      {items.map((item) => (
        <ul>
          <li>
            <input className='filterCheckbox' type="checkbox" id={item} name={item} />
            <label className='filterLabel' for={item}>{item}</label>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Filters;
