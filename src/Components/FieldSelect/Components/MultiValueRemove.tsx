// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react-select' or its correspon... Remove this comment to see the full error message
import { components } from 'react-select';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../Icon/Icon' was resolved to '/Users/e... Remove this comment to see the full error message
import Icon from '../../Icon/Icon';

function MultiValueRemove(props) {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <components.MultiValueRemove {...props}>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Icon name="remove" size="10" />
    </components.MultiValueRemove>
  );
}

export default MultiValueRemove;
