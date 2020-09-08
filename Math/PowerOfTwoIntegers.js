// Problem link https://www.interviewbit.com/problems/power-of-two-integers/

class Solution {
  isPower = function (A) {
    if (A == 1) return 1;
    let sqrt = Math.sqrt(A);
    for (let i = 2; i <= sqrt; i++) {
      let p = 2;
      let pow = Math.pow(i, p)
      while (pow <= A && p < A) {
        if (pow == A) {
            // console.log(i, p);  // to get both the number and the power
            return 1;
        }
        ++p
        pow = Math.pow(i, p);
      }
    }
    return 0;
  };
}

let res = new Solution();
let A = 16;
console.log(res.isPower(A));
