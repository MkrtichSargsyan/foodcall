import React from 'react';
import Menu from '../components/Menu/Menu';
import SideBar from '../components/SideBar/SideBar';

import './SearchPage.scss';

function SearchPage() {
  return (
    <div className="searchPage">
      <SideBar />
      <Menu />
    </div>
  );
}

export default SearchPage;
