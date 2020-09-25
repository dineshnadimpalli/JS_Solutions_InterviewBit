// Problem link https://www.interviewbit.com/problems/min-xor-value/

class Solution {
  findMinXor = function (A) {
    // to find min Xor in an efficient way we need to sort the array and do xor of adjacent elements and compare
    A.sort((a, b) => a - b);
    let min = Number.MAX_VALUE;
    for (let i = 0; i < A.length - 1; i++) {
      let currMin = A[i] ^ A[i + 1];
      min = Math.min(currMin, min);
    }
    return min;
  };
}

let res = new Solution();
let A = [0, 2, 5, 7],
  B = [4, 0, 7, 9];
console.log(res.findMinXor(A)); // 2
console.log(res.findMinXor(B)); // 3
