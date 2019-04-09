import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import './Select.scss';

const BaseSelect = ({
  disabled,
  id,
  loading,
  multiSelect,
  onChange,
  options,
  value,
  ...rest
}) => {
  return (
    <Select
      options={options}
      isMulti={multiSelect}
      isDisabled={disabled}
      isLoading={loading}
      {...rest}
    />
  );
};

BaseSelect.defaultPros = {
  disabled: false,
  isSelected: false,
  menuPlacement: 'auto',
  onChange: () => {}
};

BaseSelect.propTypes = {
  autoFocus: PropTypes.bool,
  /**
   * Additional classes to add
   */
  className: PropTypes.string,
  /**
   * Sets aria-label attribute.
   */
  ariaLabel: PropTypes.string,
  /**
   * Sets aria-labelledby attribute.
   */
  ariaLabelledby: PropTypes.string,
  /**
   * If the select should be disabled and not focusable
   */
  disabled: PropTypes.bool,
  /**
   * If the value of the select can be read, but not changed
   */
  isReadOnly: PropTypes.bool,
  /**
   * The id attribute of the input
   */
  id: PropTypes.string.isRequired,
  /**
   * is the select in a loading state
   */
  loading: PropTypes.bool,
  /**
   * Test to display when loading
   */
  loadingMessage: PropTypes.string,
  /**
   * Set the menu to open
   */
  menuIsOpen: PropTypes.bool,
  /**
   * Default placement of the menu in relation to the control. 'auto' will flip when there isn't enough space below the control.
   */
  menuPlacement: PropTypes.oneOf(['auto', 'top', 'bottom']),
  /**
   * Support multiple selected options
   */
  multiSelect: PropTypes.bool,
  /**
   * Text to display when there are no options
   */
  noOptionsMessage: PropTypes.string,
  /**
   * Callback function when select is blurred
   */
  onBlur: PropTypes.func,
  /**
   * Callback function when select is focused
   */
  onFocus: PropTypes.func,
  /**
   * Callback function when select is changed
   */
  onChange: PropTypes.func,
  /**
   * Array of options to populate the select menu
   */
  options: PropTypes.arrayOf(PropTypes.object),
  /**
   * The value(s) of select
   */
  value: PropTypes.oneOf(
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object)
  ),
};

export default BaseSelect;
