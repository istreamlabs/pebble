// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';

// for now the only thing in the toolbar
// is the confusing open isolated button so we are
// effectively doing a no-op to hide it. In the
// future we may want to revisit this.
// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
export default () => (<React.Fragment />);
