import React from 'react';
import { browserHistory, IndexRoute, Route } from 'react-router';
import App from './containers/AppContainer';

export default (
<Route path='/'>
      <IndexRoute component={App} />
</Route>
);
