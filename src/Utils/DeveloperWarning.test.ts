import developerWarning from './DeveloperWarning';

describe('Util > Developer Warning', () => {
  let spy;
  beforeAll(() => {
    process.env.NODE_ENV = 'dev';
    spy = jest.spyOn(global.console, 'warn').mockImplementation();
  });
  afterAll(() => {
    process.env.NODE_ENV = 'test';
    spy.mockRestore();
  });

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('Calls console warn', () => {
    developerWarning('TEST');
    expect(spy).toHaveBeenCalled();
  });

  it('Calls console warn on in dev env', () => {
    developerWarning('DEV ENV');
    process.env.NODE_ENV = 'prod';
    developerWarning('PROD ENV');
    process.env.NODE_ENV = 'dev';
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('prefixes message', () => {
    developerWarning(':)');
    expect(spy).toHaveBeenCalledWith('[Pebble Developer Warning] :)');
  });

  it('defaults to only show message once', () => {
    developerWarning('Show Once');
    developerWarning('Show Once');
    developerWarning('Show Once');
    developerWarning('Show Once');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('can be overrode to show all the time', () => {
    developerWarning('Show Every Time', false);
    developerWarning('Show Every Time', false);
    developerWarning('Show Every Time', false);
    developerWarning('Show Every Time', false);
    expect(spy).toHaveBeenCalledTimes(4);
  });
});
