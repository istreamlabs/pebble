export default (value: any, compare: any) => {
  if (typeof value !== 'string' || typeof compare !== 'string') {
    return false;
  }
  return value.toLowerCase() === compare.toLowerCase();
};
