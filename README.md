[![Codefresh build status](https://g.codefresh.io/api/badges/pipeline/istreamplanet-orbis/iStreamPlanet%2Fpebble%2Fpebble?branch=master&key=eyJhbGciOiJIUzI1NiJ9.NWI4NTcwM2Y0ZTQ0YTAwMDAxNzU3Zjg1.yUFZAhLcIDmTZW5V3HeFOhbHT_6JUTS4VhibhdFN6nM&type=cf-1)](https://g.codefresh.io/pipelines/pebble/builds?repoOwner=iStreamPlanet&repoName=pebble&serviceName=iStreamPlanet%2Fpebble&filter=trigger:build~Build;branch:master;pipeline:5ca7ad13f8596e1a35524aa7~pebble)
[![Build Status](https://travis-ci.com/iStreamPlanet/pebble.svg?token=ob5GGxyPdck69sbiTyH4&branch=master)](https://travis-ci.com/iStreamPlanet/pebble)
[![codecov](https://codecov.io/gh/iStreamPlanet/pebble/branch/master/graph/badge.svg?token=sertHGUtdf)](https://codecov.io/gh/iStreamPlanet/pebble)

# Pebble

A react-based design system built by iStreamPlanet

## Documentation

Visit the [Pebble documentation](https://pebble.istreamplanet.net) site for information.

## Contribution and Support

Before opening an issue or pull request, please read the [Contributing](https://github.com/iStreamPlanet/pebble/blob/master/CONTRIBUTING.md) guide.

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

## How to Release

### Release an Update

Package releases should be done through the following commands:

release a minor update

```shell
$ npm version minor -m "release package %s because reasons"
```

or for an alpha pre-release minor update

```shell
$ npm version pre-minor -m "release package %s as alpha because reasons" --preid=alpha
```

The following will then happen

- Execute a coverage test run to make sure everything is okay
- Bump the version number in `package.json` accordingly (see examples)
- Add a tag in git with that version number
- Push to git origin including tags

From there the CI machine takes over and for every tagged commit the following happens

- `NPM publish` is run, this in turn will trigger our `prepack` that cleans and builds the package
- The newly minted package is published with the `next` tag. This is done to prevent `prerelease` packages from being installed by default.

### Promote to Latest tag on npm

To promote the new package to the `latest` tag and make it the preferred default install:

1. Log into with `npm login [username]`but if rumors are true, that could increase a lot in the future.
2. Apply the latest tag `npm dist-tag add @istreamplanet/pebble@[version number] latest`

## License

Copyright &copy; 2019 iStreamPlanet Co., LLC

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
