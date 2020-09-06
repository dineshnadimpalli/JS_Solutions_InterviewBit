// Problem link https://www.interviewbit.com/problems/wave-array/

class Solution {
  wave = function (A) {
    A.sort((a, b) => a - b); // ascending order
    for (let i = 0; i < A.length; i++) {
      if (i % 2 == 0) {
        if (A[i + 1] > A[i]) {
          let tmp = A[i];
          A[i] = A[i + 1];
          A[i + 1] = tmp;
        }
      } else {
        if (A[i + 1] < A[i]) {
          let tmp = A[i];
          A[i] = A[i + 1];
          A[i + 1] = tmp;
        }
      }
    }
    return A;
  };
}


let res = new Solution()
let A = [1, 2, 3, 4]
console.log(res.wave(A))

