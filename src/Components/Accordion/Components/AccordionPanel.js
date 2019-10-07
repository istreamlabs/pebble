import Block from '../../Block/Block';
import Icon from '../../Icon/Icon';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  /**
   * contents of the panel
   */
  children: PropTypes.node,
  /**
   * This value can be used to open the panel in the Accordion
   */
  id: PropTypes.string.isRequired,
  /**
   * A string or element to use as the button that expands/collapses the panel
   */
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
    .isRequired,
  /**
   * Are the panel contents visible
   */
  open: PropTypes.bool,
  /**
   * Function to call when the label is pressed
   */
  onPanelChange: PropTypes.func,
};

function AccordionPanel(props) {
  const { children, id, label, open, onPanelChange, ...rest } = props;

  const arrowIcon = open ? 'arrow-small-up' : 'arrow-small-down';

  const handleClick = event => {
    event.preventDefault();
    onPanelChange();
  };

  return (
    <Block
      as="details"
      displayBlock
      open={open}
      id={id}
      data-testid={id}
    >
      {typeof label === 'string' ? (
        <Block
          as="summary"
          color="neutral-600"
          padding={[4]}
          flex
          border="bottom"
          onClick={handleClick}
          className="fw-700 w-100 p-0 bn bg-white bg-blue-lighter-hover"
          itemSpacing="2"
          justify="between"
        >
          <div>{label}</div>
          <Icon name={arrowIcon} />
        </Block>
      ) : (
        <summary onClick={handleClick}>{label(props)}</summary>
      )}
      <Block {...rest}>{children}</Block>
    </Block>
  );
}

AccordionPanel.propTypes = propTypes;
AccordionPanel.displayName = 'AccordionPanel';

export default AccordionPanel;
