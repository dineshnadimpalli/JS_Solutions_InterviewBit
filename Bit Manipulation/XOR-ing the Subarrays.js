// Problem link https://www.interviewbit.com/problems/xor-ing-the-subarrays/

class Solution {
  // if the length of the array is even each element will be repeated even number of times which we can check using 
  // (i + 1) * (A.length - i) where i is the position of ith element in the array

  // if the elements are of odd length XORing the alternate numbers will give the result

  solve = function (A) {
    let res = 0;
    for (let i = 0; i < A.length; i++) {
      let occurs = (i + 1) * (A.length - i);
      if (occurs % 2 != 0) {
        res ^= A[i];
      }
    }
    return res;
  };

  alternateSolve = function (A) {
    if (A.length % 2 == 0) {
      return 0;
    }
    let res = 0;
    let i = 0;

    while (i < A.length) {
      res = res ^ A[i];
      i += 2;
    }
    return res;
  };
}

let res = new Solution();
let A = [4, 5, 7, 5],
  B = [1, 2, 3];
console.log(res.solve(A)); // 0
console.log(res.solve(B)); // 2

console.log(res.alternateSolve(A)); // 0
console.log(res.alternateSolve(B)); // 2
