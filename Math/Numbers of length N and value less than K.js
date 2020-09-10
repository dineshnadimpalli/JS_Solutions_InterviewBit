// Problem link https://www.interviewbit.com/problems/numbers-of-length-n-and-value-less-than-k/

class Solution {
    solve = function(A, B, C){
        let arr = String(C).split('')
        let max = 10
        for(let i=0;i<arr.length;i++){
            arr[i] = parseInt(arr[i])
        }
        let Alen = A.length
        let CLen = arr.length
        if(B>CLen || B==0) return 0
        else if(B<CLen){
            if(A[0]==0 && B!==1){
                return (Alen-1)*Math.pow(Alen, B-1)
            }else{
                return Math.pow(Alen, B)
            }
        }else{
            let dp = new Array(CLen+1).fill(0)
            let lower = new Array(max+1).fill(0)
            
            for(let i=0;i<Alen;i++){
                lower[A[i]+1] = 1
            }
            for(let i=1;i<=max;i++){
                lower[i] += lower[i-1]
            }
            
            let flag = true
            dp[0] = 0
            let dn
            for (let i = 1; i <= B; i++){ 
                dn = lower[arr[i - 1]]; 
                dp[i] = dp[i - 1] * Alen; 
      
                // For first index we can't use 0 
                if (i == 1 && A[0] == 0 && B != 1) 
                    dn = dn - 1; 
      
                // Whether (i-1) digit of generated number 
                // can be equal to (i - 1) digit of C 
                if (flag){
                    dp[i] += dn; 
                    // Is arr[i - 1] present in A ? 
                    flag = flag && (lower[arr[i - 1] + 1] == lower[arr[i - 1]] + 1)
                }
      
            } 
            return dp[B];
        }
    }
}


let res = new Solution();
let A = [0, 1, 2, 5];
let B = 2;  
let C = 21  
console.log(res.solve(A, B, C));
