import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Block from '../Block/Block';
import Radio from './Radio';
import Text from '../Text/Text';

const FieldRadioGroup = (
  {
    className,
    helpText,
    radios,
    title,
    value,
  }
) => {
  const [selected, setSelected] = useState(value);

  const handleChange = (newSelected) => {
    setSelected(newSelected);
  };

  // set the selected radio button
  const getRadioItems = () => {
    if (radios) {
      if (selected !== '') {
        return radios.map(radio => (
          selected === radio.value
            ? { ...radio, ...{ isSelected: true } }
            : radio));
      }

      // otherwise look to see if there is default selection
      const hasDefaultSelected = radios.some(radio => radio.defaultSelected);

      if (hasDefaultSelected) {
        return radios.map((radio) => {
          if (radio.defaultSelected) {
            setSelected(radio.value);
            return { ...radio, ...{ isSelected: true } };
          }
          return radio;
        });
      }

      // nothing selected
      return radios;
    }
  };

  const radioMarkup = (radios) => {
    if (radios) {
      return radios.map(radio => (
        <Radio
          key={radio.id}
          id={radio.id}
          label={radio.label}
          helpText={radio.helpText}
          isSelected={radio.isSelected}
          name={radio.name}
          onChange={handleChange}
          value={radio.value}
        />
      ));
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
    <Block direction="column" className={classes}>
      {title && <Text bold className="db mb-2">{title}</Text>}
      {helpTextMarkup()}
      {radioMarkup(getRadioItems())}
    </Block>
  );
};

FieldRadioGroup.propTypes = {
  /**
   * Additional hint displayed beneath the label
   */
  helpText: PropTypes.string,
  title: PropTypes.string,
  radios: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.string,
  className: PropTypes.string,
};

export default FieldRadioGroup;
