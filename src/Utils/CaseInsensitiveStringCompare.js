export default (value, compare) => {
  if ((typeof value) !== 'string' || (typeof compare) !== 'string') {
    return false;
  }
  return value.toLowerCase() === compare.toLowerCase();
};
