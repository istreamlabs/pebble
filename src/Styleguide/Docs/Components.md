## Installation

Add the package to your package.json using your package manager of choice.

For yarn users:

```shell
$ yarn add @istreamplanet/pebble node-sass react-router-dom
```

For npm users:

```shell
npm install @istreamplanet/pebble node-sass react-router-dom --save
```

Include the Pebble foundation stylesheet in your layout template.

```shell
import '@istreamplanet/pebble/dist/Styles/foundation.scss';
```

## Using Components

Import the components into your application

```shell
import { Button, Card } from '@istreamplanet/pebble'`
```

Then add them in your React component as you would any other:

```shell
const MyComponent = () => (
  <Card>
    <Button>Submit</Button>
  </Card>
)
```

Have a look at the docs available for each component for further details on how to use each component.
