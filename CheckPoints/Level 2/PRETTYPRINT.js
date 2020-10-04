// Checkpoint level 2

// Problem link https://www.interviewbit.com/problems/prettyprint/

class Solution {
  prettyPrint = function (A) {
    // let res = new Array(A).fill(new Array(A).fill(0));
    let res = new Array(2 * A - 1);

    // Loop through the array, adding a
    // new array to each location
    for (let i = 0; i < res.length; i++) {
      res[i] = new Array(2 * A - 1);
    }
    let k = 0,
      l = 0,
      m = 2 * A - 2,
      n = 2 * A - 2,
      j = A;
    while (k <= m && l <= n && j > 0) {
      for (let i = l; i <= n; ++i) {
        res[k][i] = j;
      }
      k++;

      for (let i = k; i <= m; ++i) {
        res[i][n] = j;
      }
      n--;

      if (k <= m) {
        for (let i = n; i >= l; --i) {
          res[m][i] = j;
        }
        m--;
      }

      if (l <= n) {
        for (let i = m; i >= k; --i) {
          res[i][l] = j;
        }
        l++;
      }
      j--;
    }
    return res;
  };
}

let res = new Solution();
let A = 4;
console.log(res.prettyPrint(A));
