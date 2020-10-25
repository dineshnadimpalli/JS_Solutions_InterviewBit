// Problem link https://www.interviewbit.com/problems/sliding-window-maximum/

const { Queue } = require('../utils/queue')

class Solution {
  slidingMaximum = function (A, B) {
    let queue = [];
    let res = [];
    if (B > A.length) return [Math.max.call(...A)];
    let i = 0;
    queue.push(0);
    for (i = 1; i < B; i++) {
      if (queue.length == 0 || A[i] < A[queue[queue.length - 1]]) {
        queue.push(i);
      } else {
        while (queue.length != 0 && A[queue[queue.length - 1]] < A[i]) {
          queue.pop();
        }
        queue.push(i);
      }
    }
    res.push(A[queue[0]]);
    for (let j = i; j < A.length; j++) {
      if (queue[0] < j - B + 1) {
        queue.shift();
      }
      if (queue.length == 0 || A[j] < A[queue[queue.length - 1]]) {
        queue.push(j);
      } else {
        while (queue.length != 0 && A[queue[queue.length - 1]] < A[j]) {
          queue.pop();
        }
        queue.push(j);
      }
      res.push(A[queue[0]]);
    }
    return res;
  }

  slidingMaximumWithQueue = function (A, B) {
    let queue = new Queue();
    let res = [];
    if (B > A.length) return [Math.max.call(...A)];
    let i = 0;
    queue.enqueue(0);
    for (i = 1; i < B; i++) {
      if (queue.size == 0 || A[i] < A[queue.getLast()]) {
        queue.enqueue(i);
      } else {
        while (queue.size != 0 && A[queue.getLast()] < A[i]) {
          queue.removeFromLast();
        }
        queue.enqueue(i);
      }
    }
    res.push(A[queue.getFirst()]);
    for (let j = i; j < A.length; j++) {
      if (queue.getFirst() < j - B + 1) {
        queue.dequeue();
      }
      if (queue.size == 0 || A[j] < A[queue.getLast()]) {
        queue.enqueue(j);
      } else {
        while (queue.size != 0 && A[queue.getLast()] < A[j]) {
          queue.removeFromLast();
        }
        queue.enqueue(j);
      }
      res.push(A[queue.getFirst()]);
    }
    return res;
  };
}


let res = new Solution()
let A = [1, 3, -1, -3, 5, 3, 6, 7]
let B = 3

console.log(res.slidingMaximum(A, B))   // [3, 3, 5, 5, 6, 7]
console.log(res.slidingMaximumWithQueue(A, B))  // [3, 3, 5, 5, 6, 7]

