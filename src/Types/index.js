/**
 * When editing a type, be sure to update JSDoc type definitions at ../typedefs.js for VSCODE intellisense
 */

import { PropTypes } from 'prop-types';

export { default as spacingType } from './SpacingType';
export { default as boolRequiresOtherProp } from './BoolRequiresOtherProp';
export { default as requiresOtherProp } from './RequiresOtherProp';

export const colorType = PropTypes.oneOf([
  'transparent',
  'neutral-100', 'neutral-200', 'neutral-300', 'neutral-400', 'neutral-500', 'neutral-600', 'neutral-700', 'neutral-800', 'neutral-900',
  'black', 'black-90', 'black-80', 'black-70', 'black-60', 'black-50', 'black-40', 'black-30', 'black-20', 'black-10', 'black-05', 'black-025', 'black-0125',
  'blue-lighter', 'blue-light', 'blue', 'blue-dark', 'blue-darker',
  'green-lighter', 'green-light', 'green', 'green-dark', 'green-darker',
  'indigo-lighter', 'indigo-light', 'indigo', 'indigo-dark', 'indigo-darker',
  'red-lighter', 'red-light', 'red', 'red-dark', 'red-darker',
  'white', 'white-90', 'white-80', 'white-70', 'white-60', 'white-50', 'white-40', 'white-30', 'white-20', 'white-10', 'white-05', 'white-025', 'white-0125',
  'yellow-lighter', 'yellow-light', 'yellow', 'yellow-dark', 'yellow-darker',
]);

export const fontSizeType = PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, '1', '2', '3', '4', '5', '6', '7']);

export const textAlignType = PropTypes.oneOf(['left', 'right', 'center']);
