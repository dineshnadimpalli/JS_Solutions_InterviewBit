// Problem link https://www.interviewbit.com/problems/max-non-negative-subarray/

class Solution {
    maxset = function (A) {
        let len = A.length
        let maxSum = Number.MIN_SAFE_INTEGER
        let startIndex = -1, endIndex = -1
        let tempStartIndex = 0, tempEndIndex = 0
        let tmpSum = 0
        for(let i=0;i<len;i++){
            if(A[i]<0){
                tempStartIndex = i+1
                tempEndIndex = i+1
                tmpSum = 0
            }else{
                tmpSum += A[i]
                if(
                    (tmpSum>maxSum) ||
                    (
                        tmpSum==maxSum && (tempEndIndex-tempStartIndex > endIndex-startIndex)
                    )
                ){
                    startIndex = tempStartIndex
                    endIndex = i
                    maxSum = tmpSum
                }
                tempEndIndex++
            }
        }
        return A.slice(startIndex, endIndex+1)
    }
}

let res = new Solution()
let A = [1, 2, 5, -7, 2, 3]
console.log(res.maxset(A))
