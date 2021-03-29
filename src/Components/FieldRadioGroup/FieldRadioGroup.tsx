// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'classnames' or its correspondi... Remove this comment to see the full error message
import classNames from 'classnames';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Components/Radio' was resolved to '/User... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Text/Text' was resolved to '/Users/esja... Remove this comment to see the full error message
import Radio from './Components/Radio';
import Text from '../Text/Text';

const propTypes = {
  /**
   * Additional classes to add
   */
  className: PropTypes.string,
  /**
   * Additional hint displayed beneath the label
   */
  helpText: PropTypes.node,
  /**
   * Name attribute applied to all radios
   */
  name: PropTypes.string.isRequired,
  /**
   * Callback function when a radio is changed
   */
  onChange: PropTypes.func,
  /**
   * Radio options
   */
  radios: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      helpText: PropTypes.node,
      value: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
    }),
  ).isRequired,
  /**
   * If at least one option must be selected
   */
  required: PropTypes.bool,
  /**
   * The label for the group of radios
   */
  // @ts-expect-error ts-migrate(2550) FIXME: Property 'findIndex' does not exist on type '{ id:... Remove this comment to see the full error message
  title: PropTypes.string,
  /**
   // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'radio' implicitly has an 'any' type.
   * Currently selected option value
   */
  value: PropTypes.string,
};

const defaultProps = {
  onChange: undefined,
  required: false,
};

/**
 * A way to select a single option from a list of options.
 *
 * ---
 */

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'radios' implicitly has an 'any' type.
function FieldRadioGroup({
  className,
  helpText,
  radios,
  title,
  value,
  onChange,
  // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'radio' implicitly has an 'any' type.
  required,
  name,
// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
}) {
  // set the selected radio button or the first one
  const getRadioItems = () => {
    if (radios && radios.length > 0) {
      const selected =
        value === '' || value === undefined
          ? radios[0].value
          : radios[radios.findIndex(radio => radio.value === value)]
              .value;

      return radios.map(radio =>
        selected === radio.value
          ? // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            { ...radio, ...{ isSelected: true, name } }
          : radio,
      );
    }
  };

  const radioMarkup = radios => {
    if (radios && radios.length > 0) {
      // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      return radios.map(radio => (
        <Radio
          required={required}
          disabled={radio.disabled}
          key={radio.id}
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          id={radio.id}
          label={radio.label}
          helpText={radio.helpText}
          // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
          isSelected={radio.isSelected}
          // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
          name={radio.name}
          onChange={onChange}
          value={radio.value}
        />
      ));
    }
  };

  const titleMarkup = () => {
    if (title) {
      // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      return (
        // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <legend
          className={classNames(
            { 'required-input': required },
            'fw-700 db mb-2',
          )}
        >
          {title}
        </legend>
      );
    }
  };

  const helpTextMarkup = () => {
    if (helpText === undefined) return;
    return (
      <Text size="6" className="db mb-3">
        {helpText}
      </Text>
    );
  };

  return (
    <div className={className}>
      <fieldset aria-required={required} required={required}>
        {titleMarkup()}
        {helpTextMarkup()}
        {radioMarkup(getRadioItems())}
      </fieldset>
    </div>
  );
}

FieldRadioGroup.propTypes = propTypes;
FieldRadioGroup.defaultProps = defaultProps;
FieldRadioGroup.displayName = 'FieldRadioGroup';

export default FieldRadioGroup;
