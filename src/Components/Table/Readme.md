### Auto Generated Table

If the data you wish to format is a simple array of objects, pass it to the `data` prop and the component will generate a table for you. Column widths will be divided equally.

```js
import Block from '../Block/Block';

const DATA = [{
  name: 'Vicki Rohlfs',
  job_title: 'VP Marketing',
  email: 'vrohlfs0@zdnet.com',
  company: 'Weimann Group'
}, {
  name: 'Nicol Tanslie',
  job_title: 'Systems Administrator III',
  email: 'ntanslie1@com.com',
  company: 'Jakubowski Inc'
}, {
  name: 'Stacia Mardlin',
  job_title: 'Senior Cost Accountant',
  email: 'smardlin2@storify.com',
  company: 'Jacobs, Kirlin and Runte'
}, {
  name: 'Carlos St Leger',
  job_title: 'Assistant Manager',
  email: 'cst3@4shared.com',
  company: 'Torp Inc'
}, {
  name: 'Kaye Swabey',
  job_title: 'Data Coordiator',
  email: 'kswabey4@etsy.com',
  company: 'Lesch Group'
}, {
  name: 'Jose McGahy',
  job_title: 'Systems Administrator I',
  email: 'jmcgahy5@cafepress.com',
  company: 'Runolfsdottir, Simonis and Bednar'
}, {
  name: 'Emalia Warnes',
  job_title: 'Quality Engineer',
  email: 'ewarnes6@alexa.com',
  company: 'Gusikowski-Glover'
}, {
  name: 'Tera Huffa',
  job_title: 'Project Manager',
  email: 'thuffa7@pinterest.com',
  company: 'Stiedemann Inc'
}, {
  name: 'Maudie Paireman',
  job_title: 'VP Sales',
  email: 'mpaireman8@scientificamerican.com',
  company: 'Runolfsdottir-Mraz'
}, {
  name: 'Blake Cossans',
  job_title: 'Account Coordinator',
  email: 'bcossans9@bluehost.com',
  company: 'Frami LLC'
}]


import { TableRow, TableCell } from './Table';

function BasicTable() {
  const COLUMNS = ['name', 'title', 'email', 'company'];

  return (
    <Table columns={COLUMNS} data={DATA} />
  )
}

<Block height="280px">
  <BasicTable />
</Block>

```

### Manual Table

More commonly, you may want to combine properties into the same cell, or your data structure is more complex. For these cases, use the `<TableRow>` and `<TableCell>` components to customize how a row in your table is rendered.

```js
import Block from '../Block/Block';
import { TableRow, TableCell } from './Table';

const DATA = [{
  name: 'Kelley Roxbee',
  email: 'kroxbee0@examiner.com',
  phone: "900-439-4457",
  gender: 'Male'
}, {
  name: 'Loralie Archibould',
  email: 'larchibould1@netscape.com',
  gender: 'Female'
}, {
  name: 'Gene Regorz',
  email: 'gregorz2@reddit.com',
  phone: "900-439-4457",
  gender: 'Male'
}, {
  name: 'Stan Clarkin',
  email: 'sclarkin3@samsung.com',
  phone: "900-439-4457",
  gender: 'Male'
}, {
  name: 'Carolyne Juden',
  email: 'cjuden4@ted.com',
  phone: "900-439-4457",
  gender: 'Female'
}]

function BasicTable() {
  const COLUMNS = ['name', 'contact', 'gender'];

  return (
    <Table columns={COLUMNS}>
      {
        DATA.map((row, index) => (
          <TableRow key={index}>
            <TableCell>{row.name}</TableCell>
            <TableCell>
              <div className="mb-2"><a href={`mailto:${row.email}`}>{row.email}</a></div>
              <div>{row.phone}</div>
            </TableCell>
            <TableCell>{row.gender}</TableCell>
          </TableRow>
        ))
      }
    </Table>
  )
}

<Block height="300px">
  <BasicTable />
</Block>

```

### Complex Table Cells

When you want to display information in a tabular format, but need more control over how each cell is rendered, use a `TableRow` containing a set of `TableCell`.

```js
import { BrowserRouter as DemoBrowserRouter } from 'react-router-dom';
import classNames from 'classnames';

import { TableRow, TableCell } from './Table';

import Block from '../Block/Block';
import Button from '../Button/Button';
import Text from '../Text/Text';
import Badge from '../Badge/Badge';
import Link from '../Link/Link';

import DropdownMenu from '../DropdownMenu/DropdownMenu';
import DropdownItem from '../DropdownMenu/Components/DropdownItem';
import DropdownMenuSeparator from '../DropdownMenu/Components/DropdownMenuSeparator';

import { CHANNEL_DATA } from '../../demo/data.js';

function CustomTable() {
  const COLUMNS = ['Channel ID', 'Blueprint', 'Desired Status', 'Region Status', ''];
  const WIDTHS =  [null, '200px', '90px', '240px', '80px']

  const STATUS_BADGE_MAP = {
    'on': 'success',
    'off': 'default',
    'reconciling': 'warn',
  }

  const getDropdownMarkup = () => (
    <DropdownMenu toggle={<Button size="small" icon="menu-dots" accessibilityLabel="actions" />}>
      <DropdownItem icon="refresh">restart</DropdownItem>
      <DropdownMenuSeparator />
      <DropdownItem icon="stop" danger>stop</DropdownItem>
    </DropdownMenu>
  )

  const getRowMarkup = (row, index) => {
    let test = '';
    let statusMarkup = [];
    let regionState;

    for (const prop in row.state.regions) {
      if (!row.state.regions.hasOwnProperty(prop)) {
          //The current property is not a direct property of p
          continue;
      }
      regionState = row.state.regions[prop].channel_state;

      statusMarkup.push(
        <Block key={`${index}-${prop}`} paddingHorizontal="4" justify="between" paddingVertical="3">
          <div className="text-transform-uppercase fs-6">{prop}</div>
          <div className="fw-700">
            <Badge type={STATUS_BADGE_MAP[regionState]}>{regionState}</Badge>
          </div>
        </Block>);
    }

    return (
      <TableRow key={index}>
        <TableCell flex>
          <Link href="/#/Components/Table"><Text bold>{row.id}</Text></Link>
        </TableCell>
        <TableCell width={WIDTHS[1]}>
          <Link href="/#/Components/Table">{row.blueprint.id} v{row.blueprint.version}</Link>
        </TableCell>
        <TableCell width={WIDTHS[2]}>
          {row.state.desired_state}
        </TableCell>
        <TableCell padding="0" width={WIDTHS[3]}>
          {statusMarkup}
        </TableCell>
        <TableCell width={WIDTHS[4]}>
          {getDropdownMarkup()}
        </TableCell>
      </TableRow>
    )
  }

  return (
    <Block height="400px">
      <Table width="862px" columns={COLUMNS} columnWidths={WIDTHS}>
        {CHANNEL_DATA.map((row, index) => getRowMarkup(row, index))}
      </Table>
    </Block>
  )
}

<DemoBrowserRouter>
    <CustomTable />
</DemoBrowserRouter>

```
