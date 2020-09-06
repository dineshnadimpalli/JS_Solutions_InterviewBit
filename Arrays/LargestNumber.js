// Problem link https://www.interviewbit.com/problems/largest-number/

class Solution {
  largestNumber = function (A) {
    let zeroesCount = 0;
    for (let i = 0; i < A.length; i++) {
      if (A[i] === 0) zeroesCount++;
    }
    if (zeroesCount === A.length) return "0";
    A.sort((a, b) => Number(`${b}${a}`) - Number(`${a}${b}`));
    return A.join("");
  };
}


let res = new Solution();
let A = [3, 30, 34, 5, 9];
console.log(res.largestNumber(A));
