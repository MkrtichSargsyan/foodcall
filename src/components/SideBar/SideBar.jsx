import React from 'react';
import Filters from './Filters/Filters';
import './Sidebar.scss';

import filterData from './filters.json';

function SideBar() {
  return (
    <aside className="sidebar">
      {filterData.map((el) => (
        <Filters key={el.id} {...el} />
      ))}
    </aside>
  );
}

export default SideBar;
