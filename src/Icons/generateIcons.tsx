// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
const fs = require('fs-extra');
// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
const Glob = require('glob');
// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'path'.
const path = require('path');
// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
const { promisify } = require('util');
// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
const SVGO = require('svgo');
// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
const svgtojsx = require('svg-to-jsx');

const readFile = promisify(fs.readFile);
const glob = promisify(Glob.glob);
const svgo = new SVGO({
  plugins: [
    {
      cleanupAttrs: true,
    },
    {
      removeDoctype: true,
    },
    {
      removeXMLProcInst: true,
    },
    {
      removeComments: true,
    },
    {
      removeMetadata: true,
    },
    {
      removeTitle: true,
    },
    {
      removeDesc: true,
    },
    {
      removeUselessDefs: true,
    },
    {
      removeEditorsNSData: true,
    },
    {
      removeEmptyAttrs: true,
    },
    {
      removeHiddenElems: true,
    },
    {
      removeEmptyText: true,
    },
    {
      removeEmptyContainers: true,
    },
    {
      removeViewBox: false,
    },
    {
      cleanupEnableBackground: true,
    },
    {
      convertStyleToAttrs: true,
    },
    {
      convertColors: { currentColor: true },
    },
    {
      convertPathData: true,
    },
    {
      convertTransform: true,
    },
    {
      removeUnknownsAndDefaults: true,
    },
    {
      removeNonInheritableGroupAttrs: true,
    },
    {
      removeUselessStrokeAndFill: true,
    },
    {
      removeUnusedNS: true,
    },
    {
      cleanupIDs: true,
    },
    {
      cleanupNumericValues: true,
    },
    {
      moveElemsAttrsToGroup: true,
    },
    {
      moveGroupAttrsToElems: true,
    },
    {
      collapseGroups: true,
    },
    {
      removeRasterImages: false,
    },
    {
      mergePaths: true,
    },
    {
      convertShapeToPath: true,
    },
    {
      sortAttrs: true,
    },
    {
      removeDimensions: true,
    },
    {
      removeAttrs: { attrs: '(class|data-.*)' },
    },
  ],
});

// Get the contents of the optimized SVG
// by trimming leading and tailing <svg> tags
const getSVGContent = source =>
  source.slice(source.indexOf('>') + 1).slice(0, -6);

const getName = filepath =>
  path.basename(filepath, path.extname(filepath));

async function main() {
  // @ts-expect-error ts-migrate(2705) FIXME: An async function or method in ES5/ES3 requires th... Remove this comment to see the full error message
  try {
    const originalIcons = await glob('./src/Icons/*.svg');
    const iconExports = [];
    const examples = [];

    // @ts-expect-error ts-migrate(2705) FIXME: An async function or method in ES5/ES3 requires th... Remove this comment to see the full error message
    const promises = originalIcons.map(async iconFilePath => {
      try {
        const data = await readFile(iconFilePath);
        const optimizeData = await svgo.optimize(data);
        const optimizedJSX = await svgtojsx(optimizeData.data);
        const iconName = getName(iconFilePath).toLocaleLowerCase();
        const exportRow = `'${iconName}': ${getSVGContent(
          optimizedJSX,
        )},`;
        const example = `<div className="__icon"><Icon name="${iconName}" accessibilityLabel="${iconName}" /><div>${iconName}</div></div>`;
        iconExports.push(exportRow);
        examples.push(example);
      } catch (e) {
        /* eslint-disable */
        console.warn(`Ignoring ${iconFilePath}: ${e}`);
        /* eslint-enable */
      }
    });
    await Promise.all(promises);

    // @ts-expect-error ts-migrate(2585) FIXME: 'Promise' only refers to a type, but is being used... Remove this comment to see the full error message
    const storiesFileToWrite = `// THIS FILE IS AUTO GENERATED
/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';
import Icon from './Icon';
storiesOf('Icon', module).add('all', () => (
  <>
  <div className="styleguide__icons">
${examples.join('\t\n')}
  </div>
  </>
));
    `;
    await fs.outputFile(
      './src/Components/Icon/stories.js',
      storiesFileToWrite,
    );

    const fileToWrite = `// THIS FILE IS AUTO GENERATED
import React from 'react';
/* eslint-disable */
export default {
${iconExports.join('\t\n')}
};
/* eslint-enable */
`;
    await fs.outputFile(
      './src/Components/Icon/Icons.js',
      fileToWrite,
    );

    const exampleFileToWrite = `
  [//]: # (THIS FILE IS AUTO GENERATED)
  ### Names
\`\`\`js noeditor
import Icon from './Icon';
  <div className="styleguide__icons">
${examples.join('\t\n')}
  </div>
\`\`\`
`;

    await fs.outputFile(
      './src/Components/Icon/IconExamples.md',
      exampleFileToWrite,
    );
  } catch (e) {
    /* eslint-disable */
    console.error('error building', e);
    /* eslint-enable */
  }
}

main();
