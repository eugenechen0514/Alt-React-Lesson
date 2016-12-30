import alt from '../alt';
import AppActions from '../actions/AppActions';

class AppStore {
  constructor() {
    this.bindActions(AppActions);

    this.name = "EugeneChen";
  }
}

export default alt.createStore(AppStore);
