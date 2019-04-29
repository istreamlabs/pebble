## Examples

Use `Breadcrumbs` to wrap [Links](#/Components/Link) that indicate the path of an asset and help the user to navigate back to the parent.

```js
import { BrowserRouter as DemoBrowserRouter } from 'react-router-dom';

import Button from '../Button/Button';
import Link from '../Link/Link';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import DropdownItem from '../DropdownMenu/Components/DropdownItem';

<DemoBrowserRouter>
  <Breadcrumbs>
    <Link href="#">Parent</Link>
    <DropdownMenu toggle={<Button plain iconAfterText icon="arrow-small-down">Level 1</Button>}>
      <DropdownItem>Level 1a</DropdownItem>
      <DropdownItem>Level 1b</DropdownItem>
    </DropdownMenu>
    <Link href="#">Level 2</Link>
    <Link href="#">Level 3</Link>
  </Breadcrumbs>
</DemoBrowserRouter>
```

