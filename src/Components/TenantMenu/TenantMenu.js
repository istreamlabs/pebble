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
   * Highlight the currently selected tenant by passing setting it's ID here
   */
  currentTenantId: PropTypes.string,
  /**
   * Callback function when defined, display a button to create a new tenant
   */
  onAddTenant: PropTypes.func,
  /**
   * Function to call when a tenant is clicked
   */
  onTenantChange: PropTypes.func,
  /**
   * Display a button to hide the tenant menu when the button is clicked
   */
  onCloseTenantMenu: PropTypes.func,
  /**
   * A list of tenants the current user has access to
   */
  tenants: tenantType,
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
            className="neutral-300 neutral-100-hover"
          />
        )}
      </Block>
    );
  };

  const renderTenants = () => {
    if (tenants && tenants.length > 0) {
      const tenantMarkup = tenants.map(
        ({ name, realm, id, url }, i) => (
          <motion.li
            whileHover={{ paddingLeft: 8 }}
            key={i}
            variants={variants}
            className="bg-neutral-800-hover"
          >
            <Link
              external
              href={url}
              onClick={id !== currentTenantId ? onTenantChange : null}
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
        ),
      );
      return tenantMarkup;
    }
  };

  return (
    <Block
      height="100"
      width="100"
      background="neutral-700"
      direction="column"
      style={{
        boxShadow: 'inset -8px 0 4px -2px rgba(0, 0, 0, 0.1)',
      }}
    >
      {renderHeader()}
      <Block direction="column" overflow={{ vertical: 'auto' }}>
        <motion.ul className="tenant-menu" variants={variants}>
          {renderTenants()}
        </motion.ul>
      </Block>
    </Block>
  );
}

TenantMenu.propTypes = propTypes;

export default TenantMenu;
