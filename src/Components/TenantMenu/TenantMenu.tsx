import './TenantMenu.scss';

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import * as React from 'react';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../Block/Block' was resolved to '/Users/es... Remove this comment to see the full error message
import Block from '../Block/Block';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Button/Button' was resolved to '/Users/... Remove this comment to see the full error message
import Button from '../Button/Button';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Heading/Heading' was resolved to '/User... Remove this comment to see the full error message
import Heading from '../Heading/Heading';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Icon/Icon' was resolved to '/Users/esja... Remove this comment to see the full error message
import Icon from '../Icon/Icon';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Link/Link' was resolved to '/Users/esja... Remove this comment to see the full error message
import Link from '../Link/Link';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Text/Text' was resolved to '/Users/esja... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'framer-motion' or its correspo... Remove this comment to see the full error message
import Text from '../Text/Text';
import { motion } from 'framer-motion';
import { tenantType } from '../../Types';
import { useMobileLayout } from '../../Hooks';

const propTypes = {
  /**
   * Highlight the currently selected organization
   */
  currentTenantId: PropTypes.string,
  /**
   * Message to display if their are no tenants
   */
  emptyMessage: PropTypes.node,
  /**
   * Callback function when defined, display a button to create a new tenant
   */
  // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'custom' implicitly has an 'any' type.
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
  emptyMessage: 'There are no organizations',
};

const variants = {
  popUp: custom => {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return {
      opacity: [0, 1],
      y: [24, 0],
      transition: {
        type: 'spring',
        duration: 0.2,
        delay: custom / 16,
      },
    };
  },
};

function TenantMenu(props) {
  const {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    currentTenantId,
    emptyMessage,
    onTenantChange,
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        padding={['2 5', '3 5']}
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
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            responsive={false}
          >
            Organizations
          </Heading>
          {onAddTenant && (
            <Button
              onClick={onAddTenant}
              size="small"
              icon="add-bold"
              accessibilityLabel="add organization"
              plain
              className="brand-orange neutral-100-hover"
            />
          )}
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        {onCloseTenantMenu && (
          <Button
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            onClick={onCloseTenantMenu}
            icon={isMobile ? 'close' : 'nav-left'}
            plain
            accessibilityLabel="close organization menu"
            className="neutral-300 neutral-100-hover p-2"
          />
        )}
      </Block>
    );
  };

  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  const renderTenants = () => {
    if (!tenants || (tenants && tenants.length === 0)) {
      return (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Block direction="column" padding="5" color="neutral-300">
          <Block
            border={{ side: 'all', color: 'neutral-600' }}
            radius="2"
            padding="5"
            justify="center"
          >
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            {emptyMessage}
          </Block>
        </Block>
      );
    }

    const tenantMarkup = (
      <motion.ul className="tenant-menu">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        {tenants.map(({ name, realm, id, url }, i) => (
          <motion.li
            className="bg-hover bg-neutral-800-hover"
            key={i}
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            custom={i}
            animate="popUp"
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            variants={variants}
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            whileHover={{ paddingLeft: 8 }}
          >
            <Link
              external
              href={url}
              onClick={onTenantChange}
              className="tenant-link"
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            >
              <Block
                alignItems="center"
                itemSpacing="2"
                padding="3 5"
              >
                <Block direction="column" flex>
                  <Text bold>{name}</Text>
                  {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  >
                    <Icon
                      name="check-circle"
                      className="brand-orange absolute"
                      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      accessibilityLabel="currently selected organization"
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
      <Block
        direction="column"
        className="pb-5"
        overflow={{ vertical: 'auto' }}
      >
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
TenantMenu.displayName = 'TenantMenu';

export default TenantMenu;
