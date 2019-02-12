export default (size, element = 5) => {
  if (typeof size !== 'number') {
    size = parseInt(size, 10);
  }
  if (isNaN(size) || size < 1 || size > 7) {
    const defaultSize = element;
    size = defaultSize;
  }
  return size;
};
