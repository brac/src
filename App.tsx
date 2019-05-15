import * as React from 'react';
import {render} from 'react-dom';
import List from './list';

interface State {

}

export default class App extends React.Component {
  state: State = {

  };

  render () {
    return (
      <div className="testClass">
        {/*TODO: Build the data importer element*/}
        <List/>
      </div>
    )
  }
}


render (<App/>, document.getElementById('main'));