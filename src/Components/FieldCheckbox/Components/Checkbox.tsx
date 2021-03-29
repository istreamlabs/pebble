import './Checkbox.scss';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../Icon/Icon' was resolved to '/Users/e... Remove this comment to see the full error message
import Icon from '../../Icon/Icon';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'classnames' or its correspondi... Remove this comment to see the full error message
import React from 'react';
import classNames from 'classnames';

const propTypes = {
  /**
   * Additional classes to add
   */
  className: PropTypes.string,
  /**
   * If the input should be disabled and not focusable
   */
  disabled: PropTypes.bool,
  /**
   * The id attribute of the input
   */
  id: PropTypes.string.isRequired,
  /**
   * Applies styling to indicate the input is invalid
   */
  isInvalid: PropTypes.bool,
  /**
   * Set the checkbox as selected
   */
  isSelected: PropTypes.bool,
  /**
   // @ts-expect-error ts-migrate(2722) FIXME: Cannot invoke an object which is possibly 'undefin... Remove this comment to see the full error message
   * Callback function when input is changed
   */
  onChange: PropTypes.func,
  /**
   * If the selection is required.
   */
  required: PropTypes.bool,
  /**
   * Make the checkbox look like a toggle switch
   */
  toggle: PropTypes.bool,
  /**
   * The value of the input
   */
  value: PropTypes.string,
};

const defaultProps = {
  isInvalid: false,
  isSelected: false,
  onChange: undefined,
  required: false,
  toggle: false,
};

function Checkbox({
  className,
  disabled,
  id,
  isSelected,
  isInvalid,
  onChange,
  required,
  toggle,
  value,
  ...rest
}) {
  const handleChange = () => {
    onChange(!isSelected);
  };

  const checkboxIconMarkup = () => {
    if (!toggle) {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const iconProps = {
        classes: 'neutral-500 neutral-700-hover bg-white br1',
        name: 'checkbox',
      };
      if (isSelected && disabled) {
        iconProps.classes = 'blue';
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        iconProps.name = 'checkbox-checked';
      // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      }
      if (isSelected) {
        iconProps.classes = 'blue blue-dark-hover';
        iconProps.name = 'checkbox-checked';
      }
      if (isInvalid) {
        iconProps.classes = 'red bg-white br1';
      }
      const checkboxIconClasses = classNames(
        iconProps.classes,
        'checkbox-icon',
      );
      return (
        <Icon
          size="20"
          className={checkboxIconClasses}
          name={iconProps.name}
        />
      );
    }
  };

  const inputClasses = classNames('checkbox absolute o-0', className);

  return (
    <>
      <input
        id={id}
        checked={isSelected || false}
        disabled={disabled}
        onChange={handleChange}
        type="checkbox"
        className={inputClasses}
        value={value}
        style={{ width: '24px', height: '24px' }}
        required={required}
        {...rest}
      />
      {checkboxIconMarkup()}
    </>
  );
}

Checkbox.defaultPros = {
  disabled: false,
  isSelected: false,
  onChange: () => {},
};

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
