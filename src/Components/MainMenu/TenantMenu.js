import * as React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import Block from '../Block/Block';
import Icon from '../Icon/Icon';
import Link from '../Link/Link';
import Text from '../Text/Text';

import './TenantMenu.scss';

const propTypes = {
  /**
   * A list of tenants the user has access to
   */
  tenants: PropTypes.shape({
    current: PropTypes.string,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        realm: PropTypes.string.isRequired,
      }),
    ),
  }),
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
  const { tenants } = props;
  const currentTenantId = tenants.current;
  return (
    <motion.ul className="tenant-menu" variants={variants}>
      {tenants.options.map((tenant, i) => (
        <motion.li
          whileFocus={{ x: 10 }}
          whileHover={{ x: 10 }}
          key={i}
          variants={variants}
        >
          <Link href={tenant.url} className="tenant-link">
            <Block
              alignItems="center"
              itemSpacing="2"
              paddingVertical={[3]}
              paddingHorizontal={[4]}
            >
              <Block
                radius="2"
                width="50px"
                height="50px"
                background="neutral-700"
                justify="center"
                alignItems="center"
              />
              <Block direction="column" flex>
                <Text color="neutral-300" bold>
                  {tenant.name}
                </Text>
                <Text color="neutral-500" size="6">
                  {tenant.realm}
                </Text>
              </Block>

              {tenant.id === currentTenantId && (
                <Icon
                  name="check-circle"
                  className="brand-orange"
                  accessibilityLabel="currently selected tenant"
                  size="24"
                />
              )}
            </Block>
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
}

TenantMenu.propTypes = propTypes;

export default TenantMenu;
