### Basic Table Layout

If the data you wish to format is a simple array of objects, pass it to the `data` prop and the component will generate a table for you. Column widths will be divided equally.

```js
import Block from '../Block/Block';
import { TableRow, TableCell } from './Table';

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

### Custom Cells

More commonly, you may want to combine properties into the same cell, or your data structure is more complex. For these cases, use the `<TableRow>` and `<TableCell>` components to customize how a row in your table is rendered.

```js
import Block from '../Block/Block';
import Icon from '../Icon/Icon';
import Text from '../Text/Text';
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
  const COLUMNS = ['','name', 'contact', 'gender'];

  return (
    <Table columns={COLUMNS} columnWidths={['50px']}>
      {
        DATA.map((row, index) => (
          <TableRow key={index}>
            <TableCell width="50px">
              <Icon name="profile-circle" size="24" className="neutral-300" />
            </TableCell>
            <TableCell>
              <Text size="4" bold>{row.name}</Text>
            </TableCell>
            <TableCell>
              <div className="mb-2"><a className="blue" href={`mailto:${row.email}`}>{row.email}</a></div>
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
