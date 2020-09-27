// Problem link https://www.interviewbit.com/problems/remove-duplicates-from-sorted-array-ii/

// Note: The problem is not currently available in Javascript to solve but the below logic will help solve it


class Solution {
    removeDuplicates = function (A){
        let i=0, j=1;
        let count = 0;
        while(i<A.length && j<A.length){
            if(A[i]==A[j]){
                ++count;
                if(count==1){
                    A.splice(i+1, 0, A[j])
                    i++;
                    j++;
                }else{
                    j++;
                }
            }else{
                A.splice(i+1, 0, A[j])
                count = 0;
                i++;
                j++;
            }
        }
        for(let k=A.length-1;k>i;k--){
            A.pop()
        }
        return A.length;
    }
}



let res = new Solution();
let A = [1, 1, 1, 2, 2, 2, 3, 3]
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
//         int count = 0;
//         while(i<a.size() && j<a.size()){
//             if(a.get(i).equals(a.get(j))){
//                 ++count;
//                 if(count==1){
//                     a.set(i+1, a.get(j));
//                     i++;
//                     j++;
//                 }else{
//                     j++;
//                 }
//             }else{
//                 a.set(i+1, a.get(j));
//                 count = 0;
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
