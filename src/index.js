
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = [];
  for (let row of matrix) {
    for (let num of row) {
      res.push(num);
    }
  }
  res.sort();
  return res;
}
