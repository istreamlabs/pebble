import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Block from '../../Block/Block';

const FormLayoutRow = ({
  className,
  children
}) => {
  const itemMarkup = React.Children.map(children, child => React.cloneElement(
    child,
    {
      className: classNames(child.props.className, {
        'w-100': child.props.className === undefined && child.props.width === undefined
      })
    }
  ));

  return (
    <Block flex direction={['column', 'row']} itemSpacing="5" className={className}>
      {itemMarkup}
    </Block>
  );
};

export default FormLayoutRow;

FormLayoutRow.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
