// Problem link https://www.interviewbit.com/problems/binary-representation/

class Solution {
  findDigitsInBinary = function (A) {
    if (A == 0) return 0;
    let res = "";
    while (A > 0) {
      let mod = A % 2;
      res = mod + res;
      A = Math.floor(A / 2);
    }
    return res;
  };
}

let res = new Solution();
let A = 7;
console.log(res.findDigitsInBinary(A));
