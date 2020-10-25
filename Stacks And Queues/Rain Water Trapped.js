// Problem link https://www.interviewbit.com/problems/rain-water-trapped/

const { Stack } = require("../utils/stack");

class Solution {
  trap = function (A) {
    let res = new Stack();
    let total = 0;
    for (let i = 0; i < A.length; i++) {
      while (!res.isEmpty() && A[i] > A[res.peek()]) {
        let popHeight = A[res.pop()];
        if (res.isEmpty()) {
          break;
        }
        let distance = i - res.peek() - 1;
        let height = Math.min(A[i], A[res.peek()]) - popHeight;
        // console.log(distance, height)
        total += distance * height;
      }
      res.push(i);
    }
    return total;
  };

  trapArray = function (A) {
    let st = [],
      distance,
      height,
      total = 0;
    for (let i = 0; i < A.length; i++) {
      while (st.length != 0 && A[st[st.length - 1]] < A[i]) {
        let popHeight = A[st.pop()];
        if (st.length == 0) {
          break;
        }
        distance = i - st[st.length - 1] - 1;
        height = Math.min(A[i], A[st[st.length - 1]]) - popHeight;
        total += distance * height;
      }
      st.push(i);
    }
    return total;
  };
}

let res = new Solution();
let A = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
let B = [1, 2];

console.log(res.trap(A)); // 6
console.log(res.trap(B)); // 0

console.log(res.trapArray(A)); // 6
console.log(res.trapArray(B)); // 0
