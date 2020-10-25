// Problem link https://www.interviewbit.com/problems/simplify-directory-path/

const { Queue } = require("../utils/queue");

class Solution {
  simplifyPath = function (A) {
    let queue = new Queue();
    let res = "";
    A = A.split("/");
    for (let i = 0; i < A.length; i++) {
      if (A[i] == "." || A[i] == "") continue;
      else if (A[i] == ".." && queue.size != 0) {
        queue.dequeue();
      } else {
        queue.enqueue(A[i]);
      }
    }
    if (queue.size == 0) return "/";
    while (queue.size != 0) {
      res += "/" + queue.dequeue();
    }

    return res;
  };
}

let res = new Solution();
let A = "/a/./b/../../c/"
console.log(res.simplifyPath(A));  // "/c"


