// Problem link https://www.interviewbit.com/problems/3-sum/

class Solution {
  threeSumClosest = function (A, B) {
    A.sort((a, b) => a - b);
    let res = A[0] + A[1] + A[A.length - 1];
    for (let i = 0; i < A.length - 2; i++) {
      let low = i + 1;
      let high = A.length - 1;
      while (low < high) {
        let sum = A[i] + A[low] + A[high];
        if (Math.abs(B - sum) <= Math.abs(B - res)) {
          res = sum;
        }
        if (sum < B) {
          low++;
        } else {
          high--;
        }
      }
    }
    return res;
  };
}

let res = new Solution();
let A = [-1, 2, 1, -4], B = 1
console.log(res.threeSumClosest(A, B))