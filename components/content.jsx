import React from 'react';
import Todo from './todo';

class Content extends React.Component {

  static propTypes = {
    dataSource: React.PropTypes.array
  };

  handleToggle = (event) => {
    let items = this.props.dataSource;
    for (let i = 0, len = items.length; i < len; i++) {
      items[i].completed = event.target.checked
    }
  };

  render() {
    return (
      <section className='main'>
        <input className='toggle-all' type='checkbox' onClick={this.handleToggle} />
        <label htmlFor='toggle-all'>Mark all as complete</label>
        <ul className='todo-list'>
        {
          this.props.dataSource.map(function(item, index) {
            return ( <Todo key={item.uid} data={item} /> );
          })
        }
        </ul>
      </section>
    )
  }
};

export default Content;
