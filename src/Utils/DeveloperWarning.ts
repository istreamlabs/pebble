const WARNING_PREFIX = '[Pebble Developer Warning]';
const shownMessages = {};

export default function(
  message,
  showOnce = true,
  messageKey = message,
) {
  const isDev =
    process.env.NODE_ENV === 'dev' ||
    process.env.NODE_ENV === 'development';

  if (isDev) {
    if (!shownMessages[messageKey]) {
      // eslint-disable-next-line no-console
      console.warn(`${WARNING_PREFIX} ${message}`);
    }
    if (showOnce) {
      shownMessages[messageKey] = true;
    }
  }
}
