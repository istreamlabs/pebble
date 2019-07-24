import getBorderStyles from './GetBorderStyle';

describe('Util > GetBorderStyle', () => {
  it('returns correct style object if passed "all"', () => {
    expect(getBorderStyles('all')).toMatchObject({
      borderWidth: '1px',
      borderStyle: 'solid',
    });
  });
  it('returns correct style object if passed "right"', () => {
    expect(getBorderStyles('right')).toMatchObject({
      borderRightWidth: '1px',
      borderRightStyle: 'solid',
    });
  });
  it('returns correct style object if passed "vertical"', () => {
    expect(getBorderStyles('vertical')).toMatchObject({
      borderRightWidth: '1px',
      borderRightStyle: 'solid',
      borderLeftWidth: '1px',
      borderLeftStyle: 'solid',
    });
  });
  it('returns correct style object if passed object without a side', () => {
    expect(
      getBorderStyles({ color: 'blue', width: '7px' }),
    ).toMatchObject({
      borderWidth: '7px',
      borderStyle: 'solid',
    });
  });
  it('returns correct style object if passed object with a side', () => {
    expect(getBorderStyles({ side: 'left' })).toMatchObject({
      borderLeftWidth: '1px',
      borderLeftStyle: 'solid',
    });
  });
  it('returns correct style object if passed object border style', () => {
    expect(getBorderStyles({ style: 'dashed' })).toMatchObject({
      borderWidth: '1px',
      borderStyle: 'dashed',
    });
  });
  it('returns correct style object if passed object where side is vertical', () => {
    expect(getBorderStyles({ side: 'vertical' })).toMatchObject({
      borderLeftWidth: '1px',
      borderLeftStyle: 'solid',
      borderRightWidth: '1px',
      borderRightStyle: 'solid',
    });
  });
});
