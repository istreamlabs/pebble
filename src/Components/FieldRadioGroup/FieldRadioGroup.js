import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Block from '../Block/Block';
import Radio from './Components/Radio';
import Text from '../Text/Text';

const propTypes = {
  /**
   * Name attribute applied to all radios
   */
  name: PropTypes.string.isRequired,
  /**
   * Additional hint displayed beneath the label
   */
  helpText: PropTypes.node,
  /**
   * The label for the group of radios
   */
  title: PropTypes.string,
  /**
   * Radio options
   */
  radios: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    helpText: PropTypes.node,
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool
  })).isRequired,
  /**
   * Currently selected option value
   */
  value: PropTypes.string,
  /**
   * Additional classes to add
   */
  className: PropTypes.string,
  /**
   * Callback function when a radio is changed
   */
  onChange: PropTypes.func,
};

const defaultProps = {
  className: '',
  helpText: '',
  onChange: undefined,
  title: '',
  value: undefined,
};

/**
 * A way to select a single option from a list of options.
 *
 * ---
 */

function FieldRadioGroup({
  className,
  helpText,
  radios,
  title,
  value,
  onChange,
  name
}) {
  // set the selected radio button or the first one
  const getRadioItems = () => {
    if (radios) {
      const selected = value === '' || value === undefined
        ? radios[0].value
        : radios[radios.findIndex(radio => radio.value === value)].value;

      return radios.map(radio => (
        selected === radio.value
          ? { ...radio, ...{ isSelected: true, name } }
          : radio));
    }
  };

  const radioMarkup = (radios) => {
    if (radios) {
      return radios.map(radio => (
        <Radio
          disabled={radio.disabled}
          key={radio.id}
          id={radio.id}
          label={radio.label}
          helpText={radio.helpText}
          isSelected={radio.isSelected}
          name={radio.name}
          onChange={onChange}
          value={radio.value}
        />
      ));
    }
  };

  const titleMarkup = () => {
    if (title) {
      return (<Text bold className="db mb-2">{title}</Text>);
    }
  };

  const helpTextMarkup = () => {
    if (helpText === undefined) return;
    return (
      <Text size="6" className="db mb-3">{helpText}</Text>
    );
  };

  const classes = classNames('field-radio-group', className);

  return (
    <Block role="radiogroup" direction="column" className={classes}>
      {titleMarkup()}
      {helpTextMarkup()}
      {radioMarkup(getRadioItems())}
    </Block>
  );
}

FieldRadioGroup.propTypes = propTypes;
FieldRadioGroup.defaultProps = defaultProps;

export default FieldRadioGroup;
