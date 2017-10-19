import React from 'react';
import { shallow } from 'enzyme';
import Logo from './Logo';

const minProps = {
  tintColor: '#123456',
};

describe('rendering <Logo />', () => {
  const wrapper = shallow(<Logo {...minProps} />);

  it('should render a <View />', () => {
    expect(wrapper.find('View')).toHaveLength(1);
  });

  it('should render the background', () => {
    const children = wrapper.children('AnimatedComponent');
    expect(children).toHaveLength(1);
  });

  it('should render the logo', () => {
    const children = wrapper.children('AnimatedComponent');
    expect(children.childAt(0)).toHaveLength(1);
  });

  it('should render the logo color', () => {
    const logoWrapper = shallow(<Logo {...minProps} tintColor="#909090" />)
      .children('AnimatedComponent')
      .childAt(0);

    const styleWithTintColor = logoWrapper
      .prop('style')
      .find(obj => typeof obj === 'object' && obj.hasOwnProperty('tintColor'));

    expect(styleWithTintColor).toHaveProperty('tintColor', '#909090');
  });
});
