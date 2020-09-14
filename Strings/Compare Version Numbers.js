// Problem link https://www.interviewbit.com/problems/compare-version-numbers/

class Solution {
    compareVersion = function(A, B){
        let arrA = A.split('.')
        let arrB = B.split('.')
        let m = arrA.length
        let n = arrB.length
        let i =0
        let j=0
        while(i<m && j<n){
            if(Number(arrA[i])>Number(arrB[j])){
                return 1
            }else if(Number(arrA[i])<Number(arrB[j])){
                return -1
            }else{
                i++
                j++
            }
        }
        if(i>=m){
            if(arrB[j]>0){
                return -1
            }
        }
        if(j>=m){
            if(arrA[i]>0){
                return 1
            }
        }
        return 0
    }
}


let res = new Solution();
let A = '1.01', B = '1.11'
let C = '1.0', D = '1'
console.log(res.compareVersion(A, B));
console.log(res.compareVersion(C, D));
