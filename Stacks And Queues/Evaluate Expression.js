// Problem link https://www.interviewbit.com/problems/evaluate-expression/

const { Stack } = require("../utils/stack");

class Solution {
  evalRPN = function (A) {
    let res = [];
    let ops = ["+", "-", "/", "*"];
    for (let i = 0; i < A.length; i++) {
      if (ops.indexOf(A[i]) == -1) {
        res.push(A[i]);
      } else {
        let second = parseInt(res.pop());
        let first = parseInt(res.pop());
        if (A[i] == "+") {
          res.push(first + second);
        }
        if (A[i] == "-") {
          res.push(first - second);
        }
        if (A[i] == "/") {
          res.push(first / second);
        }
        if (A[i] == "*") {
          res.push(first * second);
        }
      }
    }
    if (Math.abs(res[res.length - 1]) == 0) {
      return 0;
    }
    return res.pop();
  };

  evalRPNWithStack = function (A) {
    let res = new Stack();
    let ops = ["+", "-", "/", "*"];
    for (let i = 0; i < A.length; i++) {
      if (ops.indexOf(A[i]) == -1) {
        res.push(A[i]);
      } else {
        let second = parseInt(res.pop());
        let first = parseInt(res.pop());
        if (A[i] == "+") {
          res.push(first + second);
        }
        if (A[i] == "-") {
          res.push(first - second);
        }
        if (A[i] == "/") {
          res.push(first / second);
        }
        if (A[i] == "*") {
          res.push(first * second);
        }
      }
    }
    if (Math.abs(res[res.length - 1]) == 0) {
      return 0;
    }
    return res.pop();
  };
}

let res = new Solution();
let A = ["2", "1", "+", "3", "*"];
let B = ["4", "13", "5", "/", "+"];

console.log(res.evalRPN(A));    // 9
console.log(res.evalRPNWithStack(A));   // 9

console.log(res.evalRPN(B));    // 6
console.log(res.evalRPNWithStack(B));   // 6
