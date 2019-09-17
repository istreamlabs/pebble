import React from 'react';
import { shallow } from 'enzyme';

import Metric from './Metric';

describe('Metric', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<Metric value={54321} title="test" />);
    }).not.toThrow();
  });

  describe('renderValue', () => {
    it('calls formatter if value is a number', () => {
      const customFormatter = jest
        .fn()
        .mockImplementation(() => <div>test</div>);
      shallow(
        <Metric value={3} formatter={customFormatter} title="test" />,
      );
      expect(customFormatter).toHaveBeenCalledTimes(1);
      expect(customFormatter).toHaveBeenCalledWith(3, {
        formatter: customFormatter,
        title: 'test',
        value: 3,
      });
    });
    it('calls formatter if value is a string', () => {
      const customFormatter = jest
        .fn()
        .mockImplementation(() => <div>test</div>);
      shallow(
        <Metric value="3" formatter={customFormatter} title="test" />,
      );
      expect(customFormatter).toHaveBeenCalledTimes(1);
      expect(customFormatter).toHaveBeenCalledWith('3', {
        formatter: customFormatter,
        title: 'test',
        value: '3',
      });
    });
    it('returns the node and does not call formatter if value is not a number or string', () => {
      const customFormatter = jest
        .fn()
        .mockImplementation(() => <div>test</div>);
      const wrapper = shallow(
        <Metric
          value={<div id="test">test</div>}
          formatter={customFormatter}
          title="test"
        />,
      );
      expect(customFormatter).toHaveBeenCalledTimes(0);
      expect(wrapper.find('div#test')).toHaveLength(1);
    });
  });
});
