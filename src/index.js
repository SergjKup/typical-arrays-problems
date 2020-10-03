
exports.min = function min (array) {
  return array.reduce((a, b) => Math.min(a, b));

}

exports.max = function max (array) {
  return array.reduce((a, b) => Math.max(a, b));
}

exports.avg = function avg (array) {
  return array.reduce((a, b) => (a + b)) / array.length;
}
