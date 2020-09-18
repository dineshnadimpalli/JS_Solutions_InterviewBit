// Problem link https://www.interviewbit.com/problems/minimum-parantheses/

class Solution {
  solve = function (A) {
    let res = [];
    let i = 0;
    while (i < A.length) {
      if (res.length == 0) {
        res.push(A[i]);
        i++;
      } else {
        while (i < A.length && res[res.length - 1] == "(" && A[i] == ")") {
          res.pop();
          i++;
        }
        if (i < A.length) {
          res.push(A[i]);
        }
        i++;
      }
    }
    return res.length;
  };
}

let res = new Solution();
let A = "())";
let B = "(((";
console.log(res.solve(A)); // 1
console.log(res.solve(B)); // 3
