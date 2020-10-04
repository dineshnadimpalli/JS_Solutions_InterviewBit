// Problem link https://www.interviewbit.com/problems/remove-element-from-array/

// Note: The problem is not currently available in Javascript to solve but the below logic will help solve it


class Solution {
    removeElement = function (A, B) {
        let i=0, j=0;
        while(i<A.length && j<A.length){
            if(A[j]==B){
                j++;
            }else{
                A.splice(i, 1, A[j])
                i++;
                j++;
            }
        }
        for(let k=A.length-1;k>=i;k--){
            A.pop(A.length-1);
        }
        return A.length;
    }
}


let res = new Solution();
let A = [4, 1, 1, 2, 1, 3], B = 1
console.log(A)
console.log(res.removeElement(A, B))
console.log(A)


// For Java solution refer to the below code

// public class Solution {
//     public int removeElement(ArrayList<Integer> a, int b) {
//         int i=0, j=0;
//         while(i<a.size() && j<a.size()){
//             if(a.get(j).equals(b)){
//                 j++;
//             }else{
//                 a.set(i, a.get(j));
//                 i++;
//                 j++;
//             }
//         }
//         for(int k=a.size()-1;k>=i;k--){
//             a.remove(a.size()-1);
//         }
//         return a.size();
//     }
// }
