```js
<Link href="http://istreamplanet.com">istreamplanet.com</Link>
```

### Using a custom component

Pass a custom component, such as a `Link` from `react-router-dom`.

```js
// example markup with react-router-dom
// import { BrowserRouter as Router, Link as RouterDomLink } from 'react-router-dom';

// <Router>
//   <Link component={RouterDomLink} to="/#somewhere">
//     Home
//   </Link>
// </Router>
```

### Unstyled

Don't include the default styles by adding the `unstyled` prop..

```js
<Link href="http://istreamplanet.com" unstyled>istreamplanet.com</Link>
```
