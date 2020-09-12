// Problem link https://www.interviewbit.com/problems/sorted-insert-position/

// Currently the problem is not available for Javascript but the below code will work for all the test cases

class Solution {
  searchInsert = function (A, B) {
    let low = 0;
    let high = A.length - 1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (A[mid] == B) {
        return mid;
      } else if (A[mid] > B) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return low;
  };
}

let res = new Solution();
let A = [1, 3, 5, 6],
  B = 2;

// let A = [1, 3, 5, 6],
//   B = 5;
console.log(res.searchInsert(A, B));



// Java solution logic for those who want to solve it in JAVA

// public class Solution {
//     public int searchInsert(ArrayList<Integer> a, int b) {
//         int low = 0;
//         int high = a.size()-1;
//         while(low<=high){
//             int mid = (low+high)/2;
//             if(a.get(mid)==b){
//                 return mid;
//             }else if(a.get(mid)>b){
//                 high = mid-1;
//             }else{
//                 low = mid+1;
//             }
//         }
//         return low;
//     }
// }