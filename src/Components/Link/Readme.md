```js
import { BrowserRouter as DemoBrowserRouter } from 'react-router-dom';

<DemoBrowserRouter>
  <Link to="/#/Components/Link">Link</Link>
</DemoBrowserRouter>
```

### External Links

Use the `external` prop to render an `<a>` for links to external sites or mailto links.

```js
<>
  <Link external href="http://istreamplanet.com" target="_blank" className="db mb-3">
    istreamplanet.com
  </Link>
  <Link external href="mailto:support@istreamplanet.com">
    Email Support
  </Link>
</>
```

### Unstyled

Don't include the default styles by adding the `unstyled` prop.

```js

import { BrowserRouter as DemoBrowserRouter } from 'react-router-dom';

<DemoBrowserRouter>
  <Link href="/#/Components/Link" unstyled>Link</Link>
</DemoBrowserRouter>
```
