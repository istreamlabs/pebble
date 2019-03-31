import React from 'react';
import { shallow } from 'enzyme';
import Block from './Block';

describe('Block', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<Block>hello</Block>); }).not.toThrow();
  });

  it('renders all children', () => {
    const wrapper = shallow(<Block itemSpacing="3">
      <p>Hello Pebble</p>
      <p>Second Paragraph</p>
    </Block>);
    expect(wrapper.find('p').first().text()).toBe('Hello Pebble');
    expect(wrapper.find('div').children()).toHaveLength(2);
  });

  it('allows for custom classes', () => {
    const wrapper = shallow(<Block className="myClass">test</Block>);
    expect(wrapper.prop('className')).toContain('myClass');
  });

  it('allows you to render a Block as different DOM element', () => {
    const wrapper = shallow(<Block as="li">a list item</Block>);
    expect(wrapper.exists('li')).toEqual(true);
  });

  describe('Flex', () => {
    it('sets flex', () => {
      const wrapper = shallow(<Block flex>test</Block>);
      expect(wrapper.prop('style')).toHaveProperty('flex', '1 1');
    });

    it('sets flex false', () => {
      const wrapper = shallow(<Block flex={false}>test</Block>);
      expect(wrapper.prop('style')).toHaveProperty('flex', '0 0 auto');
    });

    it('sets grow', () => {
      const wrapper = shallow(<Block flex="grow">test</Block>);
      expect(wrapper.prop('style')).toHaveProperty('flex', '1 0 auto');
    });

    it('sets flex', () => {
      const wrapper = shallow(<Block flex="shrink">test</Block>);
      expect(wrapper.prop('style')).toHaveProperty('flex', '0 1 auto');
    });

    it('sets flex when passed a string', () => {
      const wrapper = shallow(<Block flex="grow">test</Block>);
      expect(wrapper.prop('style')).toHaveProperty('flex', '1 0 auto');
    });

    it('sets flex-grow and flex-shrink', () => {
      const wrapper = shallow(<Block flex={{ grow: 5, shrink: 1 }}>test</Block>);
      expect(wrapper.prop('style')).toHaveProperty('flex', '5 1 auto');
    });

    it('sets default flex when passed an object', () => {
      const wrapper = shallow(<Block flex={{ }}>test</Block>);
      expect(wrapper.prop('style')).toHaveProperty('flex', '0 0 auto');
    });

    it('sets the flex-direction', () => {
      const wrapper = shallow(<Block direction="column">test</Block>);
      expect(wrapper.prop('className')).toContain('flex-column');
    });

    it('adds spacing between items', () => {
      const wrapper = shallow(<Block itemSpacing="3">
        <Block>1</Block>
        <Block>2</Block>
      </Block>);
      expect(wrapper.find(Block).first().prop('className')).toContain('mr-3');
    });
  }),

  describe('Basis', () => {
    it('sets auto basis', () => {
      const wrapper = shallow(<Block basis="auto">test</Block>);
      expect(wrapper.prop('style')).toHaveProperty('flexBasis', 'auto');
    });

    it('sets full basis', () => {
      const wrapper = shallow(<Block basis="full">test</Block>);
      expect(wrapper.prop('style')).toHaveProperty('flexBasis', '100%');
    });

    it('sets 1/2 basis', () => {
      const wrapper = shallow(<Block basis="1/2">test</Block>);
      expect(wrapper.prop('style')).toHaveProperty('flexBasis', '50%');
    });

    it('sets 1/4 basis', () => {
      const wrapper = shallow(<Block basis="1/4">test</Block>);
      expect(wrapper.prop('style')).toHaveProperty('flexBasis', '25%');
    });

    it('sets 3/4 basis', () => {
      const wrapper = shallow(<Block basis="3/4">test</Block>);
      expect(wrapper.prop('style')).toHaveProperty('flexBasis', '75%');
    });

    it('sets 1/3 basis', () => {
      const wrapper = shallow(<Block basis="1/3">test</Block>);
      expect(wrapper.prop('style')).toHaveProperty('flexBasis', '33.33%');
    });

    it('sets 2/3 basis', () => {
      const wrapper = shallow(<Block basis="2/3">test</Block>);
      expect(wrapper.prop('style')).toHaveProperty('flexBasis', '66.66%');
    });
  });

  describe('Margin', () => {
    it('sets all margin bottom', () => {
      const wrapper = shallow(<Block marginBottom="1">test</Block>);
      expect(wrapper.prop('className')).toContain('mb-1');
    });

    it('sets the margin top', () => {
      const wrapper = shallow(<Block marginTop="1">test</Block>);
      expect(wrapper.prop('className')).toContain('mt-1');
    });
  }),

  describe('Padding', () => {
    it('sets all padding', () => {
      const wrapper = shallow(<Block padding="1">test</Block>);
      expect(wrapper.prop('className')).toContain('p-1');
    });

    it('sets the horizontal padding', () => {
      const wrapper = shallow(<Block paddingHorizontal="1">test</Block>);
      expect(wrapper.prop('className')).toContain('ph-1');
    });

    it('sets the vertical padding', () => {
      const wrapper = shallow(<Block paddingVertical="1">test</Block>);
      expect(wrapper.prop('className')).toContain('pv-1');
    });
  }),

  describe('Radius', () => {
    it('sets border radius', () => {
      const wrapper = shallow(<Block radius="1">test</Block>);
      expect(wrapper.prop('className')).toContain('br1');
    });

    it('sets responsive border radius', () => {
      const wrapper = shallow(<Block radius={[1, 2]}>test</Block>);
      expect(wrapper.prop('className')).toContain('br1 br2-ns');
    });
  }),

  describe('Overflow', () => {
    it('sets overflow', () => {
      const wrapper = shallow(<Block overflow="auto">test</Block>);
      expect(wrapper.prop('className')).toContain('overflow-auto');
    });

    it('sets responsive border radius', () => {
      const wrapper = shallow(<Block overflow={['auto', 'hidden']}>test</Block>);
      expect(wrapper.prop('className')).toContain('overflow-auto overflow-hidden-ns');
    });
  }),

  describe('Text', () => {
    it('sets the text size', () => {
      const wrapper = shallow(<Block textSize="1">test</Block>);
      expect(wrapper.prop('className')).toContain('fs-1');
    });

    it('sets right alignment', () => {
      const wrapper = shallow(<Block textAlign="right">test</Block>);
      expect(wrapper.prop('className')).toContain('text-right');
    });

    it('sets center alignment', () => {
      const wrapper = shallow(<Block textAlign="center">test</Block>);
      expect(wrapper.prop('className')).toContain('text-center');
    });

    it('sets truncate', () => {
      const wrapper = shallow(<Block truncate>test</Block>);
      expect(wrapper.prop('className')).toContain('truncate');
    });
  });
});
