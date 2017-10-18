/* global describe,it,expect */
import React from 'react';
import { shallow } from 'enzyme';
import LastConverted from './LastConverted';

describe('rendering <LastConverted />', () => {
  const minProps = {
    date: '2017-05-06',
    base: 'GBP',
    quote: 'USD',
    conversionRate: '1.1203',
  };

  const wrapper = shallow(<LastConverted {...minProps} />);

  it('should render without exploding', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should render a <Text /> component', () => {
    expect(wrapper.find('Text')).toHaveLength(1);
  });

  it('should render the base currency', () => {
    expect(shallow(<LastConverted {...minProps} base="XYZ" />)
      .find('Text')
      .contains('XYZ')).toBe(true);
  });

  it('should render the quote currency', () => {
    expect(shallow(<LastConverted {...minProps} quote="XYZ" />)
      .find('Text')
      .contains('XYZ')).toBe(true);
  });

  it('should render the conversion rate', () => {
    expect(shallow(<LastConverted {...minProps} conversionRate="91.919191" />)
      .find('Text')
      .contains('91.919191')).toBe(true);
  });

  it('should render the date for the conversion rate', () => {
    expect(shallow(<LastConverted {...minProps} />)
      .find('Text')
      .contains('May 6, 2017')).toBe(true);
  });
});
