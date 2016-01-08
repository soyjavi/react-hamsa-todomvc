import React from 'react';
import ReactDOM from 'react-dom';
import SPARouter from 'spa-router';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import Model from './models/task';

class App extends React.Component {

  state = {
    context: 'all',
    pending: 0
  };

  componentDidMount() {
    Model.observe(function(state) {
      this.setState({ pending: Model.active().length });
    }.bind(this));

    SPARouter.listen({
      '/': this.setState.bind(this, { context: 'all' }),
      '/active': this.setState.bind(this, { context: 'active' }),
      '/completed': this.setState.bind(this, { context: 'completed' })
    });
    SPARouter.path('');
  }

  render() {
    return (
      <div>
        <Header />
        <Content dataSource={Model[this.state.context]()} />
        <Footer context={this.state.context} pending={this.state.pending} />
      </div>
    )
  }
};

ReactDOM.render(<App />, document.getElementsByClassName('todoapp')[0]);
