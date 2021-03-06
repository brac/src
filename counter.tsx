import * as React from 'react';
import Count from './count';
import './css/styles.css'

interface Props {}

interface State {
  count: number;
};

export default class Counter extends React.Component {
  state: State = {
    count: 0
  };

  increment = () => {
    this.setState({
      count : (this.state.count + 1)
    })
  };

  decrement = () => {
    this.setState(  {
      count : (this.state.count - 1)
    });
  };

  render () {
    return (
      <div className="testClass">
        <Count count={this.state.count}/>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}

