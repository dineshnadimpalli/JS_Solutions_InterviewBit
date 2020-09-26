// Problem link https://www.interviewbit.com/problems/intersection-of-sorted-arrays/

class Solution {
  intersect = function (A, B) {
    let res = [];
    let i = 0,
      j = 0;
    while (i < A.length && j < B.length) {
      if (A[i] <= B[j]) {
        if (A[i] == B[j]) {
          res.push(A[i]);
          j++;
        }
        i++;
      } else {
        j++;
      }
    }
    return res;
  };
}


let res = new Solution();
let A = [ 1, 3, 8, 10, 13, 13, 16, 16, 16, 18, 21, 23, 24, 31, 31, 31, 33, 35, 35, 37, 37, 38, 40, 41, 43, 47, 47, 48, 48, 52, 52, 53, 53, 55, 56, 60, 60, 61, 61, 63, 63, 64, 66, 67, 67, 68, 69, 71, 80, 80, 80, 80, 80, 80, 81, 85, 87, 87, 88, 89, 90, 94, 95, 97, 98, 98, 100, 101 ],
B = [ 5, 7, 14, 14, 25, 28, 28, 34, 35, 38, 38, 39, 46, 53, 65, 67, 69, 70, 78, 82, 94, 94, 98 ]
console.log(res.intersect(A, B));   // [35, 38, 53, 67, 69, 94, 98]


let C = [1, 2, 3, 3, 4, 5, 6], D = [3, 3, 5]
console.log(res.intersect(C, D));   // [3, 3, 5]
