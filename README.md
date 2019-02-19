[![Build Status](https://travis-ci.com/iStreamPlanet/pebble.svg?token=ob5GGxyPdck69sbiTyH4&branch=master)](https://travis-ci.com/iStreamPlanet/pebble)

# Pebble

iStreamPlanet's Design System

## Install

For NPM users:

```shell
$ npm install @istreamplanet/pebble node-sass --save
```

For YARN users:

```shell
$ yarn add @istreamplanet/pebble node-sass
```

## Development

Restore NPM Packages

```shell
$ yarn
```

Start Development Server

```shell
$ yarn start
```

Run tests

```shell
$ yarn test
```

Start Documentation Server (handy when writing the docs)

```shell
$ yarn styleguide
```


Build Documentation Site

```shell
$ yarn styleguide:build
```

## releasing
Package releases should be done through the [`npm version`](https://docs.npmjs.com/cli/version.html) command. When you run the command, the following will happen
* Execute a coverage test run to make sure everything is okay
* Bump the version number in `package.json` accordingly (see examples)
* Add a tag in git with that version number
* Push to git origin including tags

From there the CI machine takes over and for every tagged commit the following happens
* `NPM publish` is run, this in turn will trigger our `prepack` that cleans and builds the package
* The newly minted package it published with the `next` tag. This is done to prevent `prerelease` packages from being installed be default.

If you want to promote the new package to the `latest` tag and thus making it be the preferred default install you may do this using the [`npm dist-tag`](https://docs.npmjs.com/cli/dist-tag) command.

release an alpha prerelease minor update
```
npm version preminor -m "release package %s as alpah because reasons" --preid=alpha
```

release a minor update
```
npm version minor -m "release package %s because reasons"
```


## License

Copyright &copy; 2019 iStreamPlanet Co., LLC

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
