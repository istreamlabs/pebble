import React from 'react';
import { shallow } from 'enzyme';
import VisuallyHidden from './VisuallyHidden';

describe('VisuallyHidden', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<VisuallyHidden>hello</VisuallyHidden>);
    }).not.toThrow();
  });
});
