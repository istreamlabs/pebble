// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'classnames' or its correspondi... Remove this comment to see the full error message
import PropTypes from 'prop-types';
import classNames from 'classnames';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../Block/Block' was resolved to '/Users/es... Remove this comment to see the full error message
import { borderType } from '../../Types';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../Button/Button' was resolved to '/Users/... Remove this comment to see the full error message
import Block from '../Block/Block';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../FieldSelect/FieldSelect' was resolved t... Remove this comment to see the full error message
import Button from '../Button/Button';
// @ts-expect-error ts-migrate(2749) FIXME: 'borderType' refers to a value, but is being used ... Remove this comment to see the full error message
import FieldSelect from '../FieldSelect/FieldSelect';

const propTypes = {
  /**
   *
   * Apply a `solid 1px neutral-300` border to a specific side by passing one of the following strings:
   *
   * 'all', 'vertical', 'horizontal', 'top', 'right', 'bottom', 'left'
   *
   * or the pass the shape:
   * ```
   * {
   *   color: "neutral-300",
   *   side: "all",
   *   size: "1px",
   // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'numPages' implicitly has an 'any' type.
   *   style: "solid",
   * }
   * ```
   *
   * `color` [color identifier](/#/Styles/Color) of the border color
   */
  border: borderType,
  /**
   * Additional css classes to apply
   */
  // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'selected' implicitly has an 'any' type.
  className: PropTypes.string,
  /**
   * Current page
   */
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'Paginatio... Remove this comment to see the full error message
  currentPage: PropTypes.number.isRequired,
  /**
   * Max number of pages
   */
  numPages: PropTypes.number,
  /**
   * Callback when for when the page changes
   */
  onPageChange: PropTypes.func,
};

const defaultProps = {
  border: 'all',
};

/**
 // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'current' implicitly has an 'any' type.
 * Provides a way to navigate ordered content that has been divided into pages.
 *
 * ---
 */

class Pagination extends React.PureComponent {
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  getMenuOptions = numPages => {
    const menuOptions = [];
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    for (let i = 1; i <= numPages; i++) {
      menuOptions.push({ value: i, label: `${i}` });
    }
    return menuOptions;
  };

  onPageSelect = selected => {
    const { currentPage, onPageChange } = this.props;
    // call coming from the next/prev button, or from the FieldSelect
    const page =
      typeof selected === 'number' ? selected : selected.value;
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    if (page !== currentPage) {
      onPageChange && onPageChange(page);
    }
  };

  getPageSelectDropdown = (current, total) => {
    const options = this.getMenuOptions(total);

    // @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'Paginatio... Remove this comment to see the full error message
    if (total !== undefined) {
      return (
        <Block alignItems="center" className="mr-4">
          <FieldSelect
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            id="currentPageSelect"
            label="current page"
            hideLabel
            menuPlacement="auto"
            menuPortalTarget={document.body}
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            options={options}
            onChange={this.onPageSelect}
            value={{ value: current, label: `${current}` }}
            width="96px"
            className="mr-2"
          />
          <Block textSize="6">{`of ${total}`}</Block>
        </Block>
      );
    }
  };

  render() {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const { border, className, currentPage, numPages } = this.props;

    const classes = classNames('pagination', className);
    const numPagesInt = numPages ? Math.ceil(numPages) : undefined;

    return (
      <Block
        // @ts-expect-error ts-migrate(2339) FIXME: Property 'defaultProps' does not exist on type 'ty... Remove this comment to see the full error message
        background="neutral-200"
        border={border}
        // @ts-expect-error ts-migrate(2339) FIXME: Property 'displayName' does not exist on type 'typ... Remove this comment to see the full error message
        padding="3"
        alignItems="center"
        className={classes}
      >
        <Button
          disabled={currentPage === 1}
          onClick={() => this.onPageSelect(currentPage - 1)}
          icon="arrow-small-left"
          className="mr-4"
        >
          Prev
        </Button>
        {this.getPageSelectDropdown(currentPage, numPagesInt)}
        <Button
          disabled={currentPage === numPagesInt}
          onClick={() => this.onPageSelect(currentPage + 1)}
          iconAfterText="arrow-small-right"
        >
          Next
        </Button>
      </Block>
    );
  }
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;
Pagination.displayName = 'Pagination';

export default Pagination;
