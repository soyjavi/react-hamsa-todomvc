var React     = require('react');
var SPARouter = require('spa-router');
var Header    = require('./components/header');
var Content   = require('./components/content');
var Footer    = require('./components/footer');
var Model     = require('./models/task');

var App = React.createClass({

  getInitialState: function() {
    return ({ todos: [], context : 'find' })
  },

  componentDidMount: function() {
    Model.observe(function(state) {
      this.setState({ pending : Model.active().length });
    }.bind(this));

    SPARouter.listen({
      '/'         : this.setState.bind(this, { context: 'all' }),
      '/active'   : this.setState.bind(this, { context: 'active' }),
      '/completed': this.setState.bind(this, { context: 'completed' })
    });
    SPARouter.path('');
  },

  render: function() {
    return (
      <div>
        <Header />
        <Content dataSource={Model[this.state.context]()} />
        <Footer context={this.state.context} pending={this.state.pending} />
      </div>
    )
  }
});

React.render(<App />, document.getElementsByClassName('todoapp')[0]);
