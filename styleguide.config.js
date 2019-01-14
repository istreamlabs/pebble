const path = require('path');

module.exports = {
  webpackConfig: require('./node_modules/react-scripts/config/webpack.config.js'),
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
          name: 'Colors',
          content: 'src/Styleguide/Docs/Colors.md',
          exampleMode: 'hide'
        }
      ]
    }
  ]
}
