import React from 'react';
import { shallow } from 'enzyme';

import FormLayout from './FormLayout';
import FormLayoutRow from './Components/FormLayoutRow';

describe('FormLayout', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<FormLayout />);
    }).not.toThrow();
  });

  it('does not crash when one of its children is null', () => {
    expect(() => {
      shallow(<FormLayout>{['test', null, 'test']}</FormLayout>);
    }).not.toThrow();
  });

  it('tightens spacing between fields', () => {
    const wrapper = shallow(<FormLayout tight />);
    expect(wrapper.prop('itemSpacing')).toBe(3);
  });

  it('adds the tight prop to child FormLayoutRow', () => {
    const wrapper = shallow(
      <FormLayout tight>
        <FormLayoutRow />
      </FormLayout>,
    );
    expect(wrapper.find(FormLayoutRow).prop('tight')).toBe(true);
  });

  it('renders children that are not FormLayoutRow', () => {
    const wrapper = shallow(
      <FormLayout tight>
        <div />
      </FormLayout>,
    );
    expect(wrapper.children()).toHaveLength(1);
  });
});
