// Problem link https://www.interviewbit.com/problems/median-of-array/

// Note: The problem is currently not available to solve in JavaScript but the logic remains the same

class Solution {
  findMedianSortedArrays = (A, B) => {
    // if size of A>B swap arrays so that we do binary search on the shorter array which results in O(log(min(A,B)))
    if (A.length > B.length) {
      return findMedianSortedArrays(B, A);
    }
    let x = A.length;
    let y = B.length;

    let low = 0;
    let high = x;
    while (low <= high) {
      let partitionX = Math.floor((low + high) / 2);
      let partitionY = Math.floor((x + y + 1) / 2) - partitionX;

      //if partitionX is 0 it means nothing is there on left side. Use MIN_VALUE for maxLeftX
      //if partitionX is length of input then there is nothing on right side. Use MAX_VALUE for minRightX
      let maxLeftX = partitionX == 0 ? Number.MIN_VALUE : A[partitionX - 1];
      let minRightX = partitionX == x ? Number.MAX_VALUE : A[partitionX];

      let maxLeftY = partitionY == 0 ? Number.MIN_VALUE : B[partitionY - 1];
      let minRightY = partitionY == y ? Number.MAX_VALUE : B[partitionY];

      if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
        //We have partitioned array at correct place
        // Now get max of left elements and min of right elements to get the median in case of even length combined array size
        // or get max of left for odd length combined array size.
        if ((x + y) % 2 == 0) {
          return (
            (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2
          );
        } else {
          return Math.max(maxLeftX, maxLeftY);
        }
      } else if (maxLeftX > minRightY) {
        //we are too far on right side for partitionX. Go on left side.
        high = partitionX - 1;
      } else {
        //we are too far on left side for partitionX. Go on right side.
        low = partitionX + 1;
      }
    }
    return -1;
  };
}

let res = new Solution();
let A = [1, 3, 8, 9, 15],
  B = [7, 11, 19, 21, 18, 25];

let C = [1, 2, 3],
  D = [4, 5, 6];

console.log(res.findMedianSortedArrays(A, B));
console.log(res.findMedianSortedArrays(C, D));




// For JAVA solution please refer to the below code

// public class Solution {
//     public double findMedianSortedArrays(final List<Integer> a, final List<Integer> b) {
//         if (a.size() > b.size()) {
//             return findMedianSortedArrays(b, a);
//         }
//         int x = a.size();
//         int y = b.size();

//         int low = 0;
//         int high = x;
//         while (low <= high) {
//             int partitionX = (low + high)/2;
//             int partitionY = (x + y + 1)/2 - partitionX;

//             //if partitionX is 0 it means nothing is there on left side. Use -INF for maxLeftX
//             //if partitionX is length of input then there is nothing on right side. Use +INF for minRightX
//             int maxLeftX = (partitionX == 0) ? Integer.MIN_VALUE : a.get(partitionX - 1);
//             int minRightX = (partitionX == x) ? Integer.MAX_VALUE : a.get(partitionX);

//             int maxLeftY = (partitionY == 0) ? Integer.MIN_VALUE : b.get(partitionY - 1);
//             int minRightY = (partitionY == y) ? Integer.MAX_VALUE : b.get(partitionY);

//             if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
//                 //We have partitioned array at correct place
//                 // Now get max of left elements and min of right elements to get the median in case of even length combined array size
//                 // or get max of left for odd length combined array size.
//                 if ((x + y) % 2 == 0) {
//                     return ((double)Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY))/2;
//                 } else {
//                     return (double)Math.max(maxLeftX, maxLeftY);
//                 }
//             } else if (maxLeftX > minRightY) { //we are too far on right side for partitionX. Go on left side.
//                 high = partitionX - 1;
//             } else { //we are too far on left side for partitionX. Go on right side.
//                 low = partitionX + 1;
//             }
//         }
//         return -1;
//     }
// }