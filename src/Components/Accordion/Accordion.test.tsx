// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@testing-library/react' or its... Remove this comment to see the full error message
import { render, fireEvent } from '@testing-library/react';

// @ts-expect-error ts-migrate(6142) FIXME: Module './Accordion' was resolved to '/Users/esjaa... Remove this comment to see the full error message
import Accordion from './Accordion';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../CollapsiblePanel/CollapsiblePanel' was ... Remove this comment to see the full error message
import CollapsiblePanel from '../CollapsiblePanel/CollapsiblePanel';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Accordion', () => {
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'beforeEach'.
  beforeEach(() => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    jest.clearAllMocks();
  });

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
  const testOnChange = jest.fn();

  it('renders closed panels but will not render inValidElement, then opens the panel that is clicked', () => {
    const { getByTestId, getByText, queryByText } = render(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Accordion>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <CollapsiblePanel id="panel1" label="label 1">
          panel 1
        </CollapsiblePanel>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <CollapsiblePanel id="panel2" label="label 2">
          panel 2
        </CollapsiblePanel>
        test
      </Accordion>,
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getByTestId('panel1')).toBeDefined();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getByTestId('panel2')).toBeDefined();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(queryByText('test')).toBeNull();

    fireEvent.click(getByText('label 1'));

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getByTestId('panel1').open).toBe(true);
  });

  it('renders default panel, calls onChange when a panel is clicked, toggles the visible panels', () => {
    const { getByTestId, getByText } = render(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Accordion defaultOpen="panel1" onChange={testOnChange}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <CollapsiblePanel id="panel1" label="label 1">
          panel 1
        </CollapsiblePanel>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <CollapsiblePanel id="panel2" label="label 2">
          panel 2
        </CollapsiblePanel>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <CollapsiblePanel id="panel3" label="label 3">
          panel 3
        </CollapsiblePanel>
      </Accordion>,
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getByTestId('panel1')).toBeDefined();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getByTestId('panel1').open).toBe(true);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getByTestId('panel2')).toBeDefined();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getByTestId('panel3')).toBeDefined();

    fireEvent.click(getByText('label 3'));
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(testOnChange).toHaveBeenCalledWith('panel3');

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getByTestId('panel3').open).toBe(true);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getByTestId('panel1').open).toBe(false);

    fireEvent.click(getByText('label 3'));
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(testOnChange).toHaveBeenCalledWith('panel3');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getByTestId('panel3').open).toBe(false);
  });

  it('displays multiple panels if allowMultiple is true', () => {
    const { getByText, getByTestId } = render(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Accordion allowMultiple onChange={testOnChange}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <CollapsiblePanel id="panel1" label="label 1">
          panel 1
        </CollapsiblePanel>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <CollapsiblePanel id="panel2" label="label 2">
          panel 2
        </CollapsiblePanel>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <CollapsiblePanel id="panel3" label="label 3">
          panel 3
        </CollapsiblePanel>
      </Accordion>,
    );

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getByTestId('panel1')).toBeDefined();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getByTestId('panel2')).toBeDefined();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getByTestId('panel3')).toBeDefined();

    // open the first panel
    fireEvent.click(getByText('label 3'));
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(testOnChange).toHaveBeenCalledWith('panel3');

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getByTestId('panel1').open).toBe(false);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getByTestId('panel2').open).toBe(false);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getByTestId('panel3').open).toBe(true);

    // open another panel
    fireEvent.click(getByText('label 2'));

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(testOnChange).toHaveBeenCalledWith('panel2');

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getByTestId('panel1').open).toBe(false);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getByTestId('panel2').open).toBe(true);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getByTestId('panel3').open).toBe(true);

    // close the second panel
    fireEvent.click(getByText('label 2'));
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(testOnChange).toHaveBeenCalledWith('panel2');

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getByTestId('panel1').open).toBe(false);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getByTestId('panel2').open).toBe(false);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getByTestId('panel3').open).toBe(true);
  });

  it('renders multiple open default panels', () => {
    const { getByTestId } = render(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Accordion
        allowMultiple
        defaultOpen={['panel1', 'panel2', 'panel3']}
        onChange={testOnChange}
      >
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <CollapsiblePanel id="panel1" label="label 1">
          panel 1
        </CollapsiblePanel>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <CollapsiblePanel id="panel2" label="label 2">
          panel 2
        </CollapsiblePanel>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <CollapsiblePanel id="panel3" label="label 3">
          panel 3
        </CollapsiblePanel>
      </Accordion>,
    );

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getByTestId('panel1').open).toBe(true);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getByTestId('panel2').open).toBe(true);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getByTestId('panel3').open).toBe(true);
  });
});
