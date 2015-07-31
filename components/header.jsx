var React = require('react');
var Model = require('../models/task');

module.exports = React.createClass({
  // -- Events
  onKeyDown: function(event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      var el = this.refs.input.getDOMNode();
      new Model({ name: el.value.trim() });
      el.value = '';
    }
  },

  // -- Render
  render: function() {
    return (
      <header className='header'>
        <h1>todos</h1>
        <input ref='input' className='new-todo' placeholder='What needs to be done?' autofocus
               onKeyDown={this.onKeyDown}/>
      </header>
    )
  }
});
