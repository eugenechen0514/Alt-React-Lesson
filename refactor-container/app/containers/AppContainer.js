import React from 'react';
import AltContainer from 'alt-container';
import App from '../components/App';
import AppStore from '../stores/AppStore';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AltContainer store={AppStore}>
        <App />
      </AltContainer>
      );
  }
}

export default AppContainer;
