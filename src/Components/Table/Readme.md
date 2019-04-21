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
import Pagination from '../Pagination/Pagination';
import TableBody from './Components/TableBody'; //import { TableBody } from '@istreamplanet/pebble';
import TableHeader from './Components/TableHeader'; //import { TableHeader } from '@istreamplanet/pebble';
import TableRow from './Components/TableRow';   //import { TableRow } from '@istreamplanet/pebble';
import TableCell from './Components/TableCell'; //import { TableCell } from '@istreamplanet/pebble';

const DATA = [];
for (var i = 0; i < 500; i++) {
  DATA.push({
      row: i+1,
  });
}

const PAGE_SIZE_OPTIONS = [
  { value: 25, label: '25' },
  { value: 50, label: '50' },
  { value: 100, label: '100' },
]

function PaginationTableSample() {

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(25);
  const [numPages, setNumPages] = useState(Math.ceil(DATA.length / pageSize))

  const handlePageChange = nextPage => {
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
    const nextNumPages = Math.ceil(DATA.length / nextPageSize);

    setNumPages(nextNumPages);
    console.log('numPages', nextNumPages)

    if (nextPageNum < page) {
      setPageSize(nextPageSize);
      setPage(nextPageNum);
    } else {
      setPageSize(nextPageSize);
    }
  };

  const visibleData = () => {
    const min = (page - 1) * pageSize;
    return DATA.slice(min, min + pageSize);
  };

  const currentDisplayRange = () => {
    const start = (page - 1) * pageSize + 1;
    const end = start + pageSize - 1;

    return (
      <Block marginBottom="4">showing {start} - {end} of {DATA.length}</Block>
    )
  }

  return (
    <>
      <FieldSelect
        id="pageSize"
        options={PAGE_SIZE_OPTIONS}
        label="choose a page size"
        placeholder={pageSize}
        onChange={(object,action)=>{
          handleLimitChange(object.value)
        }}
        className="w5 mb-5 "
      />
      {currentDisplayRange()}
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

      <Pagination
        onPrev={() => handlePageChange(page - 1)}
        onNext={() => handlePageChange(page + 1)}
        onPageChange={handlePageChange}
        currentPage={page}
        numPages={numPages}
        key={numPages}
      >
      </Pagination>
    </>
  )
}

<PaginationTableSample />
```
