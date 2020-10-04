// Problem link https://www.interviewbit.com/problems/counting-subarrays/

class Solution {
    solve = function(A, B){
        let res = 0
        if(A.length<1)  return 0
        let sum = A[0], i =0, j=0
        while(j<A.length && i<A.length){
            if(sum<B){
                j++
                // we add (j-i) because when we add an element it adds j-i (Note: if j>i) subarrays to the existing subarrays
                res += Math.max(0, j-i)
                sum += A[j]
            }else{
                sum -= A[i]
                i++
            }
        }
        return res
    }
}

let res = new Solution();
let A = [1, 11, 2, 3, 15]
B = 10
console.log(res.solve(A, B));   // 4

let C = [2, 5, 6]
D = 10
console.log(res.solve(C, D));   // 4