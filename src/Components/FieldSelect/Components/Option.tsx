// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react-select' or its correspon... Remove this comment to see the full error message
import PropTypes from 'prop-types';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../Block/Block' was resolved to '/Users... Remove this comment to see the full error message
import { components } from 'react-select';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../Icon/Icon' was resolved to '/Users/e... Remove this comment to see the full error message
import Block from '../../Block/Block';
import Icon from '../../Icon/Icon';

const propTypes = {
  innerProps: PropTypes.object,
  children: PropTypes.node,
  isSelected: PropTypes.bool,
  isMulti: PropTypes.bool,
};

function Option(props) {
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  const { innerProps, children, isSelected } = props;

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Block {...innerProps} alignItems="center">
      <components.Option {...props}>
        <Icon
          name={isSelected ? 'checkbox-checked' : 'checkbox'}
          className="mr-2"
        />
        {children}
      </components.Option>
    </Block>
  );
}

Option.propTypes = propTypes;

export default Option;
