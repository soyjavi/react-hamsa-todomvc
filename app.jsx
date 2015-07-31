// -- Dependencies
var React     = require('react');
var SPARouter = require('spa-router');
// -- Components
var Header    = require('./components/header');
var Footer    = require('./components/footer');
var Todo      = require('./components/todo');
// -- Model
var Model      = require('./models/task');

var App = React.createClass({
  // -- States & Properties
  getInitialState: function() {
    return ({ todos: [], context : 'find' })
  },

  // -- Lifecycle
  componentDidMount: function() {
    Model.observe(function(state) {
      this.setState({ todos: Model.find() });
    }.bind(this));
    SPARouter.listen({
      '/'         : this.setState.bind(this, { context: 'find' }),
      '/active'   : this.setState.bind(this, { context: 'uncompleted' }),
      '/completed': this.setState.bind(this, { context: 'completed' })
    });
    SPARouter.path('');
  },

  // -- Events
  onToggleTodos: function(event) {
    var todos = Model.find();
    for (var i = 0, len = todos.length; i < len; i++) {
      todos[i].completed = event.target.checked
    }
  },

  // -- Render
  render: function() {
    return (
      <div>
        <Header />
        <section className='main'>
          <input className='toggle-all' type='checkbox' onClick={this.onToggleTodos} />
          <label htmlFor='toggle-all'>Mark all as complete</label>
          <ul className='todo-list'>
          {
            Model[this.state.context]().map(function(todo, index) {
              return (
                <Todo key={todo.uid} todo={todo} />
              );
            }.bind(this))
          }
          </ul>
        </section>
        <Footer context={this.state.context} />
      </div>
    )
  }
});

React.render(<App />, document.getElementsByClassName('todoapp')[0]);
