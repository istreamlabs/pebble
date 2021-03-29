// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../Block/Block' was resolved to '/Users... Remove this comment to see the full error message
import Block from '../../Block/Block';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../Icon/Icon' was resolved to '/Users/e... Remove this comment to see the full error message
import Icon from '../../Icon/Icon';

function DropdownIndicator() {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Block padding="0 3">
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Icon name="arrow-small-down" />
    </Block>
  );
}

export default DropdownIndicator;
