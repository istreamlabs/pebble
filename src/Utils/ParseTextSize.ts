/**
 * Given a string or number from 1 to 7, returns the string
 * representation of the size
 *
 * @param {(string | number)} size - A string or number param
 * @param {string} [element=5] - Optional string with value 1-6, corresponding to the html header element (e.g. h1, h2...)
 * @return {string} parsed string
 *
 */
export default (size: any, element = 5) => {
  if (typeof size !== 'number') {
    size = parseInt(size, 10);
  }
  if (isNaN(size) || size < 1 || size > 7) {
    const defaultSize = element;
    size = defaultSize;
  }
  return size;
};
