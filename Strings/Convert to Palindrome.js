// Problem link https://www.interviewbit.com/problems/convert-to-palindrome/

class Solution {
  solve = function (A) {
    for (let i = 0; i < A.length; i++) {
      let tmpStr = A.substring(0, i) + A.substring(i + 1);
      if (this.isPalindrome(tmpStr)) {
        return 1;
      }
    }
    return 0;
  };

  isPalindrome = function (A) {
    let i = 0,
      j = A.length - 1;
    while (i <= j) {
      if (A[i] != A[j]) {
        return 0;
      } else {
        i++;
        j--;
      }
    }
    return 1;
  };

  efficientSolve = function (A) {
    if (!A.length) return 0;
    let i = 0,
      j = A.length - 1,
      is_one_removed = false;
    while (i <= j) {
      if (A.charAt(i) === A.charAt(j)) {
        i++;
        j--;
        continue;
      } else if (A.charAt(i) === A.charAt(j - 1)) {
        if (is_one_removed) return 0;
        is_one_removed = true;
        j = j - 1;
      } else if (A.charAt(i + 1) === A.charAt(j)) {
        if (is_one_removed) return 0;
        is_one_removed = true;
        i = i + 1;
      } else return 0;
      i++;
      j--;
    }
    return 1
  };
}

let res = new Solution();
let A = "abcba";
let B = "abecbea";
console.log(res.solve(A)); // 1
console.log(res.solve(B)); // 0
console.log(res.efficientSolve(A)); // 1
console.log(res.efficientSolve(B)); // 0
