// Problem link https://www.interviewbit.com/problems/spiral-order-matrix-ii/

class Solution {
  generateMatrix = function (A) {
    // let res = new Array(A).fill(new Array(A).fill(0));
    let res = new Array(A);

    // Loop through the array, adding a
    // new array to each location
    for (let i = 0; i < res.length; i++) {
      res[i] = new Array(A);
    }
    let k = 0,
      l = 0,
      m = A - 1,
      n = A - 1,
      j = 1;
    while (k <= m && l <= n) {
      for (let i = l; i <= n; ++i) {
        res[k][i] = j;
        j++;
      }
      k++;

      for (let i = k; i <= m; ++i) {
        res[i][n] = j;
        j++;
      }
      n--;

      if (k <= m) {
        for (let i = n; i >= l; --i) {
          res[m][i] = j;
          j++;
        }
        m--;
      }

      if (l <= n) {
        for (let i = m; i >= k; --i) {
          res[i][l] = j;
          j++;
        }
        l++;
      }
    }
    return res;
  };
}

let res = new Solution();
let A = 3;
console.log(res.generateMatrix(A));
