import React from 'react';

function Header() {
  return (
    <div>
      <header className='App-header'>
        <img src='' className='App-logo' alt='logo' />
        <div>Added new line in main</div>
        <p>This is my header section H</p>
        <p>this line is from test branch</p>
        <p>This is line from dev</p>
        <a className='pp-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Header;
