import React from 'react';
import Task from '../models/task';

class Header extends React.Component {

  handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault()
      new Task({ name: event.target.value });
      event.target.value = '';
    }
  };

  render() {
    return (
      <header className='header'>
        <h1>todos</h1>
        <input
          autofocus
          className='new-todo'
          onKeyDown={this.handleKeyDown}
          placeholder='What needs to be done?'
        />
      </header>
    )
  }
};

export default Header;
