// Problem link https://www.interviewbit.com/problems/reverse-integer/

class Solution {
  reverse = function (A) {
    let res = 0;
    let negative = 1;
    if (A < 0) negative = -1;
    let n = Math.abs(A);
    while (n > 0) {
      let mod = n % 10;
      res = res * 10 + mod;
      n = Math.floor(n / 10);
    }
    if (res > Math.pow(2, 31)) return 0;
    return res * negative;
  };
}

let res = new Solution();
let A = -123;
console.log(res.reverse(A));
