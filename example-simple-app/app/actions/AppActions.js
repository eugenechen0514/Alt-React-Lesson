import alt from '../alt';

class AppActions {
  constructor() {
    this.generateActions(
      'updateAccount',
    );
  }
}

export default alt.createActions(AppActions);
