import alt from '../alt';

class PageActions {
  constructor() {
    this.generateActions(
      'getContentSuccess',
    );
  }

  getContent() {
    this.actions.getContentSuccess("我是內容");
  }
}

export default alt.createActions(PageActions);
