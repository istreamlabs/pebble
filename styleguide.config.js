const path = require('path');

module.exports = {
  title: 'Pebble',
  webpackConfig: require('react-scripts/config/webpack.config.js'),
  require: [
    path.join(__dirname, 'src/Styleguide/styles.css')
  ],
  dangerouslyUpdateWebpackConfig(webpackConfig, env) {
    webpackConfig.output = {
      ...webpackConfig.output,
      publicPath: process.env.PUBLIC_URL || ''
    };
    return webpackConfig;
  },
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js');
    return `import { ${name} } from '@istreamplanet/pebble';`;
  },
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Lato:300,400,700'
        },
        {
          rel: 'stylesheet',
          href: 'src/Styleguide/styles.css'
        }
      ]
    }
  },
  theme: {
    fontFamily: {
      base: '"lato", -apple-system, BlinkMacSystemFont, "avenir next", avenir, helvetica, "helvetica neue", ubuntu, roboto, noto, "segoe ui", arial, sans-serif'
    }
  },
  styleguideComponents: {
    ToolbarButtonRenderer: path.join(__dirname, 'src/Styleguide/ToolbarButtonRenderer')
  },
  components: [
    'src/components/**/[A-Z]*.js'
  ],
  ignore: [
    '**/__tests__/**',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/*.spec.{js,jsx,ts,tsx}',
    '**/*.d.ts'
  ],
  require: [path.resolve(__dirname, 'src/Styleguide/Setup.js')],
  pagePerSection: true,
  sections: [
    {
      name: 'Introduction',
      content: 'README.md',
      exampleMode: 'hide',
      usageMode: 'expand',
    },
    {
      name: 'Components',
      content: 'src/Styleguide/Docs/Components.md',
      components: 'src/Components/*/*.js',
      exampleMode: 'expand',
      usageMode: 'expand',
      sectionDepth: 2
    },
    {
      name: 'Design Tokens',
      content: 'src/Styleguide/Docs/Design.md',
      sectionDepth: 2,
      sections: [
        {
          name: 'Border',
          content: 'src/Styleguide/Docs/Border.md',
          exampleMode: 'hide'
        },
        {
          name: 'Color',
          content: 'src/Styleguide/Docs/Color.md',
          exampleMode: 'hide'
        },
        {
          name: 'Media Query',
          content: 'src/Styleguide/Docs/Mediaquery.md',
          exampleMode: 'hide'
        },
        {
          name: 'Shadow',
          content: 'src/Styleguide/Docs/Shadow.md',
          exampleMode: 'hide'
        },
        {
          name: 'Sizing',
          content: 'src/Styleguide/Docs/Sizing.md',
          exampleMode: 'hide'
        },
        {
          name: 'Spacing',
          content: 'src/Styleguide/Docs/Spacing.md',
          exampleMode: 'hide'
        },
        {
          name: 'Typography',
          content: 'src/Styleguide/Docs/Typography.md',
          exampleMode: 'hide'
        }
      ]
    }
  ]
};
