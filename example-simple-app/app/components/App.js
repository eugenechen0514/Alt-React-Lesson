import React from 'react';
import AppStore from '../stores/AppStore';

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
      </div>
      );
  }
}

export default App;
