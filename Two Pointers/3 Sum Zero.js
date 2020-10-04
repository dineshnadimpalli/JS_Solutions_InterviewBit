// Problem link https://www.interviewbit.com/problems/3-sum-zero/

class Solution {
  threeSum = function (A) {
    let res = [];
    let map = new Set();
    A.sort((a, b) => a - b);
    for (let i = 0; i < A.length - 2; i++) {
      let low = i + 1;
      let high = A.length - 1;
      while (low < high) {
        let sum = A[i] + A[low] + A[high];
        if (sum === 0) {
          if (!map.has([A[i], A[low], A[high]].toString())) {
            map.add([A[i], A[low], A[high]].toString());
            res.push([A[i], A[low], A[high]]);
          }
        }
        if (sum < 0) {
          low++;
        } else {
          high--;
        }
      }
    }
    return res;
  };

  // alternate approach without using extra space
  threeSumAlt = function (A) {
    let res = [];
    A.sort((a, b) => a - b);
    for (let i = 0; i < A.length - 2; i++) {
      if(i>0 && A[i] == A[i-1]) continue;
      let low = i + 1;
      let high = A.length - 1;
      while (low < high) {
        let sum = A[i] + A[low] + A[high];
        if (sum === 0) {
          res.push([A[i], A[low], A[high]]);
          while (A[low] == A[low + 1]) low++;
          while (A[high] == A[high - 1]) high--;
          low++;
          high--;
        }
        if (sum < 0) {
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
let A = [-1, 0, 1, 1, 2, -1, -4];
console.log(res.threeSum(A));
console.log(res.threeSumAlt(A));
