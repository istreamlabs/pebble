### Basic Table Layout

If the data you wish to format is a simple array of objects, pass it to the `data` prop and the component will generate a table for you. Column widths will be divided equally.

```js
import Block from '../Block/Block';

import { PEOPLE_DATA } from '../../demo/data.js';

function BasicTable() {
  const COLUMNS = ['name', 'title', 'email', 'company'];

  return (
    <Table columns={COLUMNS} data={PEOPLE_DATA} />
  )
}

<Block height="280px">
  <BasicTable />
</Block>

```

### Column Widths

Set the width of each column by passing an array of widths.

```js
const WIDTHS = ['200px', '', '', '300px'];
const COLUMNS = ['name', 'title', 'email', 'company'];
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
}];

<Table columns={COLUMNS} data={DATA} columnWidths={WIDTHS} />
```

### Custom Cells

More commonly, you may want to combine properties into the same cell, or your data structure is more complex. For these cases, use the `<TableRow>` and `<TableCell>` components to customize how a row in your table is rendered.

```js
import Block from '../Block/Block';
import Icon from '../Icon/Icon';
import Text from '../Text/Text';

import { PEOPLE_DATA_2 } from '../../demo/data.js';

import TableRow from './Components/TableRow';   //import { TableRow } from '@istreamplanet/pebble';
import TableCell from './Components/TableCell'; //import { TableCell } from '@istreamplanet/pebble';

function BasicTable() {
  const COLUMNS = ['','name', 'contact', 'gender'];

  return (
    <Table columns={COLUMNS} columnWidths={['50px']}>
      {
        PEOPLE_DATA_2.map((row, index) => (
          <TableRow key={index}>
            <TableCell width="50px">
              <Icon name="profile-circle" size="24" className="neutral-300" />
            </TableCell>
            <TableCell>
              <Text size="4" bold>{row.name}</Text>
            </TableCell>
            <TableCell>
              <div className="mb-2">
                <a className="blue" href={`mailto:${row.email}`}>{row.email}</a>
              </div>
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
