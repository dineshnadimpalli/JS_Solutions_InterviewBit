// Problem link https://www.interviewbit.com/problems/prime-numbers/

class Solution {
  sieve = function (A) {
    let primes = new Array(A + 1).fill(1);
    primes[0] = 0;
    primes[1] = 0;
    for (let i = 2; i <= Math.sqrt(A); i++) {
      if (primes[i] == 1) {
        for (let j = 2; i * j <= A; j++) {
          primes[i * j] = 0;
        }
      }
    }
    let res = [];
    primes.forEach((d, i) => {
      if (d == 1) {
        res.push(i);
      }
    });

    return res;
  };
}

let res = new Solution();
let A = 7;
console.log(res.sieve(A));
