// Problem link https://www.interviewbit.com/problems/count-total-set-bits/

class Solution {
  solve = function (A) {
    // increment A to include the case of 0 as well
    A++;
    // To store the powers of 2
    let powerOf2 = 2;

    // To store the result, it is initialized
    // with n/2 because the count of set
    // least significant bits in the integers
    // from 1 to n is n/2
    let cnt = Math.floor(A / 2);

    // Loop for every bit required to represent n
    while (powerOf2 <= A) {
      // Total count of pairs of 0s and 1s
      let totalPairs = Math.floor(A / powerOf2);

      // totalPairs/2 gives the complete
      // count of the pairs of 1s
      // Multiplying it with the current power
      // of 2 will give the count of
      // 1s in the current bit
      cnt += Math.floor(totalPairs / 2) * powerOf2;

      // If the count of pairs was odd then
      // add the remaining 1s which could
      // not be groupped together
      cnt += totalPairs % 2 == 1 ? A % powerOf2 : 0;

      // Next power of 2
      powerOf2 <<= 1;
    }

    // Return the result
    return cnt % 1000000007;
  };

  solveByDp = function (A) {
    let setBits = new Array(A + 1);
    let res = 0;
    setBits[0] = 0;
    setBits[1] = 1;
    for (let i = 2; i <= A; i++) {
      setBits[i] = setBits[Math.floor(i / 2)] + i%2;
    }
    res = setBits.reduce((acc, curr) => acc + curr, res);
    return res % 1000000007;
  };
}


let res = new Solution();
let A = 5, B = 6
console.log(res.solve(A)); // 7
console.log(res.solveByDp(A)); // 7


console.log(res.solve(B)); // 9
console.log(res.solveByDp(B)); // 9