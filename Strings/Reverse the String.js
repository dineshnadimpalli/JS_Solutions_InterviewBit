// Problem link https://www.interviewbit.com/problems/reverse-the-string/

class Solution {
  solve = function (A) {
    let stack = [];
    let tmp = "";
    let i = 0;
    A = A.trim();
    while (i < A.length) {
      if (A[i] !== " ") {
        tmp = tmp + A[i];
      } else {
        if (tmp.length > 0) stack.push(tmp);
        tmp = "";
      }
      i++;
    }
    if (tmp.length > 0) stack.push(tmp);
    return stack.reverse().join(" ");
  };

  // another simple approach

  // solve = function (A) {
  //   return A.replace(/\s+/g, " ").trim().split(" ").reverse().join(" ");
  // };
}

// Input 1:
//     A = "the sky is blue"
// Output 1:
//     "blue is sky the"

// Input 2:
//     A = "this is ib"
// Output 2:
//     "ib is this"

let res = new Solution();
let A = "the sky is blue";
console.log(res.solve(A));
