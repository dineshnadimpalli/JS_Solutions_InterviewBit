// Problem link https://www.interviewbit.com/problems/count-element-occurence/

class Solution {
  findCount = function (A, B) {
    let firstOccur = this.findIndex(A, 0, A.length - 1, true, B);
    let lastOccur = this.findIndex(A, 0, A.length - 1, false, B);
    if (lastOccur < 0 && firstOccur < 0) return 0;
    return lastOccur - firstOccur + 1;
  };

  findIndex = function (arr, first, last, findIsFirst, target) {
    let result = -1;
    while (first <= last) {
      let mid = Math.floor((first + last) / 2);
      if (arr[mid] == target) {
        result = mid;
        if (findIsFirst) {
          last = mid - 1;
        } else {
          first = mid + 1;
        }
      } else if (arr[mid] < target) {
        first = mid + 1;
      } else {
        last = mid - 1;
      }
    }
    return result;
  };
}


let res = new Solution();
let A = [5, 7, 7, 8, 8, 10];
let B = 8
console.log(res.findCount(A, B));
