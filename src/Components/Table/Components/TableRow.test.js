import React from 'react';
import { shallow } from 'enzyme';
import { useMobileLayout } from '../../../Hooks';

import TableRow from './TableRow';

jest.mock('../../../Hooks/UseMobileLayout');

describe('TableRow', () => {
  beforeEach(() => {
    useMobileLayout.mockClear();
    useMobileLayout.mockImplementation(() => false);
  });

  it('renders without crashing', () => {
    expect(() => {
      shallow(<TableRow />);
    }).not.toThrow();
  });

  it('renders blank children without crashing', () => {
    expect(() => {
      shallow(
        <TableRow>
          {null}
          <div />
        </TableRow>,
      );
    }).not.toThrow();
  });

  it('sets the direction to row when not mobile', () => {
    const wrapper = shallow(<TableRow />);
    expect(wrapper.prop('direction')).toBe('row');
    expect(wrapper.prop('margin')).toStrictEqual(['4 0 0 0', '0']);
  });
});
