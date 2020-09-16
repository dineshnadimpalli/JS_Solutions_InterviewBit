// Problem link https://www.interviewbit.com/problems/length-of-last-word/

class Solution {
  lengthOfLastWord = function (A) {
    let res = 0;
    for (let i = A.length - 1; i >= 0; i--) {
      if (A[i] == " ") {
        break;
      } else {
        res++;
      }
    }
    return res;
  };
}

let res = new Solution();
let A = "Hello World"
let B = "worl"
console.log(res.lengthOfLastWord(A));
console.log(res.lengthOfLastWord(B));