import React from 'react';
import AppInput from './AppInput/AppInput';
import SButtons from './SButtons/SButtons';

import './SearchBar.scss';

function SearchBar() {
  return (
    <nav>
      <div className="logo">
        <strong>Food Call</strong>
      </div>
      <AppInput />
      <SButtons />
    </nav>
  );
}

export default SearchBar;
