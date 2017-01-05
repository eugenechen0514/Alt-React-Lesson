import alt from '../alt';
import PageActions from '../actions/PageActions';

class PageStore {
  constructor() {
    this.bindActions(PageActions);
    this.content = "";
  }

  onGetContentSuccess(data) {
    this.content = data;
  }
}

export default alt.createStore(PageStore);
