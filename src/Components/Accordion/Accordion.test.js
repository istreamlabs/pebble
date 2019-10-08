import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Accordion from './Accordion';
import CollapsiblePanel from '../CollapsiblePanel/CollapsiblePanel';

describe('Accordion', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const testOnChange = jest.fn();

  it('renders closed panels but will not render inValidElement, then opens the panel that is clicked', () => {
    const { getByTestId, getByText, queryByText } = render(
      <Accordion>
        <CollapsiblePanel id="panel1" label="label 1">
          panel 1
        </CollapsiblePanel>
        <CollapsiblePanel id="panel2" label="label 2">
          panel 2
        </CollapsiblePanel>
        test
      </Accordion>,
    );
    expect(getByTestId('panel1')).toBeDefined();
    expect(getByTestId('panel2')).toBeDefined();
    expect(queryByText('test')).toBeNull();

    fireEvent.click(getByText('label 1'));

    expect(getByTestId('panel1').open).toBe(true);
  });

  it('renders default panel, calls onChange when a panel is clicked, toggles the visible panels', () => {
    const { getByTestId, getByText } = render(
      <Accordion defaultOpen="panel1" onChange={testOnChange}>
        <CollapsiblePanel id="panel1" label="label 1">
          panel 1
        </CollapsiblePanel>
        <CollapsiblePanel id="panel2" label="label 2">
          panel 2
        </CollapsiblePanel>
        <CollapsiblePanel id="panel3" label="label 3">
          panel 3
        </CollapsiblePanel>
      </Accordion>,
    );
    expect(getByTestId('panel1')).toBeDefined();
    expect(getByTestId('panel1').open).toBe(true);
    expect(getByTestId('panel2')).toBeDefined();
    expect(getByTestId('panel3')).toBeDefined();

    fireEvent.click(getByText('label 3'));
    expect(testOnChange).toHaveBeenCalledWith('panel3');

    expect(getByTestId('panel3').open).toBe(true);
    expect(getByTestId('panel1').open).toBe(false);

    fireEvent.click(getByText('label 3'));
    expect(testOnChange).toHaveBeenCalledWith('panel3');
    expect(getByTestId('panel3').open).toBe(false);
  });

  it('displays multiple panels if allowMultiple is true', () => {
    const { getByText, getByTestId } = render(
      <Accordion allowMultiple onChange={testOnChange}>
        <CollapsiblePanel id="panel1" label="label 1">
          panel 1
        </CollapsiblePanel>
        <CollapsiblePanel id="panel2" label="label 2">
          panel 2
        </CollapsiblePanel>
        <CollapsiblePanel id="panel3" label="label 3">
          panel 3
        </CollapsiblePanel>
      </Accordion>,
    );

    expect(getByTestId('panel1')).toBeDefined();
    expect(getByTestId('panel2')).toBeDefined();
    expect(getByTestId('panel3')).toBeDefined();

    // open the first panel
    fireEvent.click(getByText('label 3'));
    expect(testOnChange).toHaveBeenCalledWith('panel3');

    expect(getByTestId('panel1').open).toBe(false);
    expect(getByTestId('panel2').open).toBe(false);
    expect(getByTestId('panel3').open).toBe(true);

    // open another panel
    fireEvent.click(getByText('label 2'));

    expect(testOnChange).toHaveBeenCalledWith('panel2');

    expect(getByTestId('panel1').open).toBe(false);
    expect(getByTestId('panel2').open).toBe(true);
    expect(getByTestId('panel3').open).toBe(true);

    // close the second panel
    fireEvent.click(getByText('label 2'));
    expect(testOnChange).toHaveBeenCalledWith('panel2');

    expect(getByTestId('panel1').open).toBe(false);
    expect(getByTestId('panel2').open).toBe(false);
    expect(getByTestId('panel3').open).toBe(true);
  });

  it('renders multiple open default panels', () => {
    const { getByTestId } = render(
      <Accordion
        allowMultiple
        defaultOpen={['panel1', 'panel2', 'panel3']}
        onChange={testOnChange}
      >
        <CollapsiblePanel id="panel1" label="label 1">
          panel 1
        </CollapsiblePanel>
        <CollapsiblePanel id="panel2" label="label 2">
          panel 2
        </CollapsiblePanel>
        <CollapsiblePanel id="panel3" label="label 3">
          panel 3
        </CollapsiblePanel>
      </Accordion>,
    );

    expect(getByTestId('panel1').open).toBe(true);
    expect(getByTestId('panel2').open).toBe(true);
    expect(getByTestId('panel3').open).toBe(true);
  });
});
