// Problem link https://www.interviewbit.com/problems/reverse-bits/

class Solution {
  reverse = function (A) {
    let n = 0;
    for (let i = 0; i < 32; i++) {
      if (A & (1 << i)) {
        n += Math.pow(2, 32 - i - 1);
      }
    }
    return n;
  };

  reverseAlt = function (A) {
    let res = 0;

    for (let i = 0; i < 32; i++) {
      // res <<= 1 (this will return unexpected value in the last iteration when i = 32)
      // so we use res *= 2 instead
      res *= 2;
      // res |= A & 1 (this will return unexpected value in the last iteration when i = 32)
      // so we use res += A & 1 instead
      res += A & 1;
      A = A >> 1;
    }

    return res;
  };
}

let res = new Solution();

let A = 13;

console.log(res.reverse(A)); // 2952790016
console.log(res.reverseAlt(A)); // 2952790016
