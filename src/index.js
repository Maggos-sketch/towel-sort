
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = [];
    try {
        for (let row of matrix) {
            if (matrix.indexOf(row) % 2 != 0) {
                row = row.reverse();
            }
            for (let n of row) {
                res.push(n);
            }
        }
    } catch (e) {
        res = [];
    }
    return res;
}
