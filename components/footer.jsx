var React = require('react/addons');
var Model = require('../models/task');

module.exports = React.createClass({
  // -- States & Properties
  getInitialState: function() {
    return { uncompleted : 0 }
  },

  // -- Lifecycle
  componentDidMount: function() {
    Model.observe(function(state) {
      this.setState({ uncompleted: Model.uncompleted().length });
    }.bind(this));
  },

  // -- Events
  onClearCompleted: function(event) {
    event.preventDefault()
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
        <span className='todo-count'><strong>{this.state.uncompleted}</strong> item left</span>
        <ul className='filters'>
          <li>
            <a className={cx({selected: (context === 'find')})} href='#/'>All</a>
          </li>
          <li>
            <a className={cx({selected: (context === 'uncompleted')})} href='#/active'>Active</a>
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
