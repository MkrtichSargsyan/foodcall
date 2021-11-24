import React from 'react';

import './Loader.scss'

function Loader() {
  return (
    <div className="loading">
      <div className="loading-text">LOADING</div>
      <div className="ring" />
    </div>
  );
}

export default Loader;