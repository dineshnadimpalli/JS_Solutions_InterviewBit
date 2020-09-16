// Problem link https://www.interviewbit.com/problems/integer-to-roman/

class Solution {
    intToRoman = function(A){
        let M = ['', 'M', 'MM', 'MMM']
        let C = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
        let X = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']
        let I = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
        
        let res = ''
        A = A.toString()
        
        for(let i=A.length-1;i>=0;i--){
            let tmp = A.length-1-i
            // console.log(tmp)
            if(tmp==0){
                res = I[parseInt(A[i])] + res
            }
            if(tmp==1){
                res = X[parseInt(A[i])] + res
            }
            if(tmp==2){
                res = C[parseInt(A[i])] + res
            }
            if(tmp==3){
                res = M[parseInt(A[i])] + res
            }
        }
        
        return res
    }
}

// Input 1:
//     A = 5
// Output 1:
//     "V"

// Input 2:
//     A = 14
// Output 2:
//     "XIV"

let res = new Solution();
let A = 14
console.log(res.intToRoman(A));  // XIV