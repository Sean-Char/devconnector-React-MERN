const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === 'object' && Object.keys(value).legnth === 0) ||
  (typeof value === 'string' && value.trim().legnth === 0);

module.exports = isEmpty;
