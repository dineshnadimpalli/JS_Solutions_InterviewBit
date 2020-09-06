// Problem link https://www.interviewbit.com/problems/balance-array/

class Solution {
  solve = function (A) {
    let len = A.length;
    // even suffix and odd suffix
    let sufEven = 0,
      sufOdd = 0;
    // even prefix and odd prefix
    let preEven = 0,
      preOdd = 0,
      count = 0;

    // to sum up even suffixes and odd suffixes
    for (let i = 0; i < len; i++) {
      if (i % 2 == 0) {
        sufEven += A[i];
      } else {
        sufOdd += A[i];
      }
    }

    for (let i = 0; i < len; i++) {
      if (i % 2 == 0) {
        sufEven -= A[i];
      } else {
        sufOdd -= A[i];
      }

      if (sufEven + preOdd === sufOdd + preEven) {
        // increment the no.of such balance occurences
        count++;
      }

      if (i % 2 == 0) {
        preEven += A[i];
      } else {
        preOdd += A[i];
      }
    }

    return count;
  };
}


let res = new Solution();
let A = [2, 1, 6, 4]
let B = [5, 5, 2, 5, 8]
console.log(res.solve(B));
