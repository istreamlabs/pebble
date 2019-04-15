### Basic Table

```js
const DATA = [
  ['Sarah Brown', 31, '100 Broadway st. New York City, New York'],
  ['Jane Smith', 32, '100 Market st. San Francisco, California'],
  ['Joe Black', 33, '100 Macquarie st. Sydney, Australia'],
];

const COLUMNS = ['Name', 'Age', 'Address'];

<Table columns={COLUMNS} data={DATA} />;
```

### Custom Table Cell

```js
import { TableBody, TableRow, TableCell } from './Table';
import Block from '../Block/Block';

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
]

const COLUMNS = ['Status', 'Channel', 'Version', 'Blueprint', 'Blueprint', 'Blueprint'];

<Table columns={COLUMNS}>
  {CHANNELS.map((row, index) => {
    console.log(row.state.regions["aws-east-isp"]["channel_state"])
    const state = row.state.regions["aws-east-isp"].channel_state !== undefined ? row.state.regions["aws-east-isp"].channel_state : null;
    return (
      <TableRow key={index}>
        <TableCell className={state === 'on' ? 'bg-green-light' : 'bg-neutral-300'}>{row.state.desired_state}</TableCell>
        <TableCell>{row.id}</TableCell>
        <TableCell>{row.version}</TableCell>
        <TableCell>{row.blueprint.id} {row.blueprint.version}</TableCell>
        <TableCell>{row[3]}</TableCell>
        <TableCell>
          <div>{row[4]}</div>
        </TableCell>
      </TableRow>
    )
  }
  )}
</Table>
```
