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
  const [selectedValue, setSelectedValue] = useState('mail');

  const handleChange = (event) => {
    onRadioChange(event);
    setSelectedValue(event.target.value);
  };

  const radioItems = () => {
    if (selectedValue) {
      return radios.map(radio => (
        selectedValue === radio.value
          ? { ...radio, ...{ isSelected: true } }
          : radio));
    }

    const hasDefaultSelected = radios.some(radio => radio.defaultSelected);

    if (hasDefaultSelected) {
      return radios.map(radio => (
        radio.defaultSelected
          ? { ...radio, ...{ isSelected: true } }
          : radio));
    }
  };

  const radioMarkup = radios => radios.map((radio, i) => (
    <Block key={i} marginBottom="3">
      <Radio
        id={radio.id}
        label={radio.label}
        helpText={radio.helpText}
        isSelected={radio.isSelected}
        name={radio.name}
        onChange={handleChange}
        className="mr-2"
        value={radio.value}
      />
    </Block>
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
