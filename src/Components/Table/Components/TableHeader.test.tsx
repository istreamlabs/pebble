import React from 'react';
import { shallow } from 'enzyme';
import { useMobileLayout } from '../../../Hooks';

import TableHeader from './TableHeader';
import TableCell from './TableCell';
import Heading from '../../Heading/Heading';

jest.mock('../../../Hooks/UseMobileLayout');

describe('TableHeader', () => {
  beforeEach(() => {
    useMobileLayout.mockClear();
    useMobileLayout.mockImplementation(() => false);
  });
  it('renders without crashing', () => {
    expect(() => {
      shallow(<TableHeader mobileLabel="heading" />);
    }).not.toThrow();
  });

  it('renders null if mobileLayout is true and mobileLabel is undefined', () => {
    useMobileLayout.mockImplementation(() => true);
    const wrapper = shallow(<TableHeader />);
    expect(wrapper.html()).toEqual(null);
  });

  describe('childrenMarkup', () => {
    it('returns the mobileLabel if viewed in mobile sized viewport', () => {
      useMobileLayout.mockImplementation(() => true);
      const wrapper = shallow(
        <TableHeader mobileLabel="mobile header" />,
      );
      expect(wrapper.find(Heading)).toHaveLength(1);
    });
    it('renders the correct number of children when not viewed on mobile', () => {
      const wrapper = shallow(
        <TableHeader mobileLabel="heading">
          <TableCell>1</TableCell>
          <TableCell>2</TableCell>
          <TableCell>3</TableCell>
        </TableHeader>,
      );
      expect(wrapper.children()).toHaveLength(3);
    });
  });
});
