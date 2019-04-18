import React from 'react';
import { shallow } from 'enzyme';

import Table from './Table';
import TableRow from './TableRow';
import TableCell from './TableCell';

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
    it('sets the widths of each column in th body', () => {
      const wrapper = shallow(<Table data={DATA} columnWidths={['50px', '51px', '52px', '53px']} />);
      expect(wrapper.find(TableCell).at(0).prop('basis')).toBe('50px');
      expect(wrapper.find(TableCell).at(1).prop('basis')).toBe('51px');
      expect(wrapper.find(TableCell).at(2).prop('basis')).toBe('52px');
      expect(wrapper.find(TableCell).at(3).prop('basis')).toBe('53px');
    });
    it('sets flex to false if there column widths', () => {
      const wrapper = shallow(<Table data={DATA} columnWidths={['50px', '51px', '52px', '53px']} />);
      expect(wrapper.find(TableCell).at(0).prop('flex')).toBe(false);
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
      expect(wrapper.find(TableCell).at(0).prop('basis')).toBe('50px');
      expect(wrapper.find(TableCell).at(1).prop('basis')).toBe('51px');
      expect(wrapper.find(TableCell).at(2).prop('basis')).toBe('52px');
      expect(wrapper.find(TableCell).at(3).prop('basis')).toBe('53px');
    });
  });
});
