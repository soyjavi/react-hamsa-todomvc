var React = require('react');

module.exports = React.createClass({
  // -- States & Properties
  getInitialState: function() {
    return ({
      value     : this.props.todo.name,
      completed : this.props.todo.completed,
      editing   : false
    })
  },

  // -- Events
  onToggle: function(event) {
    this.props.todo.completed = !this.props.todo.completed,
    this.setState({ completed: this.props.todo.completed });
  },

  onEdit: function(event) {
    this.setState({ editing: true });
  },

  onDestroy: function(event) {
    this.props.todo.destroy()
  },

  onFieldKeyDown: function(event) {
    if (event.keyCode === 13) {
      this.setState({ editing: false });
    }
  },

  onChange: function(event) {
    this.setState({ value: event.target.value });
  },

  onSubmit: function(event) {
    this.props.todo.name = this.refs.field.getDOMNode().value
  },

  // -- Render
  render: function() {
    className  = ''
    if (this.props.todo.completed) {
      className += ' completed'
    }
    if (this.state.editing) {
      className += ' editing'
    }

    return (
      <li className={className}>
        <div className='view'>
          <input className='toggle' type='checkbox'
            checked={this.props.todo.completed}
            onChange={this.onToggle} />
          <label onDoubleClick={this.onEdit}>{this.state.value}</label>
          <button className='destroy' onClick={this.onDestroy}></button>
        </div>
        <input type='text' className='edit' value={this.state.value}
          ref='field'
          onBlur={this.onSubmit}
          onChange={this.onChange}
          onKeyDown={this.onFieldKeyDown} />
      </li>
    )
  }
});
