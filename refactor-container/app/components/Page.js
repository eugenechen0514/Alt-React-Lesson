import React from 'react';
import PageActions from '../actions/PageActions';
import PageStore from '../stores/PageStore';

class Page extends React.Component {
  constructor(props) {
    super(props);

    // 從 store 拿初始資料
    this.state = PageStore.getState();

    // bind this for onChange
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    // component 監聽 store的改變，若有改變叫起 this.onChange
    PageStore.listen(this.onChange);
  }

  componentWillUnmount() {
    //  component 取消監聽 store的改變
    PageStore.unlisten(this.onChange);
  }

  onChange(state) {
    // store的發生改變時 component 重新渲染
    this.setState(state);
  }

  _handleCilck() {
    PageActions.getContent();
  }

  render() {
    return (
      <div>
        <div>title: {this.props.title}</div>
        <div>content: {this.state.content}</div>
        <button onClick={this._handleCilck}>點我取內容</button>
      </div>
      );
  }
}

Page.propTypes = {
  title: React.PropTypes.string.isRequired
};

export default Page;
