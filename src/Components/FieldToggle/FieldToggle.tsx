// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../FieldCheckbox/FieldCheckbox' was resolv... Remove this comment to see the full error message
import FieldCheckbox from '../FieldCheckbox/FieldCheckbox';

/**
 * FieldToggle is convenience wrapper for [FieldCheckbox](/#/Components/FieldCheckbox) (`toggle` is set to true automatically). See the FieldCheckbox component for all props.
 *
 * FieldToggle allow users to view and switch between enabled or disabled states.
 * Use toggles when your intent is to turn something on or off instantly.
 *
 * -----
 */

function FieldToggle({ ...props }) {
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <FieldCheckbox toggle {...props} />;
}

FieldToggle.displayName = 'FieldToggle';

export default FieldToggle;
