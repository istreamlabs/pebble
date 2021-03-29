// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../Block/Block' was resolved to '/Users... Remove this comment to see the full error message
import PropTypes from 'prop-types';

import Block from '../../Block/Block';

const propTypes = {
  /**
   * Contents of the component
   */
  children: PropTypes.node,
};

/**
 // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
 * A row container in a table/grid
 *
 * ---
 */

function TableBody({ children }) {
  return (
    <Block
      role="rowgroup"
      direction="column"
      className="relative overflow-auto overflow-overlay"
    >
      {children}
    </Block>
  );
}

TableBody.propTypes = propTypes;
TableBody.displayName = 'TableBody';

export default TableBody;
