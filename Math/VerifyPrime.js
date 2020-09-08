// Problem link https://www.interviewbit.com/problems/verify-prime/

class Solution {
  isPrime = function (A) {
    if (A <= 1) return false;
    for (let i = 2; i <= Math.sqrt(A); i++) {
      if (A % i === 0) return false;
    }
    return true;
  };
}


let res = new Solution();
let A = 7;
console.log(res.isPrime(A));
