import React from 'react';
import { shallow } from 'enzyme';
import Logo from './Logo';

describe('rendering <Logo />', () => {
  const wrapper = shallow(<Logo />);
  console.log(wrapper.debug());
  it('should render a <View />', () => {
    expect(wrapper.find('View')).toHaveLength(1);
  });

  it('should render the background', () => {
    expect(wrapper.find('AnimatedComponent')).toHaveLength(1);
  });

  it('should render the logo');

  it('should render the logo color');

  it('should render the logo color change');

  it('should get smaller when the keyboard opens');
});
