// Problem link https://www.interviewbit.com/problems/nearest-smaller-element/

const { Stack } = require("../utils/stack");

class Solution {
  prevSmaller = function (A) {
    let stack = new Stack();
    let len = A.length;
    let left_arr = new Array(len).fill(-1);
    function left() {
      for (let i = len - 1; i >= 0; i--) {
        let curr = A[i];
        while (stack.length !== 0 && curr < A[stack.peek()]) {
          left_arr[stack.pop()] = i;
        }
        stack.push(i);
      }
      return left_arr;
    }
    left_arr = left().map((d) => (d != -1 ? A[d] : d));
    return left_arr;
  };
}


let res = new Solution();
let A = [4, 5, 2, 10, 8]
console.log(res.prevSmaller(A));    // [-1, 4, -1, 2, 2]

