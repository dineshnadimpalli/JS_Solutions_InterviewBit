// Problem link https://www.interviewbit.com/problems/max-sum-contiguous-subarray/

const { bubbleSort, insertionSort } = require("../utils/sorting");

// Note: The solution includes both maxSum and maxSumArr

class Solution {
  maxSubArray = function (A) {
    // current max sum
    let curr_max = A[0];
    // result max sum
    let res_max = A[0];
    let startIndex = 0;
    let endIndex = 0;
    let tmpStart = 0;
    for (let i = 1; i < A.length; i++) {
      if (A[i] > curr_max + A[i]) {
        tmpStart = i;
      }
      curr_max = Math.max(A[i], curr_max + A[i]);
      if (curr_max > res_max) {
        startIndex = tmpStart;
        endIndex = i;
      }
      res_max = Math.max(res_max, curr_max);
    }

    return {
        maxSum: res_max,
        maxSumArr: A.slice(startIndex, endIndex+1)
    };
  };
}

let res = new Solution();
let A = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(res.maxSubArray(A).maxSum);

console.log(insertionSort(A))