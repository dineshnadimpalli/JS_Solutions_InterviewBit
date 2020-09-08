// Problem link https://www.interviewbit.com/problems/repeat-and-missing-number-array/

class Solution {

    // approach with sort
    repeatedNumber = function(A){
        A.sort((a,b)=>a-b)
        let rep, mis, len = A.length, sum=0, actSum =0
        for(let i=0;i<len;i++){
            sum += A[i]
        }
        for(let i=0;i<len;i++){
            actSum += i+1
        }
        let diff = Math.abs(actSum-sum)
        
        for(let i=0;i<len;i++){
            if(A[i]===A[i+1]){
                rep = A[i]
                break
            }
        }
        if(sum>actSum){
            mis = rep-diff
        }else{
            mis = rep+diff
        }
        return [rep, mis]
    }

    // approach without sort
    repeatedNumberWithIndexes = function(A){
        let res=[], len = A.length
        for(let i=0;i<len;i++){
            let abs = Math.abs(A[i])
            if(A[abs-1]>0){
                A[abs-1] = -A[abs-1]
            }else{
                res.push(Math.abs(A[abs-1]))
            }
        }

        for(let i=0;i<len;i++){
            if(A[i]>0){
                res.push(++i)
            }
        }
        return res
    }

}

let res = new Solution()
let A = [3, 1, 2, 5, 3] 
console.log(res.repeatedNumber(A))
console.log(res.repeatedNumberWithIndexes(A))