// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'enzyme' or its corresponding t... Remove this comment to see the full error message
import { shallow } from 'enzyme';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Overlay' was resolved to '/Users/esjaast... Remove this comment to see the full error message
import Overlay from './Overlay';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Overlay', () => {
  it('renders without crashing', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      shallow(<Overlay>hello</Overlay>);
    }).not.toThrow();
  });

  it('onClick is called when the Overlay is clicked', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    const mockFunc = jest.fn();
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<Overlay onClick={mockFunc} />);
    wrapper.simulate('click');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(mockFunc).toHaveBeenCalledTimes(1);
  });
});
