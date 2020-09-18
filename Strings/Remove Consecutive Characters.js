// Problem link https://www.interviewbit.com/problems/remove-consecutive-characters/

class Solution {
    solve = function(A, B){
        let res = ''
        let tmp = ''
        let i=0, j=0
        while(i<A.length && j<A.length){
            if(A[i]==A[j]){
                tmp += A[i]
                j++
            }else{
                if(tmp.length>=B){
                    let mod = tmp.length%B
                    res += tmp.substring(0, mod)
                }else{
                    res += tmp
                }
                tmp = A[j]
                i=j
                j++
            }
        }
        if(tmp.length>=B){
            let mod = tmp.length%B
            res += tmp.substring(0, mod)
        }else{
            res += tmp
        }
        return res
    }
}

let res = new Solution();
let A = "aabcd"
B = 2

let C = "aabbccd"
D = 2
console.log(res.solve(A, B)); // bcd
console.log(res.solve(C, D)); // d
