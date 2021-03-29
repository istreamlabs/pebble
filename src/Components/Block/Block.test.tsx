// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'enzyme' or its corresponding t... Remove this comment to see the full error message
import { shallow } from 'enzyme';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Block' was resolved to '/Users/esjaastad... Remove this comment to see the full error message
import Block from './Block';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Block', () => {
  it('renders without crashing', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      shallow(<Block>hello</Block>);
    }).not.toThrow();
  });

  it('renders all children', () => {
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Block itemSpacing="3">
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        <p>Hello Pebble</p>
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        <p>Second Paragraph</p>
      </Block>,
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      wrapper
        .find('p')
        .first()
        .text(),
    ).toBe('Hello Pebble');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find('div').children()).toHaveLength(2);
  });

  it('allows for custom classes', () => {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<Block className="myClass">test</Block>);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.prop('className')).toContain('myClass');
  });

  it('allows you to render a Block as different DOM element', () => {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<Block as="li">a list item</Block>);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.exists('li')).toEqual(true);
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('style', () => {
    it('passes style through to style', () => {
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Block
          style={{
            color: 'red',
            marginBottom: '1rem',
            paddingTop: '1rem',
          }}
        >
          test
        </Block>,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.prop('style')).toMatchObject({
        color: 'red',
        marginBottom: '1rem',
        paddingTop: '1rem',
      });
    });
  }),
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('Flex', () => {
      it('sets flex', () => {
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        const wrapper = shallow(<Block flex>test</Block>);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(wrapper.prop('style')).toHaveProperty('flex', '1 1');
      });

      it('sets flex false', () => {
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        const wrapper = shallow(<Block flex={false}>test</Block>);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(wrapper.prop('style')).toHaveProperty('flex', '0 0');
      });

      it('sets grow', () => {
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        const wrapper = shallow(<Block flex="grow">test</Block>);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(wrapper.prop('style')).toHaveProperty('flex', '1 0');
      });

      it('sets flex', () => {
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        const wrapper = shallow(<Block flex="shrink">test</Block>);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(wrapper.prop('style')).toHaveProperty('flex', '0 1');
      });

      it('sets flex when passed a string', () => {
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        const wrapper = shallow(<Block flex="grow">test</Block>);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(wrapper.prop('style')).toHaveProperty('flex', '1 0');
      });

      it('sets flex-grow and flex-shrink', () => {
        const wrapper = shallow(
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Block flex={{ grow: 5, shrink: 1 }}>test</Block>,
        );
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(wrapper.prop('style')).toHaveProperty('flex', '5 1');
      });

      it('sets default flex when passed an object', () => {
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        const wrapper = shallow(<Block flex={{}}>test</Block>);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(wrapper.prop('style')).toHaveProperty('flex', '0 0');
      });

      it('sets the flex-direction', () => {
        const wrapper = shallow(
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Block direction="column">test</Block>,
        );
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(wrapper.prop('className')).toContain('flex-column');
      });
    }),
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('itemSpacing', () => {
      it('does not add spacing if the child is a string', () => {
        const wrapper = shallow(
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Block itemSpacing="3">I am not an element</Block>,
        );
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(wrapper.text()).toBe('I am not an element');
      });

      it('adds spacing between items', () => {
        const wrapper = shallow(
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Block itemSpacing="3">
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Block>1</Block>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Block>2</Block>
          </Block>,
        );
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(
          wrapper
            .find(Block)
            .first()
            .prop('className'),
        ).toContain('mr-3');
      });

      it('adds spacing between items and keeps custom classes applied to child items', () => {
        const wrapper = shallow(
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Block itemSpacing="3">
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Block className="red">1</Block>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Block>2</Block>
          </Block>,
        );
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(
          wrapper
            .find(Block)
            .first()
            .prop('className'),
        ).toContain('red');
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(
          wrapper
            .find(Block)
            .first()
            .prop('className'),
        ).toContain('mr-3');
      });
    }),
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('Width', () => {
      it('gets the correct css value', () => {
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        const wrapper = shallow(<Block width="27rem">width</Block>);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(wrapper.prop('style')).toHaveProperty(
          'width',
          '27rem',
        );
      });
      it('gets the correct value when passed a number', () => {
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        const wrapper = shallow(<Block width="8">width</Block>);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(wrapper.prop('className')).toContain('w8');
      });
      it('gets the correct value when passed an array', () => {
        const wrapper = shallow(
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Block width={[20, 30]}>width</Block>,
        );
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(wrapper.prop('className')).toContain('w-20 w-30-ns');
      });
    });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('Height', () => {
    it('gets the correct css value', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const wrapper = shallow(<Block height="27rem">width</Block>);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.prop('style')).toHaveProperty('height', '27rem');
    });
    it('gets the correct value when passed a number', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const wrapper = shallow(<Block height="8">width</Block>);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.prop('className')).toContain('h8');
    });
    it('gets the correct value when passed an array', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const wrapper = shallow(<Block height={[20, 30]}>width</Block>);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.prop('className')).toContain('h-20 h-30-ns');
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('Basis', () => {
    it('sets auto basis', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const wrapper = shallow(<Block>test</Block>);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.prop('style')).not.toContain('flexBasis');
    });

    it('sets custom basis', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const wrapper = shallow(<Block basis="21px">test</Block>);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.prop('style')).toHaveProperty(
        'flexBasis',
        '21px',
      );
    });

    it('sets auto basis', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const wrapper = shallow(<Block basis="auto">test</Block>);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.prop('style')).toHaveProperty(
        'flexBasis',
        'auto',
      );
    });

    it('sets full basis', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const wrapper = shallow(<Block basis="full">test</Block>);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.prop('style')).toHaveProperty(
        'flexBasis',
        '100%',
      );
    });

    it('sets 1/2 basis', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const wrapper = shallow(<Block basis="1/2">test</Block>);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.prop('style')).toHaveProperty(
        'flexBasis',
        '50%',
      );
    });

    it('sets 1/4 basis', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const wrapper = shallow(<Block basis="1/4">test</Block>);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.prop('style')).toHaveProperty(
        'flexBasis',
        '25%',
      );
    });

    it('sets 3/4 basis', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const wrapper = shallow(<Block basis="3/4">test</Block>);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.prop('style')).toHaveProperty(
        'flexBasis',
        '75%',
      );
    });

    it('sets 1/3 basis', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const wrapper = shallow(<Block basis="1/3">test</Block>);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.prop('style')).toHaveProperty(
        'flexBasis',
        '33.33%',
      );
    });

    it('sets 2/3 basis', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const wrapper = shallow(<Block basis="2/3">test</Block>);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.prop('style')).toHaveProperty(
        'flexBasis',
        '66.66%',
      );
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('Border', () => {
    it('sets correct styles when set to "all"', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const wrapper = shallow(<Block border="all">border</Block>);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.prop('style')).toHaveProperty(
        'borderWidth',
        '1px',
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.prop('style')).toHaveProperty(
        'borderStyle',
        'solid',
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.prop('className')).toContain('b-neutral-300');
    });
    it('sets correct styles when set to "right"', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const wrapper = shallow(<Block border="right">border</Block>);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.prop('style')).toHaveProperty(
        'borderRightWidth',
        '1px',
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.prop('style')).toHaveProperty(
        'borderRightStyle',
        'solid',
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.prop('className')).toContain('b-neutral-300');
    });
    it('sets correct styles when set to "vertical"', () => {
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Block border="vertical">border</Block>,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.prop('style')).toHaveProperty(
        'borderRightWidth',
        '1px',
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.prop('style')).toHaveProperty(
        'borderRightStyle',
        'solid',
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.prop('style')).toHaveProperty(
        'borderLeftWidth',
        '1px',
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.prop('style')).toHaveProperty(
        'borderLeftStyle',
        'solid',
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.prop('className')).toContain('b-neutral-300');
    });
    it('sets correct styles when passed an object', () => {
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Block border={{ width: '10px', color: 'green-lighter' }}>
          border
        </Block>,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.prop('style')).toHaveProperty(
        'borderWidth',
        '10px',
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.prop('style')).toHaveProperty(
        'borderStyle',
        'solid',
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.prop('className')).toContain('b-green-lighter');
    });
    it('sets correct styles when passed an object without color', () => {
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Block border={{ width: '10px' }}>border</Block>,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.prop('style')).toHaveProperty(
        'borderWidth',
        '10px',
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.prop('style')).toHaveProperty(
        'borderStyle',
        'solid',
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.prop('className')).toContain('b-neutral-300');
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('Margin', () => {
    it('sets all margin bottom', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const wrapper = shallow(<Block marginBottom="1">test</Block>);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.prop('className')).toContain('mb-1');
    });

    it('sets responsive margin', () => {
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Block marginTop={[1, 0, 2, 3]}>test</Block>,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.prop('className')).toContain(
        'mt-1 mt-0-ns mt-2-m mt-3-l',
      );
    });

    it('sets the margin top', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const wrapper = shallow(<Block marginTop="1">test</Block>);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.prop('className')).toContain('mt-1');
    });
  }),
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('Padding', () => {
      it('sets all padding', () => {
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        const wrapper = shallow(<Block padding="1">test</Block>);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(wrapper.prop('className')).toContain('p-1');
      });

      it('sets the horizontal padding', () => {
        const wrapper = shallow(
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Block paddingHorizontal="1">test</Block>,
        );
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(wrapper.prop('className')).toContain('ph-1');
      });

      it('sets the vertical padding', () => {
        const wrapper = shallow(
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Block paddingVertical="1">test</Block>,
        );
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(wrapper.prop('className')).toContain('pv-1');
      });

      it('sets responsive padding', () => {
        const wrapper = shallow(
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Block padding={[1, 0, 2, 3]}>test</Block>,
        );
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(wrapper.prop('className')).toContain(
          'p-1 p-0-ns p-2-m p-3-l',
        );
      });
    }),
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('Radius', () => {
      it('sets border radius', () => {
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        const wrapper = shallow(<Block radius="1">test</Block>);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(wrapper.prop('className')).toContain('br1');
      });

      it('sets responsive border radius', () => {
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        const wrapper = shallow(<Block radius={[1, 2]}>test</Block>);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(wrapper.prop('className')).toContain('br1 br2-ns');
      });
    }),
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('Overflow', () => {
      it('sets overflow', () => {
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        const wrapper = shallow(<Block overflow="auto">test</Block>);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(wrapper.prop('className')).toContain('overflow-auto');
      });

      it('sets responsive border radius', () => {
        const wrapper = shallow(
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Block overflow={['auto', 'hidden']}>test</Block>,
        );
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(wrapper.prop('className')).toContain(
          'overflow-auto overflow-hidden-ns',
        );
      });
    }),
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('Text', () => {
      it('sets the text size', () => {
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        const wrapper = shallow(<Block textSize="1">test</Block>);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(wrapper.prop('className')).toContain('fs-1');
      });

      it('sets right alignment', () => {
        const wrapper = shallow(
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Block textAlign="right">test</Block>,
        );
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(wrapper.prop('className')).toContain('text-right');
      });

      it('sets center alignment', () => {
        const wrapper = shallow(
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Block textAlign="center">test</Block>,
        );
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(wrapper.prop('className')).toContain('text-center');
      });

      it('sets truncate', () => {
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        const wrapper = shallow(<Block truncate>test</Block>);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(wrapper.prop('className')).toContain('truncate');
      });
    });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('displayBlock', () => {
    it('applies the db class and removes flex class', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const wrapper = shallow(<Block displayBlock>test</Block>);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.prop('className')).toContain('db');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.prop('className')).not.toContain('flex');
    });
    it('applies the db class and does not apply flex direction class', () => {
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Block displayBlock direction="row">
          {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
          <div>1</div>
          {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
          <div>2</div>
          {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
          <div>3</div>
        </Block>,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.prop('className')).toContain('db');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.prop('className')).not.toContain('flex-row');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.childAt(0).prop('className')).toBeUndefined();
    });
    it('applies the db class and adds correct spacing to children', () => {
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Block displayBlock itemSpacing="4">
          {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
          <div>1</div>
          {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
          <div>2</div>
          {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
          <div>3</div>
        </Block>,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.children()).toHaveLength(3);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.childAt(0).prop('className')).toContain('mb-4');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.childAt(1).prop('className')).toContain('mb-4');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.childAt(2).prop('className')).toContain('mb-4');
    });
  });
});
