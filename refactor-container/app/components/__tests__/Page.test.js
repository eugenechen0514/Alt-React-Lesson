import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

// 注入假 module
import PageActions from '../../actions/PageActions';
jest.mock('../../actions/PageActions');

// 測試目標
import Page from '../Page';

describe('<Page /> 外觀,', () => {
  var wrapper;
  beforeEach(() => {
    wrapper = shallow(<Page title="我是 Page" />);
  });

  it('快照保護 - 輸入 title = "我是 Page"', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
