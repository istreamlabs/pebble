import React from 'react';
import { shallow } from 'enzyme';

import Breadcrumbs from './Breadcrumbs';
import Icon from '../Icon/Icon';

describe('Breadcrumbs', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<Breadcrumbs />);
    }).not.toThrow();
  });

  describe('Children', () => {
    it('renders no children', () => {
      const wrapper = shallow(<Breadcrumbs />);
      expect(wrapper.children()).toHaveLength(0);
    });
    it('renders correct number of children', () => {
      const wrapper = shallow(
        <Breadcrumbs>
          <div />
          <div />
          <div />
        </Breadcrumbs>,
      );
      expect(wrapper.children()).toHaveLength(5);
      expect(wrapper.find(Icon)).toHaveLength(2);
    });
  });
});
