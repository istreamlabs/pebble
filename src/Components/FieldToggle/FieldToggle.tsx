import React from 'react';

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
  return <FieldCheckbox toggle {...props} />;
}

FieldToggle.displayName = 'FieldToggle';

export default FieldToggle;
