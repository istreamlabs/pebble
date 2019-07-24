import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Block from '../Block/Block';
import Button from '../Button/Button';
import FieldSelect from '../FieldSelect/FieldSelect';

const propTypes = {
  /**
   * Additional css classes to apply
   */
  className: PropTypes.string,
  /**
   * Current page
   */
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

/**
 * Provides a way to navigate ordered content that has been divided into pages.
 *
 * ---
 */

class Pagination extends React.PureComponent {
  getMenuOptions = numPages => {
    const menuOptions = [];
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
    if (page !== currentPage) {
      onPageChange && onPageChange(page);
    }
  };

  getPageSelectDropdown = () => {
    const { currentPage, numPages } = this.props;

    const options = this.getMenuOptions(numPages);

    if (numPages !== undefined) {
      return (
        <Block alignItems="center" className="mr-4">
          <FieldSelect
            id="currentPageSelect"
            label="current page"
            hideLabel
            menuPlacement="auto"
            menuPortalTarget={document.body}
            options={options}
            onChange={this.onPageSelect}
            value={{ value: currentPage, label: `${currentPage}` }}
            width="96px"
            className="mr-2"
          />
          <Block textSize="6">{`of ${numPages}`}</Block>
        </Block>
      );
    }
  };

  render() {
    const { className, currentPage, numPages } = this.props;

    const classes = classNames('pagination', className);

    return (
      <Block
        background="neutral-200"
        border="all"
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
        {this.getPageSelectDropdown()}
        <Button
          disabled={currentPage === numPages}
          onClick={() => this.onPageSelect(currentPage + 1)}
          icon="arrow-small-right"
          iconAfterText
        >
          Next
        </Button>
      </Block>
    );
  }
}

Pagination.propTypes = propTypes;

export default Pagination;
