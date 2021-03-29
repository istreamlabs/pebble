// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'enzyme' or its corresponding t... Remove this comment to see the full error message
import { mount, shallow } from 'enzyme';

// @ts-expect-error ts-migrate(6142) FIXME: Module './Checkbox' was resolved to '/Users/esjaas... Remove this comment to see the full error message
import Checkbox from './Checkbox';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../Icon/Icon' was resolved to '/Users/e... Remove this comment to see the full error message
import Icon from '../../Icon/Icon';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Checkbox', () => {
  it('renders without crashing', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      shallow(<Checkbox id="test" />);
    }).not.toThrow();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('checkboxIconMarkup', () => {
    it('if toggle, should not return anything', () => {
      const wrapper = mount(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Checkbox id="test" onChange={() => {}} toggle />,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.exists('svg')).toBe(false);
    });

    it('should not be disabled, checked, or invalid by default', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const wrapper = mount(<Checkbox id="test" />);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.exists('svg')).toBe(true);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.find('input').prop('disabled')).toBe(undefined);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.find('input').prop('checked')).toBe(false);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.find('svg').hasClass('red')).toEqual(false);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.find(Icon).prop('name')).toBe('checkbox');
    });

    it('isSelected and disabled should be reflected in the input', () => {
      const wrapper = mount(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Checkbox id="test" isSelected disabled />,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.find('input').prop('disabled')).toBe(true);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.find('input').prop('checked')).toBe(true);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.find(Icon).prop('name')).toBe(
        'checkbox-checked',
      );
    });

    it('isSelected should be reflected in the input', () => {
      const wrapper = mount(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Checkbox id="test" onChange={() => {}} isSelected />,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.find('input').prop('checked')).toBe(true);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.find(Icon).prop('name')).toBe(
        'checkbox-checked',
      );
    });

    it('isSelected should be reflected in the input', () => {
      const wrapper = mount(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Checkbox id="test" onChange={() => {}} isSelected={false} />,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.find('input').prop('checked')).toBe(false);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.find(Icon).prop('name')).toBe('checkbox');
    });

    it('disabled should be reflected in the input', () => {
      const wrapper = mount(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Checkbox id="test" onChange={() => {}} disabled />,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.find('input').prop('disabled')).toBe(true);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.find(Icon).prop('name')).toBe('checkbox');
    });

    it('isInvalid should be reflected in the input', () => {
      const wrapper = mount(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Checkbox id="test" onChange={() => {}} isInvalid />,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.find('svg').prop('className')).toContain('red');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.find(Icon).prop('name')).toBe('checkbox');
    });

    it('required should be reflected in the input', () => {
      const wrapper = mount(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Checkbox id="test" onChange={() => {}} required />,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.find('input').prop('required')).toBe(true);
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('className', () => {
    it('passes in class name', () => {
      const instance = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Checkbox id="test" className="my-class" />,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(instance.html()).toContain('my-class');
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('handleChange', () => {
    it('calls onChange', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      const onChange = jest.fn();
      const wrapper = mount(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Checkbox id="test" onChange={onChange} />,
      );
      wrapper.find('input').simulate('change');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('sets isSelected to opposite of isSelected', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      const onChange = jest.fn();
      const wrapper = mount(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Checkbox id="test" onChange={onChange} isSelected={false} />,
      );
      wrapper.find('input').simulate('change');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(onChange).toHaveBeenCalledWith(true);
    });

    it('sets isSelected to opposite of isSelected', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      const onChange = jest.fn();
      const wrapper = mount(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Checkbox id="test" onChange={onChange} isSelected />,
      );
      wrapper.find('input').simulate('change');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(onChange).toHaveBeenCalledWith(false);
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('passes other props', () => {
    it('passes in class name', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      const mockFun = jest.fn();
      const instance = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Checkbox id="test" className="my-class" onBlur={mockFun} />,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(instance.find('input').prop('onBlur')).toBe(mockFun);
    });
  });
});
