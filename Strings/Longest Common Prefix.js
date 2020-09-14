// Problem link https://www.interviewbit.com/problems/longest-common-prefix/

class Solution {
  longestCommonPrefix = function (A) {
    let isSame = true;
    let j = 0;
    while (isSame && j < A[0].length) {
      let common = A[0][j];
      for (let i = 0; i < A.length; i++) {
        if (A[i][j] != common) {
          isSame = false;
        }
      }
      if (isSame) {
        j++;
      }
    }
    return A[0].slice(0, j);
  };
}

let res = new Solution();
let A = ["abcdefgh", "aefghijk", "abcefgh"];
let B = ["abab", "ab", "abcd"];
console.log(res.longestCommonPrefix(A));
console.log(res.longestCommonPrefix(B));

