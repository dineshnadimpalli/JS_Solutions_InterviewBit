// Problem link https://www.interviewbit.com/problems/trailing-zeros-in-factorial/

class Solution {
  trailingZeroes = function (A) {
    let count = 0;
    for (let i = 5; A / i >= 1; i *= 5) {
      count += Math.floor(A / i);
    }
    return count;
  };
}

let res = new Solution();
let A = 100;
console.log(res.trailingZeroes(A));
