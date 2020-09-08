// Problem link https://www.interviewbit.com/problems/excel-column-number/

class Solution {
  titleToNumber = function (A) {
    let res = 0;
    for (let i = 0; i < A.length; i++) {
      res *= 26;
      res += A[i].charCodeAt() - 65 + 1;
    }
    return res;
  };
}


let res = new Solution();
let A = 'AB';
console.log(res.titleToNumber(A));
