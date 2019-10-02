import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Accordion from './Accordion';
import AccordionPanel from './Components/AccordionPanel';

describe('Accordion', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const testOnChange = jest.fn();

  it('renders the panels but will not render inValidElement', () => {
    const { getByText, queryByText } = render(
      <Accordion>
        <AccordionPanel label="label 1">panel 1</AccordionPanel>
        <AccordionPanel label="label 2">panel 2</AccordionPanel>
        test
      </Accordion>,
    );
    expect(getByText('label 1')).toBeDefined();
    expect(getByText('label 2')).toBeDefined();
    expect(queryByText('test')).toBeNull();

    fireEvent.click(getByText('label 1'));

    expect(getByText('panel 1')).toBeDefined();
  });

  it('displays the default panel, calls onChange when a panel is clicked, toggles the visible panels', () => {
    const { getByText, queryByText } = render(
      <Accordion defaultIndex={0} onChange={testOnChange}>
        <AccordionPanel label="label 1">panel 1</AccordionPanel>
        <AccordionPanel label="label 2">panel 2</AccordionPanel>
        <AccordionPanel label="label 3">panel 3</AccordionPanel>
      </Accordion>,
    );
    expect(getByText('label 1')).toBeDefined();
    expect(getByText('panel 1')).toBeDefined();
    expect(getByText('label 2')).toBeDefined();
    expect(getByText('label 3')).toBeDefined();

    fireEvent.click(getByText('label 3'));
    expect(testOnChange).toHaveBeenCalledWith(2);

    expect(getByText('panel 3')).toBeDefined();
    expect(queryByText('panel 1')).toBeNull();

    fireEvent.click(getByText('label 3'));
    expect(testOnChange).toHaveBeenCalledWith(2);
    expect(queryByText('panel 3')).toBeNull();
  });

  it('displays multiple panels if allowMultiple is true', () => {
    jest.clearAllMocks();
    const { getByText, queryByText } = render(
      <Accordion allowMultiple onChange={testOnChange}>
        <AccordionPanel label="label 1">panel 1</AccordionPanel>
        <AccordionPanel label="label 2">panel 2</AccordionPanel>
        <AccordionPanel label="label 3">panel 3</AccordionPanel>
      </Accordion>,
    );

    expect(queryByText('panel 1')).toBeNull();
    expect(queryByText('panel 2')).toBeNull();
    expect(queryByText('panel 3')).toBeNull();

    // open the first panel
    fireEvent.click(getByText('label 3'));
    expect(testOnChange).toHaveBeenCalledWith([2]);

    expect(queryByText('panel 1')).toBeNull();
    expect(queryByText('panel 2')).toBeNull();
    expect(queryByText('panel 3')).toBeDefined();

    // open another panel
    fireEvent.click(getByText('label 2'));

    expect(testOnChange).toHaveBeenCalledWith([2, 1]);

    expect(queryByText('panel 1')).toBeNull();
    expect(queryByText('panel 2')).toBeDefined();
    expect(queryByText('panel 3')).toBeDefined();

    // close the second panel
    fireEvent.click(getByText('label 2'));
    expect(testOnChange).toHaveBeenCalledWith([2]);

    expect(queryByText('panel 1')).toBeNull();
    expect(queryByText('panel 2')).toBeNull();
    expect(queryByText('panel 3')).toBeDefined();
  });
});
