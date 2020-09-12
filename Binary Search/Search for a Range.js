// Problem link https://www.interviewbit.com/problems/search-for-a-range/

class Solution {
  searchRange = function (A, B) {
    let start = this.search(A, B, true);
    let end = this.search(A, B, false);
    return [start, end];
  };

  search = function (A, B, isLeft) {
    let low = 0;
    let high = A.length - 1;
    let res = -1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (A[mid] == B) {
        res = mid;
        if (isLeft) {
          // for checking the left most index for the value B
          high = mid - 1;
        } else {
          // for checking the right most index for the value B
          low = mid + 1;
        }
      } else if (A[mid] > B) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return res;
  };
}


let res = new Solution();
let A = [5, 7, 7, 8, 8, 10]
let B = 8
console.log(res.searchRange(A, B));