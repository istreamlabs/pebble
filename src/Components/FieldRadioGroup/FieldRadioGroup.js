import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Block from '../Block/Block';
import Radio from './Radio';
import Text from '../Text/Text';

const FieldRadioGroup = (
  {
    helpText,
    radios,
    title,
    onRadioChange
  }
) => {
  const [selected, setSelected] = useState('');

  const handleChange = (newSelected) => {
    setSelected(newSelected);
    if (onRadioChange) {
      onRadioChange(newSelected);
    }
  };

  // set the selected radio button
  const radioItems = () => {
    if (selected !== '') {
      return radios.map(radio => (
        selected === radio.value
          ? { ...radio, ...{ isSelected: true } }
          : radio));
    }

    // otherwise look to see if there is default selection
    const hasDefaultSelected = radios.some(radio => radio.defaultSelected);

    if (hasDefaultSelected) {
      return radios.map(radio => (
        radio.defaultSelected
          ? { ...radio, ...{ isSelected: true } }
          : radio));
    }

    // nothing selected
    return radios;
  };

  const radioMarkup = radios => radios.map(radio => (
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

  const helpTextMarkup = () => {
    if (helpText === undefined) return;
    return (
      <Text size="6" className="db mb-3">{helpText}</Text>
    );
  };

  return (
    <Block direction="column">
      <Text bold className="db mb-2">{title}</Text>
      {helpTextMarkup()}
      {radioMarkup(radioItems())}
    </Block>
  );
};

FieldRadioGroup.propTypes = {
  /**
   * Additional hint displayed beneath the label
   */
  helpText: PropTypes.string,
  title: PropTypes.string,
  onRadioChange: () => {},
  radios: PropTypes.arrayOf(PropTypes.object),
};

export default FieldRadioGroup;
