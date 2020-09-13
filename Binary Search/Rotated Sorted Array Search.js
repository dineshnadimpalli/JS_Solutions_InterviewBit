// Problem link https://www.interviewbit.com/problems/rotated-sorted-array-search/

class Solution {
  search = function (A, B) {
    let res = -1;
    let low = 0;
    let high = A.length - 1;
    while (low <= high) {
      // console.log(low, high)
      let mid = Math.floor((low + high) / 2);
      if (A[mid] == B) return mid;
      if (
        (B > A[mid] && B > A[low]) ||
        (B < A[mid] && B < A[low]) ||
        (A[low] > A[mid] && B > A[mid])
      ) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return res;
  };
}

let res = new Solution();
let A = [4, 5, 6, 7, 0, 1, 2, 3],
  B = 1;

let C = [5, 17, 100, 3],
  D = 6;

console.log(res.search(A, B));
console.log(res.search(C, D));
