import './TenantMenu.scss';

import * as React from 'react';

import Block from '../Block/Block';
import Button from '../Button/Button';
import Heading from '../Heading/Heading';
import Icon from '../Icon/Icon';
import Link from '../Link/Link';
import PropTypes from 'prop-types';
import Text from '../Text/Text';

import { motion } from 'framer-motion';
import { tenantType } from '../../Types';

import { useMobileLayout } from '../../Hooks';

const propTypes = {
  /**
   * Highlight the currently selected tenant
   */
  currentTenantId: PropTypes.string,
  /**
   * Message to display if their are no tenants
   */
  emptyMessage: PropTypes.node,
  /**
   * Callback function when defined, display a button to create a new tenant
   */
  onAddTenant: PropTypes.func,
  /**
   * Function to call when a tenant is clicked
   */
  onTenantChange: PropTypes.func,
  /**
   * Callback function when defined, display a button to hide the tenant menu
   */
  onCloseTenantMenu: PropTypes.func,
  /**
   * A list of tenants the current user has access to
   */
  tenants: tenantType,
};

const defaultProps = {
  emptyMessage: 'There are no tenants',
};

const variants = {
  showTenant: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      y: { stiffness: 1000, velocity: -100 },
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  hideTenant: {
    opacity: 0,
    y: 50,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

function TenantMenu(props) {
  const {
    currentTenantId,
    emptyMessage,
    onTenantChange,
    onAddTenant,
    tenants,
    onCloseTenantMenu,
  } = props;

  const isMobile = useMobileLayout();

  const renderHeader = () => {
    return (
      <Block
        color="neutral-100"
        background="black-30"
        paddingVertical={[2, 3]}
        paddingHorizontal="5"
        alignItems="center"
        className="relative"
        itemSpacing="3"
        justify="between"
      >
        <Block alignItems="center" itemSpacing="2">
          <Heading
            element="4"
            color="neutral-100"
            size="5"
            responsive={false}
          >
            Tenants
          </Heading>
          {onAddTenant && (
            <Button
              onClick={onAddTenant}
              size="small"
              icon="add-bold"
              accessibilityLabel="add tenant"
              plain
              className="brand-orange neutral-100-hover"
            />
          )}
        </Block>
        {onCloseTenantMenu && (
          <Button
            onClick={onCloseTenantMenu}
            icon={isMobile ? 'close' : 'nav-left'}
            plain
            accessibilityLabel="close tenant menu"
            className="neutral-300 neutral-100-hover p-2"
          />
        )}
      </Block>
    );
  };

  const renderTenants = () => {
    if (!tenants || (tenants && tenants.length === 0)) {
      return (
        <Block direction="column" padding="5" color="neutral-300">
          <Block
            border={{ side: 'all', color: 'neutral-600' }}
            radius="2"
            padding="5"
            justify="center"
          >
            {emptyMessage}
          </Block>
        </Block>
      );
    }

    const tenantMarkup = (
      <motion.ul className="tenant-menu" variants={variants}>
        {tenants.map(({ name, realm, id, url }, i) => (
          <motion.li
            whileHover={{ paddingLeft: 8 }}
            key={i}
            variants={variants}
            className="bg-hover bg-neutral-800-hover"
          >
            <Link
              external
              href={url}
              onClick={onTenantChange}
              className="tenant-link"
            >
              <Block
                alignItems="center"
                itemSpacing="2"
                paddingVertical={[3]}
                paddingHorizontal={5}
              >
                <Block direction="column" flex>
                  <Text bold>{name}</Text>
                  <Text color="neutral-400" size="6">
                    {realm}
                  </Text>
                </Block>
                {id === currentTenantId && (
                  <Block
                    justify="center"
                    alignItems="center"
                    width="16px"
                    height="16px"
                    background="white"
                    className="relative"
                  >
                    <Icon
                      name="check-circle"
                      className="brand-orange absolute"
                      accessibilityLabel="currently selected tenant"
                      size="24"
                    />
                  </Block>
                )}
              </Block>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    );
    return (
      <Block direction="column" overflow={{ vertical: 'auto' }}>
        {tenantMarkup}
      </Block>
    );
  };

  return (
    <Block
      height="100"
      width="100"
      background="neutral-700"
      direction="column"
    >
      {renderHeader()}
      {renderTenants()}
    </Block>
  );
}

TenantMenu.propTypes = propTypes;
TenantMenu.defaultProps = defaultProps;

export default TenantMenu;
