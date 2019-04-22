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
  numPages: PropTypes.number.isRequired,
  /**
   * Callback for when the next button is pressed
   */
  onNext: PropTypes.func,
  /**
   * Callback for when the prev button is pressed
   */
  onPrev: PropTypes.func,
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

class Pagination extends React.Component {
  getMenuOptions = (numPages) => {
    const menuOptions = [];
    for (let i = 1; i <= numPages; i++) {
      menuOptions.push({ value: i, label: `${i}` });
    }
    return menuOptions;
  };

  onPageSelect = (selected) => {
    const { currentPage, onPageChange } = this.props;
    const page = selected.value;
    if (page !== currentPage) {
      onPageChange && onPageChange(page);
    }
  };

  onPrevClick = (event) => {
    const { onPrev } = this.props;
    onPrev && onPrev({ event });
  };

  onNextClick = (event) => {
    const { onNext } = this.props;
    onNext && onNext({ event });
  };

  render() {
    const {
      className,
      currentPage,
      numPages,
    } = this.props;

    const options = this.getMenuOptions(numPages);

    const classes = classNames('pagination ba b-neutral-300', className);

    return (
      <Block background="neutral-200" padding="3" itemSpacing="4" alignItems="center" className={classes}>
        <Button
          disabled={currentPage === 1}
          onClick={this.onPrevClick}
          icon="arrow-small-left"
        >
          Prev
        </Button>
        <FieldSelect
          id="currentPageSelect"
          label="current page"
          hideLabel
          options={options}
          onChange={this.onPageSelect}
          value={{ value: currentPage, label: `${currentPage}` }}
          width="96px"
        />
        <Block textSize="6">
          {`of ${numPages}`}
        </Block>
        <Button
          disabled={currentPage === numPages}
          onClick={this.onNextClick}
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
