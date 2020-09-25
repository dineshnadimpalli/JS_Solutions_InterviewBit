// Problem link https://www.interviewbit.com/problems/trailing-zeroes/

class Solution {
  solve = function (A) {
    let count = 0;
    while (A > 0) {
      if (A & (1 == 1)) {
        break;
      }
      count++;
      A >>= 1;
    }
    return count;
  };
}


let res = new Solution();
let A = 8, B = 13
console.log(res.solve(A));
console.log(res.solve(B));
