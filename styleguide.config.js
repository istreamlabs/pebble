const path = require('path');

const spaceFactor = 16;

module.exports = {
  title: 'Pebble',
  webpackConfig: require('react-scripts/config/webpack.config.js'),
  require: [
    path.resolve(__dirname, 'src/Styleguide/Setup.js'),
    path.join(__dirname, 'src/Styleguide/styles.css')
  ],
  dangerouslyUpdateWebpackConfig(webpackConfig, env) {
    webpackConfig.entry.push('./src/Styles/foundation.scss');

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
          href: 'src/Styleguide/styles.css'
        }
      ]
    }
  },
  theme: {
    space: [
      spaceFactor / 4, // 4
      spaceFactor / 2, // 8
      spaceFactor, // 16
      spaceFactor * 1.5, // 24
      spaceFactor * 2, // 32
      spaceFactor * 4, // 64
      spaceFactor * 8, // 128
    ],
    fontFamily: {
      base: '-apple-system, BlinkMacSystemFont, "avenir next", avenir, helvetica, "helvetica neue", ubuntu, roboto, noto, "segoe ui", arial, sans-serif'
    },
    fontSize: {
      base: 16,
      text: 16,
      small: 14,
      h1: 48,
      h2: 36,
      h3: 24,
      h4: 20,
      h5: 16,
      h6: 14,
    },
    color: {
      base: '#464F5B',
      light: '#647481',
      lightest: '#929EAB',
      link: '#1C4D90',
      linkHover: '#0D2648',
      focus: 'rgba(22, 115, 177, 0.25)',
      border: 'rgba(0,0,0,.05)',
      name: '#690',
      type: '#905',
      error: '#c00',
      baseBackground: '#FAFBFB',
      codeBackground: '#F4F6F8',
      sidebarBackground: '#ffffff',
      ribbonBackground: '#F04E23',
      ribbonText: '#fff',
      // Based on default Prism theme
      codeComment: '#6d6d6d',
      codePunctuation: '#999',
      codeProperty: '#905',
      codeDeleted: '#905',
      codeString: '#690',
      codeInserted: '#690',
      codeOperator: '#9a6e3a',
      codeKeyword: '#1673b1',
      codeFunction: '#DD4A68',
      codeVariable: '#e90',
    },
    borderRadius: 4,
    maxWidth: 960,
  },
  styles: {
    List: {
      li: {
        marginBottom: '16px',
      },
    },
    Heading: {
      heading1: {
        fontWeight: '700',
      },
      heading2: {
        fontWeight: '700',
      },
      heading3: {
        fontWeight: '700',
      },
      heading4: {
        fontWeight: '700',
      },
    },
    Pre: {
      pre: {
        fontSize: '16px',
      },
    },
    Code: {
      code: {
        backgroundColor: '#F4F6F8',
        color: '#464F5B',
        padding: '2px 4px',
        borderRadius: '2px',
      },
    },
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
    '**/stories.{js,jsx,ts,tsx}',
    '**/*.d.ts',
    'src/Components/Icon/Icons.js',
    'src/Components/Input/Input.js',
    'src/Components/Table/TableRow.js',
    'src/Components/Table/TableCell.js',
  ],
  pagePerSection: true,
  sections: [
    {
      name: 'Introduction',
      content: 'README.md',
      exampleMode: 'hide',
      usageMode: 'expand',
    },
    {
      name: 'Styles',
      content: 'src/Styleguide/Docs/Styles.md',
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
        },
        {
          name: 'Width',
          content: 'src/Styleguide/Docs/Width.md',
          exampleMode: 'hide'
        },
        {
          name: 'CSS Reset',
          content: 'src/Styleguide/Docs/Reset.md',
          exampleMode: 'hide'
        }
      ]
    },
    {
      name: 'Components',
      content: 'src/Styleguide/Docs/Components.md',
      components: 'src/Components/*/*.js',
      exampleMode: 'expand',
      usageMode: 'expand',
      sectionDepth: 2,
    }
  ],
  ribbon: {
    url: 'https://github.com/iStreamPlanet/pebble',
    text: 'GitHub Repo'
  }
};
