// Problem link https://www.interviewbit.com/problems/single-number-ii/

class Solution {
  singleNumberGeneralSol = function (A) {
    let result = 0;
    let x, sum;
    for (let i = 0; i < 32; i++) {
      x = 1 << i;
      sum = 0;
      for (let i = 0; i < A.length; i++) {
        if (A[i] & x) {
          sum++;
        }
      }

      // if each number is repeated n times except one then divide sum%n (here n=3)
      if (sum % 3 != 0) {
        result |= x;
      }
    }
    return result;
  };
}

let res = new Solution();
let A = [1, 2, 4, 3, 3, 2, 2, 3, 1, 1];
console.log(res.singleNumberGeneralSol(A));
