import boolRequiresOtherProp from './BoolRequiresOtherProp';

describe('Types > BoolRequiresOtherProp', () => {
  it('should do nothing if first prop undefined', () => {
    const func = boolRequiresOtherProp('myOtherProp');
    const error = func({}, 'myProp', 'myComponent');
    expect(error).toBeUndefined();
  });

  it('should do nothing if first prop not bool', () => {
    const func = boolRequiresOtherProp('myOtherProp');
    const error = func({ myProp: 123 }, 'myProp', 'myComponent');
    expect(error).toBeUndefined();
  });

  it('should do nothing if prop is a boolean and other prop defined', () => {
    const func = boolRequiresOtherProp('myOtherProp');
    const error = func(
      { myProp: true, myOtherProp: 'abc' },
      'myProp',
      'myComponent',
    );
    expect(error).toBeUndefined();
  });

  it('throw if prop is a boolean and other prop not defined ', () => {
    const func = boolRequiresOtherProp('myOtherProp');
    const error = func({ myProp: true }, 'myProp', 'myComponent');
    expect(error).toBeDefined();
    expect(error.message).toEqual(
      "Please provide a 'myOtherProp' in order to use 'myProp' in <myComponent>",
    );
  });
});
