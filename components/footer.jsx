var React = require('react/addons');
var Model = require('../models/task');

module.exports = React.createClass({
  // -- States & Properties
  propTypes: {
    context: React.PropTypes.string,
    pending: React.PropTypes.number
  },

  getDefaultProps: function() {
    return ({ pending: 0 });
  },

  // -- Events
  onClearCompleted: function() {
    var tasks = Model.completed();
    for (var i = 0, len = tasks.length; i < len; i++) {
      tasks[i].destroy();
    }
  },

  // -- Render
  render: function() {
    var cx = React.addons.classSet
    var context = this.props.context
    return (
      <footer className='footer'>
        <span className='todo-count'><strong>{this.props.pending}</strong> item left</span>
        <ul className='filters'>
          <li>
            <a className={cx({selected: (context === 'find')})} href='#/'>All</a>
          </li>
          <li>
            <a className={cx({selected: (context === 'active')})} href='#/active'>Active</a>
          </li>
          <li>
            <a className={cx({selected: (context === 'completed')})} href='#/completed'>Completed</a>
          </li>
        </ul>
        <button className='clear-completed' onClick={this.onClearCompleted}>Clear completed</button>
      </footer>
    )
  }
});
