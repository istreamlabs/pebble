### Basic Table

The width of each column will be equally distributed.

```js
const DATA = [
  ['Sarah Brown', 31, '100 Broadway st. New York City, New York'],
  ['Jane Smith', 32, '100 Market st. San Francisco, California'],
  ['Joe Black', 33, '100 Macquarie st. Sydney, Australia'],
];

const COLUMNS = ['Name', 'Age', 'Address'];

<Table columns={COLUMNS} data={DATA} />;
```

### Column Widths

Specify the width of each column via the Table `columnWidths` prop.

```js
const DATA = [
  ['Sarah Brown', 31, '100 Broadway st. New York City, New York'],
  ['Jane Smith', 32, '100 Market st. San Francisco, California'],
  ['Joe Black', 33, '100 Macquarie st. Sydney, Australia'],
];

const COLUMNS = ['Name', 'Age', 'Address'];

<Table columns={COLUMNS} data={DATA} columnWidths={['30%', '10%', '60%']} />;
```

### Custom Table Cells

When you want to display information in a tabular format, but need more control over how each cell is rendered, use a `TableRow` containing a set of `TableCell`.

```js
import classNames from 'classnames';
import { TableRow, TableCell } from './Table';
import Block from '../Block/Block';
import Text from '../Text/Text';

const CHANNELS = [
  {
    id:"AthenaEvent-prod-east-11411",
    version:"1",
    blueprint:{
      "id":"nba_blueprint",
      "version":"32"
    },
    state: {
      "desired_state":"off",
      "regions":{
        "aws-east-isp":{
          "channel_state":"off",
          "config_state":"saved"
        }
      }
    },
    metadata: {
      "aws-east-isp":{
        "pub_cluster_id":"aws-use1-prod"
      }
    }
  },
  {
    "id":"AthenaEvent-prod-east-11431",
    "version":"1",
    "blueprint":{
      "id":"mml-60fps",
      "version":"14"
    },
    "state":{
      "desired_state":"on",
      "regions":{
        "aws-east-isp":{
          "channel_state":"on",
          "config_state":"saved"
        }
      }
    },
    "metadata":{
      "aws-east-isp":{
        "source":"turner.mml311_primary",
        "pub_cluster_id":"aws-use1-prod"
      }
    }
  },
  {
    "id":"AthenaEvent-prod-east-11431",
    "version":"1",
    "blueprint":{
      "id":"mml-60fps",
      "version":"14"
    },
    "state":{
      "desired_state":"off",
      "regions":{
        "aws-east-isp":{
          "channel_state":"reconciling",
          "config_state":"saved"
        }
      }
    },
    "metadata":{
      "aws-east-isp":{
        "source":"turner.mml311_primary",
        "pub_cluster_id":"aws-use1-prod"
      }
    }
  },
]


function CustomTable() {
  const COLUMNS = ['Status', 'Channel', 'Blueprint', 'Blueprint'];
  const WIDTHS =  ['200px', '300px']
  return (
    <Table columns={COLUMNS} columnWidths={WIDTHS}>
      {CHANNELS.map((row, index) => {
        const state = row.state.regions["aws-east-isp"].channel_state !== undefined ? row.state.regions["aws-east-isp"].channel_state : null;

        const stateCellClasses = classNames('fw-700', {
          'bg-green-light': state === 'on',
          'bg-yellow-light': state === 'reconciling',
          'bg-neutral-200': state === 'off',
        });

        return (
          <TableRow key={index}>
            <TableCell width={WIDTHS[0]} textAlign="center" textSize="4" alignItems="center" className={stateCellClasses}>
              {row.state.regions["aws-east-isp"].channel_state}
              <Text size="6" className="fw-400">desired state: {row.state.desired_state}</Text>
            </TableCell>
            <TableCell width={WIDTHS[1]}>{row.id}</TableCell>
            <TableCell>{row.blueprint.id} </TableCell>
            <TableCell>{row.blueprint.version}</TableCell>
          </TableRow>
        )
      }
      )}
    </Table>
  )
}

<CustomTable />


```
