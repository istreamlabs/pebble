import React from 'react';
import PropTypes from 'prop-types';

import Block from '../../Block/Block';
import Icon from '../../Icon/Icon';

const propTypes = {
  /**
   * contents of the panel
   */
  children: PropTypes.node,
  /**
   * A string or element to use as the button that expands/collapses the panel
   */
  label: PropTypes.node.isRequired,
  /**
   * Expands the panel
   */
  active: PropTypes.bool,
  /**
   * Function to call when the label is pressed
   */
  onPanelChange: PropTypes.func,
};

function AccordionPanel(props) {
  const { children, label, active, onPanelChange, ...rest } = props;

  const arrowIcon = active ? 'arrow-small-up' : 'arrow-small-down';

  return (
    <Block displayBlock>
      <button
        type="button"
        role="tab"
        aria-selected={active}
        aria-expanded={active}
        onClick={onPanelChange}
        className="w-100 p-0 bn bg-white bg-blue-lighter-hover"
        style={{
          outline: 0,
          cursor: 'pointer',
          fontSize: 'inherit',
        }}
      >
        {typeof label === 'string' ? (
          <Block
            color="neutral-600"
            padding={[4]}
            flex
            justify="between"
            border="bottom"
            className="fw-700"
          >
            <div>{label}</div>
            <Icon name={arrowIcon} />
          </Block>
        ) : (
          label(props)
        )}
      </button>
      {active && <Block {...rest}>{children}</Block>}
    </Block>
  );
}

AccordionPanel.propTypes = propTypes;
AccordionPanel.displayName = 'AccordionPanel';

export default AccordionPanel;
