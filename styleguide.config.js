const path = require('path');

module.exports = {
  webpackConfig: require('react-scripts/config/webpack.config.js'),
  dangerouslyUpdateWebpackConfig(webpackConfig, env) {
    webpackConfig.output = {
      ...webpackConfig.output,
      publicPath: process.env.PUBLIC_URL || ''
    };
    return webpackConfig;
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
      name: 'Design',
      content: 'src/Styleguide/Docs/Design.md',
      sectionDepth: 2,
      sections: [
        {
          name: 'Border Radius',
          content: 'src/Styleguide/Docs/Border-radius.md',
          exampleMode: 'hide'
        },
        {
          name: 'Colors',
          content: 'src/Styleguide/Docs/Colors.md',
          exampleMode: 'hide'
        },
        {
          name: 'Shadow',
          content: 'src/Styleguide/Docs/Shadow.md',
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
