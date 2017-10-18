import React from 'react';
import { shallow } from 'enzyme';
import LastConverted from './LastConverted';

describe('rendering <LastConverted />', () => {
  const wrapper = shallow(<LastConverted date="2017-05-06" base="GBP" quote="USD" conversionRate="1.1203" />);

  it('should render a <Text /> component', () => {
    expect(wrapper.find('Text')).toHaveLength(1);
  });

  it('should render the base currency', () => {
    expect(wrapper.find('Text').contains('GBP')).toBe(true);
  });

  it('should render the quote currency', () => {
    expect(wrapper.find('Text').contains('USD')).toBe(true);
  });

  it('should render the conversion rate', () => {
    expect(wrapper.find('Text').contains('1.1203')).toBe(true);
  });

  it('should render the date for the conversion rate', () => {
    expect(wrapper.find('Text').contains('May 6, 2017')).toBe(true);
  });
});
