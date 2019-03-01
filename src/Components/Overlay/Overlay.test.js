import React from 'react';
import { shallow } from 'enzyme';
import Overlay from './Overlay';

describe('Overlay', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<Overlay>hello</Overlay>); }).not.toThrow();
  });

  it('onClick is called when the Overlay is clicked', () => {
    const mockFunc = jest.fn();
    const wrapper = shallow(<Overlay onClick={mockFunc} />);
    wrapper.simulate('click');
    expect(mockFunc).toHaveBeenCalledTimes(1);
  });
});
