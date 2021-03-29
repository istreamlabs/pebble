import getBorderStyles from './GetBorderStyle';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Util > GetBorderStyle', () => {
  it('returns correct style object if passed "all"', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getBorderStyles('all')).toMatchObject({
      borderWidth: '1px',
      borderStyle: 'solid',
    });
  });
  it('returns correct style object if passed "right"', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getBorderStyles('right')).toMatchObject({
      borderRightWidth: '1px',
      borderRightStyle: 'solid',
    });
  });
  it('returns correct style object if passed "vertical"', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getBorderStyles('vertical')).toMatchObject({
      borderRightWidth: '1px',
      borderRightStyle: 'solid',
      borderLeftWidth: '1px',
      borderLeftStyle: 'solid',
    });
  });
  it('returns correct style object if passed object without a side', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      getBorderStyles({ color: 'blue', width: '7px' }),
    ).toMatchObject({
      borderWidth: '7px',
      borderStyle: 'solid',
    });
  });
  it('returns correct style object if passed object with a side', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getBorderStyles({ side: 'left' })).toMatchObject({
      borderLeftWidth: '1px',
      borderLeftStyle: 'solid',
    });
  });
  it('returns correct style object if passed object border style', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getBorderStyles({ style: 'dashed' })).toMatchObject({
      borderWidth: '1px',
      borderStyle: 'dashed',
    });
  });
  it('returns correct style object if passed object where side is vertical', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getBorderStyles({ side: 'vertical' })).toMatchObject({
      borderLeftWidth: '1px',
      borderLeftStyle: 'solid',
      borderRightWidth: '1px',
      borderRightStyle: 'solid',
    });
  });
  it('returns correct style object if passed "none"', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getBorderStyles('none')).toMatchObject({
      border: 'none',
    });
  });
});
