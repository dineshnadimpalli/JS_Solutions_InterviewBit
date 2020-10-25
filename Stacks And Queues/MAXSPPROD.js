// Problem link https://www.interviewbit.com/problems/maxspprod/

const { Stack } = require("../utils/stack");

class Solution {
  maxSpecialProduct = function (A) {
    let len = A.length;
    let max = 0;
    let stack = new Stack();
    let right_arr = [];
    let left_arr = [];
    let curr, top, temp, r, l;
    function right() {
      stack = new Stack();
      for (let i = 0; i < len; i++) {
        curr = A[i];
        while (stack.length !== 0 && curr > A[stack.peek()]) {
          right_arr[stack.pop()] = i;
        }
        stack.push(i);
      }
      return right_arr;
    }

    function left() {
      stack = new Stack();
      for (let i = len - 1; i >= 0; i--) {
        curr = A[i];
        while (stack.length !== 0 && curr > A[stack.peek()]) {
          left_arr[stack.pop()] = i;
        }
        stack.push(i);
      }
      return left_arr;
    }

    left_arr = left();
    right_arr = right();
    //console.log(left_arr);
    for (let i = 0; i < len; i++) {
      temp = (left_arr[i] || 0) * (right_arr[i] || 0);
      if (temp > max) {
        max = temp % 1000000007;
      }
    }
    return max;
  };
}



let res = new Solution();
let A = [1, 4, 3, 4]
let B = [10, 7, 100]
console.log(res.maxSpecialProduct(A));  // 3
console.log(res.maxSpecialProduct(B));  // 0

