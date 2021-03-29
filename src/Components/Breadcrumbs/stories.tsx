/* eslint-disable jsx-a11y/anchor-is-valid */
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react-router-dom' or its corre... Remove this comment to see the full error message
import { BrowserRouter as DemoBrowserRouter } from 'react-router-dom';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../Block/Block' was resolved to '/Users/es... Remove this comment to see the full error message
import Block from '../Block/Block';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Breadcrumbs' was resolved to '/Users/esj... Remove this comment to see the full error message
import Breadcrumbs from './Breadcrumbs';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Button/Button' was resolved to '/Users/... Remove this comment to see the full error message
import Button from '../Button/Button';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Link/Link' was resolved to '/Users/esja... Remove this comment to see the full error message
import Link from '../Link/Link';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../DropdownMenu/DropdownMenu' was resolved... Remove this comment to see the full error message
import DropdownMenu from '../DropdownMenu/DropdownMenu';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../DropdownMenu/Components/DropdownItem' w... Remove this comment to see the full error message
import DropdownItem from '../DropdownMenu/Components/DropdownItem';

// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
storiesOf('Breadcrumbs', module).add('all', () => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <DemoBrowserRouter>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <Breadcrumbs>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Link href="#">Parent</Link>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <DropdownMenu
        toggle={
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Button plain iconAfterText="arrow-small-down">
            Level 1
          </Button>
        }
      >
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <DropdownItem>Level 1a</DropdownItem>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <DropdownItem>Level 1b</DropdownItem>
      </DropdownMenu>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block alignItems="center" itemSpacing="2">
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        <div>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Link href="/">Level 2</Link>
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        </div>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <DropdownMenu
          toggle={
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Button
              plain
              accessibilityLabel=""
              icon="arrow-small-down"
            />
          }
        >
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <DropdownItem href="#">Level 2a</DropdownItem>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <DropdownItem href="#">Level 2b</DropdownItem>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <DropdownItem href="#">Level 2c</DropdownItem>
        </DropdownMenu>
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Link href="#">Level 3</Link>
    </Breadcrumbs>
  </DemoBrowserRouter>
));
