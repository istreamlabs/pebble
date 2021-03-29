const WARNING_PREFIX = '[Pebble Developer Warning]';
const shownMessages = {};

export default function(
  message,
  showOnce = true,
  messageKey = message,
) {
  const isDev =
    // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'process'. Do you need to install... Remove this comment to see the full error message
    process.env.NODE_ENV === 'dev' ||
    // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'process'. Do you need to install... Remove this comment to see the full error message
    process.env.NODE_ENV === 'development';

  if (isDev) {
    // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    if (!shownMessages[messageKey]) {
      // eslint-disable-next-line no-console
      console.warn(`${WARNING_PREFIX} ${message}`);
    }
    if (showOnce) {
      // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
      shownMessages[messageKey] = true;
    }
  }
}
