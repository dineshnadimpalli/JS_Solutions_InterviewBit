// Problem link https://www.interviewbit.com/problems/first-missing-integer/

class Solution {
  firstMissingPositive = function (A) {
    let len = A.length;
    // to capture whether all positive numbers are visited or not including 0
    let bool = new Array(len + 1);
    bool.fill(false);
    for (let i = 0; i < len; i++) {
      if (A[i] > 0 && A[i] <= len) {
        bool[A[i]] = true;
      }
    }
    // console.log(bool)
    for (let i = 1; i <= len; i++) {
      if (!bool[i]) {
        return i;
      }
    }
    return len + 1;
  };
}

let res = new Solution();
let A = [1, 2, 0];
let B = [3,4,-1,1]
let C = [-8, -7, -6]
console.log(res.firstMissingPositive(A));
