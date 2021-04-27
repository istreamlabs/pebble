import { fireEvent, render } from '@testing-library/react';

import Confirm from './Confirm';
import React from 'react';
import { shallow } from 'enzyme';

describe('Confirm', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<Confirm onConfirm={() => {}} />);
    }).not.toThrow();
  });

  describe('button properties', () => {
    it('can have its contents changed', () => {
      const { getByText } = render(
        <Confirm onConfirm={() => {}}>Changed</Confirm>,
      );
      expect(getByText('Changed')).toBeDefined();
    });

    it('can be disabled', () => {
      const { getByText } = render(
        <Confirm onConfirm={() => {}} disabled>
          Changed
        </Confirm>,
      );
      expect(getByText('Changed').closest('button')).toBeDisabled();
    });
  });

  it('opens the model when clicked', () => {
    const { getByText } = render(
      <Confirm onConfirm={() => {}}>Changed</Confirm>,
    );
    fireEvent.click(getByText('Changed'));

    expect(getByText('Are you sure?')).toBeDefined();
  });

  it('calls only onCancel when cancel clicked', () => {
    const onConfirm = jest.fn();
    const onCancel = jest.fn();
    const { getByText } = render(
      <Confirm onConfirm={onConfirm} onCancel={onCancel}>
        Changed
      </Confirm>,
    );

    // Open modal
    fireEvent.click(getByText('Changed'));
    // Cancel out
    fireEvent.click(getByText('Cancel'));

    expect(onConfirm).not.toBeCalled();
    expect(onCancel).toBeCalled();
  });

  it('calls only onConfirm when confirm clicked', () => {
    const onConfirm = jest.fn();
    const onCancel = jest.fn();
    const { getByText } = render(
      <Confirm onConfirm={onConfirm} onCancel={onCancel}>
        Changed
      </Confirm>,
    );

    // Open modal
    fireEvent.click(getByText('Changed'));
    // Confirm
    fireEvent.click(getByText('Confirm'));

    expect(onConfirm).toBeCalled();
    expect(onCancel).not.toBeCalled();
  });

  it('does not render input', () => {
    const { getByText, queryByLabelText } = render(
      <Confirm onConfirm={() => {}}>Changed</Confirm>,
    );

    fireEvent.click(getByText('Changed'));

    expect(
      queryByLabelText('Type the value to confirm your action'),
    ).toBeNull();
  });

  describe('Requires Typing', () => {
    it('changes default content', () => {
      const { getByText } = render(
        <Confirm onConfirm={() => {}} confirmValue="test">
          Changed
        </Confirm>,
      );
      fireEvent.click(getByText('Changed'));
      expect(
        getByText(/Please confirm you are sure by entering*/i),
      ).toBeDefined();
    });

    it('starts with confirm disabled and cancel enabled', () => {
      const { getByText } = render(
        <Confirm onConfirm={() => {}} confirmValue="test">
          Changed
        </Confirm>,
      );
      fireEvent.click(getByText('Changed'));

      expect(getByText('Confirm').closest('button')).toBeDisabled();
      expect(getByText('Cancel').closest('button')).toBeEnabled();
    });

    it('does not enable confirm if incorrect value', () => {
      const { getByText, getByLabelText } = render(
        <Confirm onConfirm={() => {}} confirmValue="test">
          Changed
        </Confirm>,
      );

      fireEvent.click(getByText('Changed'));

      expect(getByText('Confirm').closest('button')).toBeDisabled();

      fireEvent.change(
        getByLabelText('Type the value to confirm your action'),
        { target: { value: 'NotRight' } },
      );

      expect(getByText('Confirm').closest('button')).toBeDisabled();
    });

    it('does enable confirm if correct value (case-sensitive)', () => {
      const { getByText, getByLabelText } = render(
        <Confirm onConfirm={() => {}} confirmValue="Test">
          Changed
        </Confirm>,
      );

      fireEvent.click(getByText('Changed'));

      expect(getByText('Confirm').closest('button')).toBeDisabled();

      fireEvent.change(
        getByLabelText('Type the value to confirm your action'),
        { target: { value: 'test' } },
      );

      expect(getByText('Confirm').closest('button')).toBeDisabled();

      fireEvent.change(
        getByLabelText('Type the value to confirm your action'),
        { target: { value: 'Test' } },
      );

      expect(getByText('Confirm').closest('button')).toBeEnabled();
    });

    it('does enable confirm if correct value (case-insensitive)', () => {
      const { getByText, getByLabelText } = render(
        <Confirm onConfirm={() => {}} confirmValue="Test" ignoreCase>
          Changed
        </Confirm>,
      );

      fireEvent.click(getByText('Changed'));

      expect(getByText('Confirm').closest('button')).toBeDisabled();

      fireEvent.change(
        getByLabelText('Type the value to confirm your action'),
        { target: { value: 'test' } },
      );

      expect(getByText('Confirm').closest('button')).toBeEnabled();
    });
  });
});
