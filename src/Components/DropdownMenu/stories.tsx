// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react-router-dom' or its corre... Remove this comment to see the full error message
import { BrowserRouter as DemoBrowserRouter } from 'react-router-dom';

import '../../Styles/foundation.scss';

// @ts-expect-error ts-migrate(6142) FIXME: Module './DropdownMenu' was resolved to '/Users/es... Remove this comment to see the full error message
import DropdownMenu from './DropdownMenu';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Components/DropdownItemGroup' was resolv... Remove this comment to see the full error message
import DropdownItemGroup from './Components/DropdownItemGroup';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Components/DropdownItem' was resolved to... Remove this comment to see the full error message
import DropdownItem from './Components/DropdownItem';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Components/DropdownMenuSeparator' was re... Remove this comment to see the full error message
import DropdownMenuSeparator from './Components/DropdownMenuSeparator';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../Block/Block' was resolved to '/Users/es... Remove this comment to see the full error message
import Block from '../Block/Block';

// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
storiesOf('DropdownMenu', module)
  .add('dropdown', () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <DemoBrowserRouter>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block itemSpacing="5" direction="column">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <DropdownMenu toggle="Dropdown" overlayClassName="w5">
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <DropdownItem icon="add-bold">default button</DropdownItem>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <DropdownItem href="/">link</DropdownItem>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <DropdownItem external href="https://www.istreamplanet.com">
            www.istreamplanet.com
          </DropdownItem>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <DropdownMenuSeparator />
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <DropdownItem danger icon="remove-circle">
            danger button
          </DropdownItem>
        </DropdownMenu>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <DropdownMenu toggle="Disabled Dropdown" disabled>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <DropdownItem>disabled</DropdownItem>
        </DropdownMenu>
      </Block>
    </DemoBrowserRouter>
  ))
  .add('open with separator', () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <DemoBrowserRouter>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <DropdownMenu open toggle="Dropdown" overlayClassName="w5">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <DropdownItem icon="add-bold">default button</DropdownItem>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <DropdownItem href="/">link</DropdownItem>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <DropdownItem external href="https://www.istreamplanet.com">
          www.istreamplanet.com
        </DropdownItem>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <DropdownMenuSeparator />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <DropdownItem danger icon="remove-circle">
          danger button
        </DropdownItem>
      </DropdownMenu>
    </DemoBrowserRouter>
  ))
  .add('open with groups', () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <DemoBrowserRouter>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <DropdownMenu open toggle="Dropdown with Item Groups">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <DropdownItemGroup title="Transcoder">
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <DropdownItem icon="play">start</DropdownItem>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <DropdownItem icon="stop">stop</DropdownItem>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <DropdownItem icon="refresh">restart</DropdownItem>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <DropdownItem disabled>disabled</DropdownItem>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <DropdownItem external href="https://www.istreamplanet.com">
            www.istreamplanet.com
          </DropdownItem>
        </DropdownItemGroup>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <DropdownItemGroup title="Components">
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <DropdownItem href="#/Components/Button">
            Button
          </DropdownItem>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <DropdownItem href="#/Components/Frame">Frame</DropdownItem>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <DropdownItem href="#/Components/Text">Text</DropdownItem>
        </DropdownItemGroup>
      </DropdownMenu>
    </DemoBrowserRouter>
  ));
