### Basic Table

```js
import TableBody from './Components/TableBody'; //import { TableBody } from '@istreamplanet/pebble';
import TableHeader from './Components/TableHeader'; //import { TableHeader } from '@istreamplanet/pebble';
import TableHeaderCell from './Components/TableHeaderCell'; //import { TableHeaderCell } from '@istreamplanet/pebble';
import TableRow from './Components/TableRow';   //import { TableRow } from '@istreamplanet/pebble';
import TableCell from './Components/TableCell'; //import { TableCell } from '@istreamplanet/pebble';

<Table>
  <TableHeader>
    <TableHeaderCell>Name</TableHeaderCell>
    <TableHeaderCell>Title</TableHeaderCell>
    <TableHeaderCell>Email</TableHeaderCell>
    <TableHeaderCell>Company</TableHeaderCell>
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

### Custom Cells and Table Body Scrolling

More commonly, you may want to combine properties into the same cell, or your data structure is more complex. For these cases, use the `<TableRow>` and `<TableCell>` components to customize how a row in your table is rendered.

If the Table has a height or width constraint, pass the overflow behavior on the `TableBody` to enable scrolling. The `overflow` prop accepts the same values as the `overflow` prop on the [Block component](/#/Components/Block).

```js
import Block from '../Block/Block';
import Icon from '../Icon/Icon';
import Text from '../Text/Text';

import { PEOPLE_DATA_2 } from '../../demo/data.js';

import TableBody from './Components/TableBody'; //import { TableBody } from '@istreamplanet/pebble';
import TableHeader from './Components/TableHeader'; //import { TableHeader } from '@istreamplanet/pebble';
import TableHeaderCell from './Components/TableHeaderCell'; //import { TableHeaderCell } from '@istreamplanet/pebble';
import TableRow from './Components/TableRow';   //import { TableRow } from '@istreamplanet/pebble';
import TableCell from './Components/TableCell'; //import { TableCell } from '@istreamplanet/pebble';

function CustomCellTable() {
  return (
    <Table height="250px">
      <TableHeader mobileLabel="Contacts">
        <TableHeaderCell width="56px" />
        <TableHeaderCell width="300px">Name</TableHeaderCell>
        <TableHeaderCell>Contact</TableHeaderCell>
        <TableHeaderCell>Age</TableHeaderCell>
      </TableHeader>
      <TableBody overflow={{ vertical: 'scroll' }}>
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
              <TableCell>{row.age}</TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  );
}

<CustomCellTable />
```

### Sorting Example

Pass a `sortDirection` and `onSort` function to each sortable `TableHeaderCell` component

```js
import Block from '../Block/Block';
import Icon from '../Icon/Icon';
import Text from '../Text/Text';

import { PEOPLE_DATA_2 } from '../../demo/data.js';

import TableBody from './Components/TableBody'; //import { TableBody } from '@istreamplanet/pebble';
import TableHeader from './Components/TableHeader'; //import { TableHeader } from '@istreamplanet/pebble';
import TableHeaderCell from './Components/TableHeaderCell'; //import { TableHeaderCell } from '@istreamplanet/pebble';
import TableRow from './Components/TableRow';   //import { TableRow } from '@istreamplanet/pebble';
import TableCell from './Components/TableCell'; //import { TableCell } from '@istreamplanet/pebble';

import { useState } from 'react';

function compare(key) {
  return function (a, b) {
    // property does not exist
    if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }

    const varA = (typeof a[key] === 'string')
      ? a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string')
      ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return comparison
  };
}

function SortableTable() {
  const [nameSortDirection, setNameSortDirection] = useState('ASC');
  const [ageSortDirection, setAgeSortDirection] = useState(null);

  const handleSort = (title, prevDirection) => {
    let nextDirection = null;

    if (prevDirection === 'ASC') {
      nextDirection = 'DESC';
    }

    if (prevDirection === 'DESC') {
      nextDirection = 'ASC';
    }

    if (prevDirection === null) {
      nextDirection = 'ASC';
    }

    if (title === 'name') {
      setNameSortDirection(nextDirection);
      setAgeSortDirection(null);
      return;
    }

    if (title === 'age') {
      setNameSortDirection(null);
      setAgeSortDirection(nextDirection);
    }
  };

  const getSortedData = (DATA) => {
    if (nameSortDirection) {
      const sorted = DATA.sort(compare('name'));

      if (nameSortDirection === 'ASC') {
        return sorted;
      }

      if (nameSortDirection === 'DESC') {
        return sorted.reverse();
      }
    }

    if (ageSortDirection) {
      const sorted = DATA.sort(compare('age'));
      if (ageSortDirection === 'ASC') {
        return sorted;
      }

      if (ageSortDirection === 'DESC') {
        return sorted.reverse();
      }
    }
    return DATA;
  };

  return (
    <Table>
      <TableHeader mobileLabel="Contacts">
        <TableHeaderCell
          sortDirection={nameSortDirection}
          onSort={() => handleSort('name', nameSortDirection)}
        >
          Name
        </TableHeaderCell>
        <TableHeaderCell
          sortDirection={ageSortDirection}
          onSort={() => handleSort('age', ageSortDirection)}
        >
          Age
        </TableHeaderCell>
      </TableHeader>
      <TableBody>
        {
          getSortedData(PEOPLE_DATA_2).map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.age}</TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  );
}

<SortableTable />
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
import TableHeaderCell from './Components/TableHeaderCell'; //import { TableHeaderCell } from '@istreamplanet/pebble';
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
        label="page size"
        placeholder={pageSize}
        onChange={(object,action)=>{
          handleLimitChange(object.value)
        }}
        className="w4 mb-5 "
      />
      {currentDisplayRange()}
      <Table height="300px">
        <TableHeader mobileLabel="Pagination Example">
          <TableHeaderCell>Column 1</TableHeaderCell>
          <TableHeaderCell>Column 2</TableHeaderCell>
          <TableHeaderCell>Column 3</TableHeaderCell>
          <TableHeaderCell>Column 4</TableHeaderCell>
        </TableHeader>
        <TableBody overflow={{ vertical: 'scroll' }}>
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
        onPageChange={handlePageChange}
        currentPage={page}
        numPages={numPages}
      >
      </Pagination>
    </>
  )
}

<PaginationTableSample />
```
