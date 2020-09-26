// Problem link https://www.interviewbit.com/problems/remove-duplicates-from-sorted-array/

// Note: The problem is not currently available in Javascript to solve but the below logic will help solve it


class Solution {
  removeDuplicates = function (A) {
    let i = 0,
      j = 1,
      len = A.length;
    while (i < len && j < len) {
      if (A[i] == A[j]) {
        j++;
      } else {
        A.splice(i + 1, 1, A[j]);
        i++;
        j++;
      }
    }
    for (let k = len - 1; k > i; k--) {
      A.pop();
    }
    return A.length;
  };
}


let res = new Solution();
let A = [1, 1, 2]
console.log(A)
console.log(res.removeDuplicates(A))
console.log(A)

let B = [5000, 5000, 5000]
console.log(B)
console.log(res.removeDuplicates(B))
console.log(B)

// For Java solution refer to the below code

// public class Solution {
//     public int removeDuplicates(ArrayList<Integer> a) {
//         int i=0, j=1;
//         while(i<a.size() && j<a.size()){
//             if(a.get(i).equals(a.get(j))){
//                 j++;
//             }else{
//                 a.set(i+1, a.get(j));
//                 i++;
//                 j++;
//             }
//         }
//         for(int k=a.size()-1;k>i;k--){
//             a.remove(a.size()-1);
//         }
//         return a.size();
//     }
// }
