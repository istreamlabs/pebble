# Contributing

## Become a Contributor

Hey, it's why you're here, so we here's how you can contribute to Pebble:

1. Code something and make a pull request.
1. Design a new component or update the styles.
1. Submit updates to the documentation.
1. Report bugs or propose new features by [filing a Github issue](https://github.com/iStreamPlanet/pebble/issues).

## How to Contribute

We welcome and encourage contributions. Contribute feature ideas, fixes, updates of all sizes.

Before you start to code, we recommend [filing an issue](https://github.com/iStreamPlanet/pebble/issues) to discuss your idea. This gives us the opportunity to offer feedback or additional considerations before you begin the work of coding.

We review issues and pull requests on a weekly basis. When we require more information from you, we’ll ask. In order to keep the issue and pull request queue clean, we ask that you respond within **one week** or we’ll close the issue pending your response.

## Submitting Pull Requests

We welcome and encourage contributions. We will make our best effort to process pull requests with constructive feedback.

To make a pull request you will need a GitHub account. See GitHub’s documentation on [forking] and [pull requests].

After an issue is created or a pull request is submitted, contributors and/or maintainers will offer feedback. If the pull request passes review, a maintainer will accept it with a comment.

When a pull request for code contribution fails testing, the author is expected to update the pull request to address the failure(s) until it passes testing and the pull request can merge cleanly.

At least one review from a maintainer is required for all patches.

Components have the following folder structure:

```
src
└─Components
  └─ComponentName
    ComponentName.js
    ComponentName.scss
    ComponentName.test.js
    Readme.js
    stories.js
```

- The Readme.js file used by style-guidist to auto-generate the docs page. Please be sure to provide common cases of the component in use.
- Unit tests are automatically run on each pull request. The build will fail if any tests fail. To manually run tests, run `yarn cover`.
- For code syntax and style, we use [eslint](https://eslint.org/) with [prettier](https://prettier.io/).

## Contributing to the Documentation

Pebble currently uses [react-styleguidist](https://react-styleguidist.js.org/) for most of its documentation. Each component folder has a `Readme.md` file that contains the documentation for that component. These files are used to generate [pebble.istreamplanet.net](https://pebble.istreamplanet.net).

If you find an error or have a question about the documentation, please [file an issue](https://github.com/iStreamPlanet/pebble/issues).

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

To run Chromatic on a local build, get Pebble's [Chromatic app code](https://www.chromaticqa.com/manage) and run the following command.

```shell
./node_modules/.bin/chromatic test --app-code=<your-app-code>
```

For more information, see the [Chromatic Documentation](http://docs.chromaticqa.com/test).

Otherwise, Chromatic will run automatically when you push to a remote branch.

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
