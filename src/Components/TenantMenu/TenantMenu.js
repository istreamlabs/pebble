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
   * The id of the currently selected tenant
   * so that it is highlighted in the list
   */
  currentTenantId: PropTypes.string,
  /**
   * Callback function that when defined, display a button to create a new tenant
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
   * A list of tenants the user has access to
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

// const closeTenantVariants = {
//   hideTenant: {
//     x: 33,
//   },
//   showTenant: {
//     x: 0,
//     transition: {
//       delay: 0.25,
//       ease: 'easeOut',
//     },
//   },
// };

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
        itemSpacing="2"
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
              className="add-tenant-btn"
            />
          )}
        </Block>
        <motion.div>
          <Button
            onClick={onCloseTenantMenu}
            icon={isMobile ? 'remove-circle' : 'nav-left'}
            size="small"
            accessibilityLabel="hide tenant menu"
            className="shadow-1"
          />
        </motion.div>
      </Block>
    );
  };

  const renderTenants = () => {
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
