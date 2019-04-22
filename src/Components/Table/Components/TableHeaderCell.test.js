import React from 'react';
import { mount, shallow } from 'enzyme';
import { useMobileLayout } from '../../../Hooks';
import TableHeaderCell from './TableHeaderCell';

import Button from '../../Button/Button';
import Icon from '../../Icon/Icon';

jest.mock('../../../Hooks/UseMobileLayout');

describe('TableHeaderCell', () => {
  beforeEach(() => {
    useMobileLayout.mockClear();
    useMobileLayout.mockImplementation(() => (false));
  });
  it('renders without crashing', () => {
    expect(() => { shallow(<TableHeaderCell />); }).not.toThrow();
  });

  it('sets the width to 100% if viewed in mobile sized viewport, even if specified', () => {
    useMobileLayout.mockImplementation(() => (true));
    const wrapper = shallow(<TableHeaderCell width="20px" />);
    expect(wrapper.prop('width')).toBe('100%');
  });
  it('sets the width if specified', () => {
    const wrapper = shallow(<TableHeaderCell width="20px" />);
    expect(wrapper.prop('width')).toBe('20px');
    expect(wrapper.prop('flex')).toBe(undefined);
  });
  it('sets the flex to grow if width is 100%', () => {
    const wrapper = shallow(<TableHeaderCell width="100%" />);
    expect(wrapper.prop('flex')).toBe('grow');
  });

  describe('getSortDirectionArrow()', () => {
    it('sets arrow to up when sortDirection is ASC', () => {
      const wrapper = shallow(<TableHeaderCell onSort={() => {}} sortDirection="ASC" />);
      expect(wrapper.find(Icon).prop('name')).toContain('arrow-small-up');
    });
    it('sets arrow to down when sortDirection is DESC', () => {
      const wrapper = shallow(<TableHeaderCell onSort={() => {}} sortDirection="DESC" />);
      expect(wrapper.find(Icon).prop('name')).toContain('arrow-small-down');
    });
    it('does not have an direction icon when sortDirection is null', () => {
      const wrapper = shallow(<TableHeaderCell onSort={() => {}} />);
      expect(wrapper.find(Icon)).toHaveLength(0);
    });
  });

  describe('onSortClick()', () => {
    const mockFunc = jest.fn();
    it('sets onSort to the Button', () => {
      const wrapper = mount(<TableHeaderCell onSort={mockFunc} sortDirection="ASC" />);
      wrapper.find(Button).simulate('click');
      expect(mockFunc).toBeCalledTimes(1);
    });
  });

  it('sets the width to 100% if viewed in mobile sized viewport, even if specified', () => {
    useMobileLayout.mockImplementation(() => (true));
    const wrapper = shallow(<TableHeaderCell width="20px" />);
    expect(wrapper.prop('width')).toBe('100%');
  });
  it('sets the width if specified', () => {
    const wrapper = shallow(<TableHeaderCell width="20px" />);
    expect(wrapper.prop('width')).toBe('20px');
  });
});
