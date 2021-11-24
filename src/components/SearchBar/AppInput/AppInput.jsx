import React from 'react';
import './AppInput.scss';

function AppInput() {
  return (
    <form action="submit">
      <input type="text" placeholder="What do you want to eat ?" />
      <button>Search</button>
    </form>
  );
}

export default AppInput;
