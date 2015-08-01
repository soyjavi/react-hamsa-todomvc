var React = require('react');
var Task = require('../models/task');

module.exports = React.createClass({

  onKeyDown: function(event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      new Task({ name: event.target.value });
      event.target.value = '';
    }
  },

  render: function() {
    return (
      <header className='header'>
        <h1>todos</h1>
        <input className='new-todo' placeholder='What needs to be done?'
               onKeyDown={this.onKeyDown} autofocus/>
      </header>
    )
  }
});
