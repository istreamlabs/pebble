import React from 'react';
import { shallow } from 'enzyme';

import Table from './Table';

const DATA = [
  ['Sarah Brown', 31, '100 Broadway st. New York City, New York'],
  ['Jane Smith', 32, '100 Market st. San Francisco, California'],
  ['Joe Black', 33, '100 Macquarie st. Sydney, Australia'],
];

const COLUMNS = ['Name', 'Age', 'Address'];

describe('Table', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<Table />); }).not.toThrow();
  });
});
