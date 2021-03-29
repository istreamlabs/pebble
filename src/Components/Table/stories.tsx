// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React, { useState } from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';

// @ts-expect-error ts-migrate(6142) FIXME: Module './Table' was resolved to '/Users/esjaastad... Remove this comment to see the full error message
import Table from './Table';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Components/TableHeader' was resolved to ... Remove this comment to see the full error message
import TableHeader from './Components/TableHeader';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Components/TableHeaderCell' was resolved... Remove this comment to see the full error message
import TableHeaderCell from './Components/TableHeaderCell';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Components/TableBody' was resolved to '/... Remove this comment to see the full error message
import TableBody from './Components/TableBody';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Components/TableRow' was resolved to '/U... Remove this comment to see the full error message
import TableRow from './Components/TableRow';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Components/TableCell' was resolved to '/... Remove this comment to see the full error message
import TableCell from './Components/TableCell';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../Icon/Icon' was resolved to '/Users/esja... Remove this comment to see the full error message
import Icon from '../Icon/Icon';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Text/Text' was resolved to '/Users/esja... Remove this comment to see the full error message
import Text from '../Text/Text';

import { PEOPLE_DATA_2 } from '../../demo/data';

function CustomCellTable() {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Table height="250px">
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <TableHeader mobileLabel="Contacts">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <TableHeaderCell width="56px" />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <TableHeaderCell width="300px">Name</TableHeaderCell>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <TableHeaderCell>Contact</TableHeaderCell>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <TableHeaderCell>Age</TableHeaderCell>
      </TableHeader>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <TableBody>
        {PEOPLE_DATA_2.map((row, index) => (
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <TableRow key={index}>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <TableCell width="56px">
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <Icon
                name="profile-circle"
                size="24"
                className="neutral-300"
              />
            </TableCell>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <TableCell width="300px">
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <Text size="4" bold>
                {row.name}
              </Text>
            </TableCell>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <TableCell>
              {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
              <div className="mb-2">
                {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                <a className="blue" href={`mailto:${row.email}`}>
                  {row.email}
                {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                </a>
              {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
              </div>
              {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
              <div>{row.phone}</div>
            </TableCell>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <TableCell>{row.age}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
function compare(key) {
  return function(a, b) {
    // property does not exist
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }

    const varA =
      typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
    const varB =
      typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return comparison;
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

  const getSortedData = DATA => {
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
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <TableHeader mobileLabel="Contacts">
        <TableHeaderCell
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          sortDirection={nameSortDirection}
          onSort={() => handleSort('name', nameSortDirection)}
        >
          Name
        </TableHeaderCell>
        <TableHeaderCell
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          sortDirection={ageSortDirection}
          onSort={() => handleSort('age', ageSortDirection)}
        >
          Age
        </TableHeaderCell>
      </TableHeader>
      <TableBody>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        {getSortedData(PEOPLE_DATA_2).map((row, index) => (
          <TableRow key={index}>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <TableCell>{row.name}</TableCell>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <TableCell>{row.age}</TableCell>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

storiesOf('Table', module)
  .addParameters({
    // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
    chromatic: { viewports: [479, 959, 1439] },
  })
  .add('tabular data', () => (
    <Table>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <TableHeader mobileLabel="Contacts">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <TableHeaderCell>Name</TableHeaderCell>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <TableHeaderCell>Title</TableHeaderCell>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <TableHeaderCell>Email</TableHeaderCell>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <TableHeaderCell>Company</TableHeaderCell>
      </TableHeader>
      <TableBody>
        <TableRow>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <TableCell>Vicki Rohlfs</TableCell>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <TableCell>VP Marketing</TableCell>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <TableCell>ntanslie1@example.com</TableCell>
          <TableCell>Acme Inc.</TableCell>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        </TableRow>
        <TableRow>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <TableCell>Stacy Mardlin</TableCell>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <TableCell>Senior Cost Accountant</TableCell>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <TableCell>smardlin2@example.com</TableCell>
          <TableCell>Acme Inc.</TableCell>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        </TableRow>
      </TableBody>
    </Table>
  ))
  .add('custom cells', () => <CustomCellTable />)
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  .add('sortable table', () => <SortableTable />);
// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
