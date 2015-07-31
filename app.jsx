// -- Dependencies
var React     = require('react');
var SPARouter = require('spa-router');
var Header    = require('./components/header');
var Footer    = require('./components/footer');
var Todo      = require('./components/todo');
var Model     = require('./models/task');

var App = React.createClass({
  // -- States & Properties
  getInitialState: function() {
    return ({ todos: [], context : 'find' })
  },

  // -- Lifecycle
  componentDidMount: function() {
    Model.observe(function(state) {
      this.setState({ pending : Model.active().length });
    }.bind(this));

    SPARouter.listen({
      '/'         : this.setState.bind(this, { context: 'find' }),
      '/active'   : this.setState.bind(this, { context: 'active' }),
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
            Model[this.state.context]().map(function(todo) {
              return ( <Todo key={todo.uid} data={todo} /> );
            })
          }
          </ul>
        </section>
        <Footer context={this.state.context} pending={this.state.pending}/>
      </div>
    )
  }
});

React.render(<App />, document.getElementsByClassName('todoapp')[0]);
