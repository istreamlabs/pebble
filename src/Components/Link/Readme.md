```js
import { BrowserRouter } from 'react-router-dom';

<BrowserRouter>
  <Link to="/#/Components/Link">Link</Link>
</BrowserRouter>
```

### Using a custom component or `<a>`

Pass a component (e.g. `NavLink` from `react-router-dom`) or a regular `<a>` tag to render a normal link.

```js
// note that we do not have to include <BrowserRouter> because it's a regular <a> tag.

<Link as="a" href="http://istreamplanet.com">
  istreamplanet.com
</Link>
```

### Unstyled

Don't include the default styles by adding the `unstyled` prop..

```js

import { BrowserRouter } from 'react-router-dom';
<BrowserRouter>
  <Link to="/#/Components/Link" unstyled>Link</Link>
</BrowserRouter>
```
