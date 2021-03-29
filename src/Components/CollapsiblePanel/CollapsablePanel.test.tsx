// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@testing-library/react' or its... Remove this comment to see the full error message
import { render } from '@testing-library/react';

// @ts-expect-error ts-migrate(6142) FIXME: Module './CollapsiblePanel' was resolved to '/User... Remove this comment to see the full error message
import CollapsiblePanel from './CollapsiblePanel';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../Block/Block' was resolved to '/Users/es... Remove this comment to see the full error message
import Block from '../Block/Block';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Icon/Icon' was resolved to '/Users/esja... Remove this comment to see the full error message
import Icon from '../Icon/Icon';

function ServiceID(props) {
  // eslint-disable-next-line react/prop-types
  const { label, active, type } = props;

  const arrowIcon = active ? 'arrow-small-up' : 'arrow-small-down';

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Block
      textSize="5"
      color="neutral-600"
      padding="3 4"
      border="bottom"
      justify="between"
    >
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block itemSpacing="3" alignItems="start">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Icon
          name={type === 'video' ? 'video' : 'music'}
          accessibilityLabel={type === 'video' ? 'video' : 'audio'}
          className="neutral-400"
        />
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        <div>{label}</div>
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Icon name={arrowIcon} />
    </Block>
  );
}
// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('CollapsiblePanel', () => {
  it('renders', () => {
    const { getByText } = render(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CollapsiblePanel
        id="panel1"
        label="label 1"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        onToggle={jest.fn()}
      >
        panel 1
      </CollapsiblePanel>,
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getByText('label 1')).toBeDefined();
  });

  it('renders with label renderProp', () => {
    const { getByText, getByTitle } = render(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CollapsiblePanel
        id="panel1"
        open
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        onToggle={jest.fn()}
        label={props => (
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <ServiceID
            label="PMT: 411 (0x19b): MPEG-4 AVC"
            type="video"
            active={props.active}
          />
        )}
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      />,
    );

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getByText('PMT: 411 (0x19b): MPEG-4 AVC')).toBeDefined();
    expect(getByTitle('video')).toBeDefined();
  });
});
