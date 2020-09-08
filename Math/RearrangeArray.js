// Problem link https://www.interviewbit.com/problems/rearrange-array/

class Solution {
  arrange = function (A) {
    let len = A.length;
    for (let i = 0; i < len; i++) {
      A[i] += (A[A[i]] % len) * len;
    }
    for (let i = 0; i < len; i++) {
      A[i] = Math.floor(A[i] / len);
    }
    return A;
  };
}


let res = new Solution();
let A = [1, 3, 2, 4, 0];
console.log(res.arrange(A));
