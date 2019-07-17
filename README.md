[![Codefresh build status](https://g.codefresh.io/api/badges/pipeline/istreamplanet-orbis/iStreamPlanet%2Fpebble%2Fpebble?branch=master&key=eyJhbGciOiJIUzI1NiJ9.NWI4NTcwM2Y0ZTQ0YTAwMDAxNzU3Zjg1.yUFZAhLcIDmTZW5V3HeFOhbHT_6JUTS4VhibhdFN6nM&type=cf-1)](https://g.codefresh.io/pipelines/pebble/builds?repoOwner=iStreamPlanet&repoName=pebble&serviceName=iStreamPlanet%2Fpebble&filter=trigger:build~Build;branch:master;pipeline:5ca7ad13f8596e1a35524aa7~pebble)
[![Build Status](https://travis-ci.com/iStreamPlanet/pebble.svg?token=ob5GGxyPdck69sbiTyH4&branch=master)](https://travis-ci.com/iStreamPlanet/pebble)
[![codecov](https://codecov.io/gh/iStreamPlanet/pebble/branch/master/graph/badge.svg?token=sertHGUtdf)](https://codecov.io/gh/iStreamPlanet/pebble)

# Pebble

A react-based design system built by iStreamPlanet

## Documentation

Visit the [Pebble documentation](https://pebble.istreamplanet.net) site for information.

## Contribution and Support

Before opening an issue or pull request, please read the [Contributing](/#/Contributing) guide.

## Development

See the [Development](/#/Development) guide for instructions on how to run Pebble locally for development.

## Installation and Usage

To use Pebble, add the package to your package.json using your package manager of choice.

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

Have a look at the [pebble.istreamplanet.net](https://pebble.istreamplanet.net) for component documentation.

## Release History

See the [Releases](https://github.com/iStreamPlanet/pebble/releases) page.

## License

Copyright &copy; 2019 iStreamPlanet Co., LLC

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
