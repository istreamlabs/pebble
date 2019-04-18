import React from 'react';
import { shallow } from 'enzyme';

import Table, { TableRow, TableCell } from './Table';

const DATA = [{
  name: 'Vicki Rohlfs',
  job_title: 'VP Marketing',
  email: 'vrohlfs0@zdnet.com',
  company: 'Weimann Group'
}, {
  name: 'Nicol Tanslie',
  job_title: 'Systems Administrator III',
  email: 'ntanslie1@com.com',
  company: 'Jakubowski Inc'
}, {
  name: 'Stacia Mardlin',
  job_title: 'Senior Cost Accountant',
  email: 'smardlin2@storify.com',
  company: 'Jacobs, Kirlin and Runte'
}];

const COLUMNS = ['Name', 'Title', 'Email', 'Company'];

describe('Table', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<Table />); }).not.toThrow();
  });

  describe('table width', () => {
    it('sets the correct width to 100% by default', () => {
      const wrapper = shallow(<Table />);
      expect(wrapper.prop('width')).toBe('100%');
    });
    it('sets the width ', () => {
      const myWidth = '222px';
      const wrapper = shallow(<Table width={myWidth} />);
      expect(wrapper.prop('width')).toBe(myWidth);
    });
  });

  describe('renderBody', () => {
    it('renders correct number of rows if passed data prop', () => {
      const wrapper = shallow(<Table data={DATA} />);
      expect(wrapper.find(TableRow)).toHaveLength(3);
    });
  });

  describe('renderColumnHeaders', () => {
    it('renders column headers', () => {
      const wrapper = shallow(<Table columns={COLUMNS} />);
      expect(wrapper.find(TableCell)).toHaveLength(4);
    });
    it('will not render column headers if not specified', () => {
      const wrapper = shallow(<Table />);
      expect(wrapper.find(TableCell)).toHaveLength(0);
    });
    it('it renders column headers with specified widths', () => {
      const wrapper = shallow(<Table columns={COLUMNS} columnWidths={['50px', '51px', '52px', '53px']} />);
      expect(wrapper.find(TableCell).at(0).prop('width')).toBe('50px');
      expect(wrapper.find(TableCell).at(1).prop('width')).toBe('51px');
      expect(wrapper.find(TableCell).at(2).prop('width')).toBe('52px');
      expect(wrapper.find(TableCell).at(3).prop('width')).toBe('53px');
    });
  });
});

describe('TableRow', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<TableRow />); }).not.toThrow();
  });
});

describe('TableCell', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<TableCell />); }).not.toThrow();
  });

});
