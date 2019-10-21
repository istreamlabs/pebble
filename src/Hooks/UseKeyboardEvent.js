import { useEffect } from 'react';

export default (function(key, callback) {
  useEffect(
    function() {
      const keys = key.split('+');

      const handler = function handler(event) {
        const keyCommand = keys.every(k => {
          switch (k.toLowerCase()) {
            case 'alt':
              return !!event.altKey;
            case 'ctrl':
              return !!event.ctrlKey;
            case 'meta':
              return !!event.metaKey;
            case 'shift':
              return !!event.shiftKey;
            default:
              return event.key === k;
          }
        });

        if (keyCommand) {
          event.preventDefault();
          callback(event);
        }
      };

      window.addEventListener('keydown', handler);
      return function() {
        window.removeEventListener('keydown', handler);
      };
    },
    [key, callback],
  );
});
