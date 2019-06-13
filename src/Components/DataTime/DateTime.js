import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DatePicker from 'react-datepicker';
import FieldText from '../FieldText/FieldText';
import Block from '../Block/Block';
import Label from '../Label/Label';
import Text from '../Text/Text';
import Icon from '../Icon/Icon';


import './DateTime.scss';
import 'react-datepicker/dist/react-datepicker.css';

export default ({
  className,
  closeMenuOnSelect,
  id,
  label,
  isInvalid,
  helpText,
  hideLabel,
  menuPlacement,
  menuPortalTarget,
  multiSelect,
  value,
  disabled,
  showCheckbox,
  validationText,
  width,
  selected,
  onChange,
  size = 'medium',
  isReadOnly,
  ...rest
}) => {

  const getLabel = () => (
    <Label
      id={id}
      invalid={isInvalid}
      disabled={disabled}
      hide={hideLabel}
    >
      {label}
    </Label>
  );

  const getHelpTextMarkup = () => {
    if (helpText === undefined) return;
    return (
      <Text size="6" className="db mt-2">{helpText}</Text>
    );
  };

  const getValidationTextMarkup = () => {
    if (!isInvalid || validationText === undefined) return;

    return (
      <Text appearance="danger" size="6" className="db pt-2">{validationText}</Text>
    );
  };

  const classes = classNames('field-text', className);

  const inputClasses = classNames('input',
    {
      'input-error': isInvalid,
      'input-s': size === 'small',
      'input-m': size === 'medium',
      'input-l': size === 'large',
      'bg-neutral-200': isReadOnly,
    });

  const validation = (...props) => {
    console.log(props);
  };

  return (
    <Block direction="column" className={classes} width={width}>
      {getLabel()}
      <DatePicker onInputError={validation} showTimeSelect dateFormat="MMMM d, yyyy h:mm aa" className={inputClasses} selected={selected} onChange={onChange} />
      {getHelpTextMarkup()}
      {getValidationTextMarkup()}
    </Block>
  );
};
