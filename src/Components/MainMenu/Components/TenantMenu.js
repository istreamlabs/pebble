import './TenantMenu.scss';

import * as React from 'react';
import { motion } from 'framer-motion';

import Block from '../../Block/Block';
import Icon from '../../Icon/Icon';
import Link from '../../Link/Link';
import PropTypes from 'prop-types';
import Text from '../../Text/Text';

import { tenantType } from '../../../Types';

const propTypes = {
  /**
   * The id of the currently selected tenant
   * so that it is highlighted in the list
   */
  currentTenantId: PropTypes.string,
  /**
   * Function to call when a tenant is clicked
   */
  onTenantChange: PropTypes.func,
  /**
   * A list of tenants the user has access to
   */
  tenants: tenantType,
};

const variants = {
  showTenant: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      y: { stiffness: 1000, velocity: -100 },
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
  hideTenant: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

function TenantMenu(props) {
  const { currentTenantId, onTenantChange, tenants } = props;

  if (!tenants) return null;

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
    <Block direction="column" overflow={{ vertical: 'auto' }}>
      <motion.ul className="tenant-menu" variants={variants}>
        {renderTenants()}
      </motion.ul>
    </Block>
  );
}

TenantMenu.propTypes = propTypes;

export default TenantMenu;
