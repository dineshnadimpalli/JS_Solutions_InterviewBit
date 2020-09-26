// Problem link https://www.interviewbit.com/problems/merge-two-sorted-lists-ii/

// Note: The problem is not currently available in Javascript to solve but the below logic will help solve it

class Solution {
  merge = function (A, B) {
    let i = 0,
      j = 0;
    while (i < A.length && j < B.length) {
      if (A[i] <= B[j]) {
        i++;
      } else {
        A.splice(i, 0, B[j]);
        j++;
      }
    }
    while (j < B.length) {
      A.push(B[j]);
      j++;
    }
    return A;
  };
}


let res = new Solution();
let A = [1, 5, 8], B = [6, 9]
console.log(A)
console.log(res.merge(A, B));
console.log(A)



// For Java solution refer to the below code

// public class Solution {
// 	public void merge(ArrayList<Integer> a, ArrayList<Integer> b) {
// 	    int i =0;
//         int j =0 ;
//         while(i<a.size()&&j<b.size()){
//             if(a.get(i)>=b.get(j)){
//                 a.add(i,b.get(j));
//                 j++;
//             }
//             else if(a.get(i)<b.get(j)){
//                 i++;
//             }
//         }
//         if(j<b.size()){
//             while(j<b.size()){
//                 a.add(b.get(j));
//                 j++;
//             }
//         }
// 	}
// }