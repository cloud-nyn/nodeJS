function addNum(x, y) {
  return x + y;
}
function subtractNum(x, y) {
  return x - y;
}
function multiplyNum(x, y) {
  return x * y;
}
function divideNum(x, y) {
  return x / y;
}
const PI = 3.14;

module.exports = {
  add: addNum,
  subtract: subtractNum,
  multiply: multiplyNum,
  divide: divideNum,
  pi: PI,
};
