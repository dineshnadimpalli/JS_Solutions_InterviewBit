// Problem link https://www.interviewbit.com/problems/balanced-parantheses/

class Solution {
  solve = function (A) {
    let res = [];
    let i = 0;
    while (i < A.length) {
      if (A[i] == "(") {
        res.push(A[i]);
      } else {
        if (res.length == 0) {
          return 0;
        }
        res.pop();
      }
      i++;
    }
    if (res.length > 0) {
      return 0;
    }
    return 1;
  };
}


let res = new Solution();
let A = "(()())"
let B = "(()"


console.log(res.solve(A)); // 1
console.log(res.solve(B)); // 0