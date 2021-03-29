// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../Block/Block' was resolved to '/Users... Remove this comment to see the full error message
import PropTypes from 'prop-types';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../Icon/Icon' was resolved to '/Users/e... Remove this comment to see the full error message
import Block from '../../Block/Block';
import Icon from '../../Icon/Icon';

const propTypes = {
  innerProps: PropTypes.object,
};

function ClearIndicator(props) {
  const {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    innerProps: { ref, ...restInnerProps },
  } = props;
  return (
    <Block
      className="neutral-500 neutral-600-hover"
      {...restInnerProps}
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      ref={ref}
      padding="0 3"
    >
      <Icon name="remove-circle" />
    </Block>
  );
}

ClearIndicator.propTypes = propTypes;

export default ClearIndicator;
