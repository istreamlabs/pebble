### Basic Table

```js
import TableBody from './Components/TableBody'; //import { TableBody } from '@istreamplanet/pebble';
import TableHeader from './Components/TableHeader'; //import { TableHeader } from '@istreamplanet/pebble';
import TableRow from './Components/TableRow';   //import { TableRow } from '@istreamplanet/pebble';
import TableCell from './Components/TableCell'; //import { TableCell } from '@istreamplanet/pebble';

<Table>
  <TableHeader mobileLabel="Contacts">
    <TableCell>Name</TableCell>
    <TableCell>Title</TableCell>
    <TableCell>Email</TableCell>
    <TableCell>Company</TableCell>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Vicki Rohlfs</TableCell>
      <TableCell>VP Marketing</TableCell>
      <TableCell>ntanslie1@example.com</TableCell>
      <TableCell>Acme Inc.</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Stacy Mardlin</TableCell>
      <TableCell>Senior Cost Accountant</TableCell>
      <TableCell>smardlin2@example.com</TableCell>
      <TableCell>Acme Inc.</TableCell>
    </TableRow>
  </TableBody>
</Table>

```

### Custom Cells

More commonly, you may want to combine properties into the same cell, or your data structure is more complex. For these cases, use the `<TableRow>` and `<TableCell>` components to customize how a row in your table is rendered.

```js
import Block from '../Block/Block';
import Icon from '../Icon/Icon';
import Text from '../Text/Text';

import { PEOPLE_DATA_2 } from '../../demo/data.js';

import TableBody from './Components/TableBody'; //import { TableBody } from '@istreamplanet/pebble';
import TableHeader from './Components/TableHeader'; //import { TableHeader } from '@istreamplanet/pebble';
import TableRow from './Components/TableRow';   //import { TableRow } from '@istreamplanet/pebble';
import TableCell from './Components/TableCell'; //import { TableCell } from '@istreamplanet/pebble';

function CustomCellTable() {
  const COLUMNS = ['','name', 'contact', 'company'];

  return (
    <Table columns={COLUMNS} height="250px">
      <TableHeader mobileLabel="Contacts">
        <TableCell width="56px" />
        <TableCell width="300px">Name</TableCell>
        <TableCell>Contact</TableCell>
        <TableCell>Company</TableCell>
      </TableHeader>
      <TableBody>
      {
        PEOPLE_DATA_2.map((row, index) => (
          <TableRow key={index}>
            <TableCell width="56px">
              <Icon name="profile-circle" size="24" className="neutral-300" />
            </TableCell>
            <TableCell width="300px">
              <Text size="4" bold>{row.name}</Text>
            </TableCell>
            <TableCell>
              <div className="mb-2">
                <a className="blue" href={`mailto:${row.email}`}>{row.email}</a>
              </div>
              <div>{row.phone}</div>
            </TableCell>
            <TableCell>{row.company}</TableCell>
          </TableRow>
        ))
      }
      </TableBody>
    </Table>
  )
}

<CustomCellTable />
```

### Pagination Example

```js
import { useState } from 'react';
import Block from '../Block/Block';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Button from '../Button/Button';
import FieldSelect from '../FieldSelect/FieldSelect';
import TableBody from './Components/TableBody'; //import { TableBody } from '@istreamplanet/pebble';
import TableHeader from './Components/TableHeader'; //import { TableHeader } from '@istreamplanet/pebble';
import TableRow from './Components/TableRow';   //import { TableRow } from '@istreamplanet/pebble';
import TableCell from './Components/TableCell'; //import { TableCell } from '@istreamplanet/pebble';

const DATA = [];
for (var i = 0; i < 200; i++) {
  DATA.push({
      row: i+1,
  });
}

const PAGE_SIZE_OPTIONS = [
  { value: '5', label: '5' },
  { value: '10', label: '10' },
  { value: '20', label: '20' },
  { value: '40', label: '40' },
]

function PaginationTableSample() {

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  handlePageChange = nextPage => {
    if (nextPage < 1) {
      return;
    }
    if (nextPage > Math.ceil(DATA.length / pageSize)) {
      return;
    }
    setPage(nextPage);
  };

  handleLimitChange = (nextPageSize) => {
    const nextPageNum = Math.ceil(DATA.length / nextPageSize);
    if (nextPageNum < page) {
      setPageSize(nextPageSize);
      setPage(nextPageNumb);
    } else {
      setPageSize(nextPageSize);
    }
  };

  const visibleData = () => {
    const min = (page - 1) * pageSize;
    return DATA.slice(min, min + pageSize);
  };

  return (
    <>
    <Table height="300px">
      <TableHeader mobileLabel="Pagination Example">
        <TableCell>Column 1</TableCell>
        <TableCell>Column 2</TableCell>
        <TableCell>Column 3</TableCell>
        <TableCell>Column 4</TableCell>
      </TableHeader>
      <TableBody>
        {
          visibleData().map((row, index) => (
            <TableRow key={index}>
              <TableCell>row: {row.row}</TableCell>
              <TableCell>row: {row.row}</TableCell>
              <TableCell>row: {row.row}</TableCell>
              <TableCell>row: {row.row}</TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>

    <Block marginTop="5">
      <ButtonGroup>
        <Button onClick={() => handlePageChange(page - 1)}>prev</Button>
        <Button onClick={() => handlePageChange(page + 1)}>next</Button>
      </ButtonGroup>
      <FieldSelect
        id="single"
        options={PAGE_SIZE_OPTIONS}
        label="page size"
        placeholder={pageSize}
        onChange={(object,action)=>{
          handleLimitChange(object.value)
        }}
        className="w4"
      />
      </Block>
    </>
  )
}

<PaginationTableSample />
```
