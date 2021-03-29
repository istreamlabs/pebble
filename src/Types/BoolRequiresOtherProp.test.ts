import boolRequiresOtherProp from './BoolRequiresOtherProp';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Types > BoolRequiresOtherProp', () => {
  it('should do nothing if first prop undefined', () => {
    const func = boolRequiresOtherProp('myOtherProp');
    const error = func({}, 'myProp', 'myComponent');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(error).toBeUndefined();
  });

  it('should do nothing if first prop not bool', () => {
    const func = boolRequiresOtherProp('myOtherProp');
    const error = func({ myProp: 123 }, 'myProp', 'myComponent');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(error).toBeUndefined();
  });

  it('should do nothing if prop is a boolean and other prop defined', () => {
    const func = boolRequiresOtherProp('myOtherProp');
    const error = func(
      { myProp: true, myOtherProp: 'abc' },
      'myProp',
      'myComponent',
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(error).toBeUndefined();
  });

  it('throw if prop is a boolean and other prop not defined ', () => {
    const func = boolRequiresOtherProp('myOtherProp');
    const error = func({ myProp: true }, 'myProp', 'myComponent');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(error).toBeDefined();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(error.message).toEqual(
      "Please provide a 'myOtherProp' in order to use 'myProp' in <myComponent>",
    );
  });
});
