// Problem link https://www.interviewbit.com/problems/longest-palindromic-substring/

class Solution {
  longestPalindrome = function (A) {
    let start = 0;
    let maxLen = 1;
    let len = A.length;
    let low, high;

    for (let i = 1; i < len; i++) {
      // find even length palindromes
      low = i - 1;
      high = i;
      // console.log(i, start)
      while (low >= 0 && high < len && A[low] == A[high]) {
        if (high - low + 1 > maxLen) {
          maxLen = high - low + 1;
          start = low;
        }
        --low;
        ++high;
      }

      //find odd length palindromes
      low = i - 1;
      high = i + 1;
      while (low >= 0 && high < len && A[low] == A[high]) {
        if (high - low + 1 > maxLen) {
          maxLen = high - low + 1;
          start = low;
        }
        --low;
        ++high;
      }
    }

    return A.substring(start, start + maxLen);
  };
}


// Input : "aaaabaaa"
// Output : "aaabaaa"

let res = new Solution();
let A = "aaaabaaa";
console.log(res.longestPalindrome(A));