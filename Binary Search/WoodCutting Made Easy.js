// Problem link https://www.interviewbit.com/problems/woodcutting-made-easy/

class Solution {
  solve = function (A, B) {
    let high = Number.MIN_VALUE;
    let low = Number.MAX_VALUE;
    for (let i = 0; i < A.length; i++) {
      if (A[i] > high) high = A[i];
      if (A[i] < low) low = A[i];
    }
    while (low < high) {
      let mid = Math.floor((low + high) / 2);
      let currHeight = this.findHeight(A, mid);
      if (currHeight < B) high = mid;
      else low = mid + 1;
    }
    return low - 1;
  };

  findHeight = function (A, max) {
    let sum = 0;
    for (let i = 0; i < A.length; i++) {
      if (A[i] > max) {
        sum += A[i] - max;
      }
    }
    return sum;
  };
}

let res = new Solution();
let A = [20, 15, 10, 17],
  B = 7;

let C = [4, 42, 40, 26, 46],
  D = 20;

let E = [84, 103, 149, 68, 88, 50],
  F = 88;

console.log(res.solve(A, B)); // 15
console.log(res.solve(C, D)); // 36
console.log(res.solve(E, F)); // 84
