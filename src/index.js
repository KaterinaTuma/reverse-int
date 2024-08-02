module.exports = function reverse (n) {
  const nStr = [...Math.abs(n).toString()].reverse().join('');
  const nReversed = Number(nStr);
  return nReversed;
};
