
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = [];
  if(matrix) {
    for (let i = 0; i < matrix.length; i++) {
      if (i%2===0){
        for (let y = 0; y<matrix[i].length; y++) {
          res.push(matrix[i][y])
        }
      } else {
        for (let j=(matrix[i].length-1); j>=0; j-- ) {
          res.push(matrix[i][j])
        }
      }
    }
  }

  return res
}
