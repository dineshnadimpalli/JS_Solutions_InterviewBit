// Problem link https://www.interviewbit.com/problems/square-root-of-integer/

class Solution {
  sqrt = function (A) {
    let i = 1;
    let isFound = false;
    let res;
    while (!isFound) {
      if (i * i == A) {
        res = i;
        isFound = true;
      } else if (i * i > A) {
        res = this.findSqrt(A, i - 1, i);
        isFound = true;
      }
      i++;
    }
    return Math.floor(res);
  };

  findSqrt = function (A, i, j) {
    while (j - i > 1) {
      let mid = Math.floor((i + j) / 2);
      let mul = mid * mid;
      if (mul == A) {
        return mid;
      } else if (mul > A) {
        j = mid;
      } else {
        i = mid;
      }
    }
    return i;
  };
}


let res = new Solution();
let A = 11
console.log(res.sqrt(A));
