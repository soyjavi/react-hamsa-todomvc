var React = require('react');

module.exports = React.createClass({

  propTypes: {
    data: React.PropTypes.object
  },

  getInitialState: function() {
    return ({
      data      : this.props.data,
      editing   : false,
      value     : this.props.data.name,
    })
  },

  onToggle: function() {
    this.state.data.completed = !this.state.data.completed
  },

  onEdit: function() {
    this.setState({ editing: true });
  },

  onDestroy: function() {
    this.state.data.destroy()
  },

  onKeyDown: function(event) {
    if (event.keyCode === 13) {
      this.state.data.name = event.target.value;
      this.setState({ editing: false });
    }
  },

  onChange: function(event) {
    this.setState({ value: event.target.value });
  },

  render: function() {
    var className = '';
    if (this.state.data.completed) { className += ' completed' }
    if (this.state.editing) { className += ' editing' }

    return (
      <li className={className}>
        <div className='view'>
          <input className='toggle' type='checkbox'
            checked={this.state.data.completed}
            onChange={this.onToggle} />
          <label onDoubleClick={this.onEdit}>{this.state.value}</label>
          <button className='destroy' onClick={this.onDestroy}></button>
        </div>
        <input type='text' className='edit' value={this.state.value}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown} />
      </li>
    )
  }
});
