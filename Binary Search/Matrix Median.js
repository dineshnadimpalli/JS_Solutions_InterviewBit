// Problem link https://www.interviewbit.com/problems/matrix-median/

class Solution {
  findMedian = function (A) {
    let r = A.length;
    let c = A[0].length;

    let min = Number.MAX_VALUE,
      max = Number.MIN_VALUE;
    for (let i = 0; i < r; i++) {
      if (A[i][0] < min) min = A[i][0];
      if (A[i][c - 1] > max) max = A[i][c - 1];
    }

    // Count of numbers less than median
    let expectedMed = (r * c + 1) / 2;

    while (min < max) {
      var mid = Math.floor((max + min) / 2);
      var count = 0;
      for (let i = 0; i < r; i++) {
        // Approach using iteration
        // for(let j=0;j<c;j++){
        //     if(A[i][j]<= mid){
        //         count++
        //     }else{
        //         break;
        //     }
        // }

        // Approach using binary search
        count += this.search(A[i], mid);
      }
      if (count < expectedMed) {
        min = mid + 1;
      } else {
        max = mid;
      }
    }
    return min;
  };

  search = function (arr, k) {
    let low = 0;
    let high = arr.length - 1;
    let res = -1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] == k) {
        res = mid + 1;
        low = mid + 1;
      } else if (arr[mid] < k) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return res != -1 ? res : low;
  };
}

let res = new Solution();
let A = [
  [1, 3, 5],
  [2, 6, 9],
  [3, 6, 9],
];
console.log(res.findMedian(A));
