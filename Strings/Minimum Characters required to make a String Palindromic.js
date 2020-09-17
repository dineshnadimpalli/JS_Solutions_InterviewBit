// Problem link https://www.interviewbit.com/problems/minimum-characters-required-to-make-a-string-palindromic/

class Solution {
    solve = function(A){
        let res = A + '$' + A.split('').reverse().join('')
        res = this.kmp(res)
        return A.length-res[res.length-1]
    }
    
    kmp= function(A){
        let j=0, i=1
        let arr = new Array(A.length)
        let len = arr.length
        arr[0] = 0
        while(i<len){
            if(A[i]==A[j]){
                arr[i] = j+1
                i++
                j++
            }else{
                if(j!=0){
                    j = arr[j-1]
                }else{
                    arr[i] = 0
                    i++
                }
            }
        }
        return arr
    }
}


// Input 1:
//     A = "ABC"
// Output 1:
//     2
//     Explanation 1:
//         Insert 'B' at beginning, string becomes: "BABC".
//         Insert 'C' at beginning, string becomes: "CBABC".

// Input 2:
//     A = "AACECAAAA"
// Output 2:
//     2
//     Explanation 2:
//         Insert 'A' at beginning, string becomes: "AAACECAAAA".
//         Insert 'A' at beginning, string becomes: "AAAACECAAAA".

let res = new Solution();
let A = "AACECAAAA";
let B = "ABCD"
console.log(res.solve(A));
console.log(res.solve(B));