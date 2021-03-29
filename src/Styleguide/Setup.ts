// @ts-expect-error ts-migrate(6142) FIXME: Module './ColorSwatch' was resolved to '/Users/esj... Remove this comment to see the full error message
import ColorSwatch from './ColorSwatch';

// @ts-expect-error ts-migrate(2552) FIXME: Cannot find name 'global'. Did you mean 'Glob'?
global.ColorSwatch = ColorSwatch;
