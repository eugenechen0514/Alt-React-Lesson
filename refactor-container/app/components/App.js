import React from 'react';
import AppStore from '../stores/AppStore';
import Page from './Page'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentWillReceiveProps(nextProps) {}

  render() {
    return (
      <div>
      <h1>Hello {this.props.name}</h1>
      <Page title="我是 Page"/>
      </div>
      );
  }
}

export default App;
