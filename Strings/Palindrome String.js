// Problem link https://www.interviewbit.com/problems/palindrome-string/

class Solution {
  isPalindrome = function (A) {

    // approach 1

    // let regEx = /^[a-zA-Z0-9]/
    // A = A.toLowerCase()
    // let res = ''
    // for(let i=0;i<A.length;i++){
    //     if(regEx.test(A[i])){
    //         res += A[i]
    //     }
    // }

    // if(res.split('') ==res.split('').reverse()){
    //     return 1
    // }else{
    //     return 0
    // }


    // approach 2

    A = A.replace(/\W+/g, "");
    A = A.toLowerCase();
    let len = A.length;
    for (let i = 0; i < len / 2; i++) {
      if (A[i] !== A[len - i - 1]) {
        return 0;
      }
    }
    return 1;
  };
}


let res = new Solution();
let A = "A man, a plan, a canal: Panama"
console.log(res.isPalindrome(A));  // 1
