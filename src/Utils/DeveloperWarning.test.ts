import developerWarning from './DeveloperWarning';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Util > Developer Warning', () => {
  let spy;
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'beforeAll'.
  beforeAll(() => {
    // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'process'. Do you need to install... Remove this comment to see the full error message
    process.env.NODE_ENV = 'dev';
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    spy = jest.spyOn(global.console, 'warn').mockImplementation();
  });
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'afterAll'.
  afterAll(() => {
    // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'process'. Do you need to install... Remove this comment to see the full error message
    process.env.NODE_ENV = 'test';
    spy.mockRestore();
  });

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'beforeEach'.
  beforeEach(() => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    jest.resetAllMocks();
  });

  it('Calls console warn', () => {
    developerWarning('TEST');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(spy).toHaveBeenCalled();
  });

  it('Calls console warn on in dev env', () => {
    developerWarning('DEV ENV');
    // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'process'. Do you need to install... Remove this comment to see the full error message
    process.env.NODE_ENV = 'prod';
    developerWarning('PROD ENV');
    // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'process'. Do you need to install... Remove this comment to see the full error message
    process.env.NODE_ENV = 'dev';
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('prefixes message', () => {
    developerWarning(':)');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(spy).toHaveBeenCalledWith('[Pebble Developer Warning] :)');
  });

  it('defaults to only show message once', () => {
    developerWarning('Show Once');
    developerWarning('Show Once');
    developerWarning('Show Once');
    developerWarning('Show Once');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('can be overrode to show all the time', () => {
    developerWarning('Show Every Time', false);
    developerWarning('Show Every Time', false);
    developerWarning('Show Every Time', false);
    developerWarning('Show Every Time', false);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(spy).toHaveBeenCalledTimes(4);
  });
});
