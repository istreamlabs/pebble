[![Build Status](https://travis-ci.com/iStreamPlanet/pebble.svg?token=ob5GGxyPdck69sbiTyH4&branch=master)](https://travis-ci.com/iStreamPlanet/pebble)
[![codecov](https://codecov.io/gh/iStreamPlanet/pebble/branch/master/graph/badge.svg?token=sertHGUtdf)](https://codecov.io/gh/iStreamPlanet/pebble)

# Pebble

iStreamPlanet's Design System

## Install

```shell
$ yarn add @istreamplanet/pebble node-sass
```

## Development

#### Restore NPM Packages

```shell
$ yarn
```

#### Start Development Server

```shell
$ yarn start
```

#### Run tests

```shell
$ yarn test
```

#### Visual Regression Testing

Pebble uses [Chromatic](https://www.chromaticqa.com) and [Storybook](https://storybook.js.org/) for visual regression testing. Each push to the build service will run the Chromatic service. If there are visual changes detected in any component story, you will be required to review and approve the difference in the [Chromatic App](https://www.chromaticqa.com/builds?appId=5c893af34635b40020991b72).

To learn how to run Chromatic on a local build, see the [Chromatic Documentation](http://docs.chromaticqa.com/test). Otherwise, it will run automatically when you push to a remote branch.


#### Run Documentation Site (React Styleguidist)

```shell
$ yarn styleguide
```

#### Run Storybook Site

```shell
$ yarn storybook
```

#### Build Documentation Site

```shell
$ yarn styleguide:build
```

## Releasing

Package releases should be done through the [`npm version`](https://docs.npmjs.com/cli/version.html) command. When you run the command, the following will happen
* Execute a coverage test run to make sure everything is okay
* Bump the version number in `package.json` accordingly (see examples)
* Add a tag in git with that version number
* Push to git origin including tags

From there the CI machine takes over and for every tagged commit the following happens
* `NPM publish` is run, this in turn will trigger our `prepack` that cleans and builds the package
* The newly minted package is published with the `next` tag. This is done to prevent `prerelease` packages from being installed by default.

To promote the new package to the `latest` tag and make it the preferred default install:

1. Log into with `npm login [username]`
2. Apply the latest tag `npm dist-tag add @istreamplanet/pebble@[version number] latest`

release an alpha pre-release minor update
```shell
$ npm version pre-minor -m "release package %s as alpha because reasons" --preid=alpha
```

release a minor update
```shell
$ npm version minor -m "release package %s because reasons"
```

## License

Copyright &copy; 2019 iStreamPlanet Co., LLC

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
