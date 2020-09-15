// Problem link https://www.interviewbit.com/problems/implement-strstr/

class Solution {
  strStr = function (A, B) {
    if (A.length == 0 || B.length == 0) return -1;
    let Blen = B.length;
    let res = -1;
    let tmp = 0;
    let i = 0,
      j = 0;

    // approach 1

    // for(let i=0;i<A.length;i++){
    //     if(A.substring(i, i+Blen)==B){
    //         res = i
    //         break
    //     }
    // }

    // approach 2
    
    while (i < A.length) {
      if (A[i] == B[j]) {
        if (j == 0) tmp = i;
        j++;
        if (j == Blen) return tmp;
      } else if (j > 0) {
        j = 0;
        i = tmp;
      }
      i++;
    }
    return -1;
  };
}

let res = new Solution();
let A = "bbaabbbbbaabbaabbbbbbabbbabaabbbabbabbbbababbbabbabaaababbbaabaaaba",
  B = "babaaa";
console.log(res.strStr(A, B));  // 48
