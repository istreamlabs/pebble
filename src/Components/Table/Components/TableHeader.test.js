import React from 'react';
import { shallow } from 'enzyme';

import TableHeader from './TableHeader';
import TableCell from './TableCell';

describe('TableHeader', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<TableHeader />); }).not.toThrow();
  });
  it('renders the correct number of children', () => {
    const wrapper = shallow(<TableHeader>
      <TableCell>1</TableCell>
      <TableCell>2</TableCell>
      <TableCell>3</TableCell>
    </TableHeader>);
    expect(wrapper.find(TableCell)).toHaveLength(3);
  });
});
