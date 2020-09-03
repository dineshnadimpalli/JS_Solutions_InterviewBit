// Problem link https://www.interviewbit.com/problems/spiral-order-matrix-i/

class Solution {
    spiralOrder = function (A) {
        let k = 0, l = 0
        // k is starting row index
        // l is starting column index
        let m = A.length-1, n = A[0].length-1
        // m is ending row index
        // n is ending column index
        let res = []
        while(k<=m && l<=n){
            for(let i=l;i<=n;++i){
                res.push(A[k][i])
            }
            k++
            for(let i=k;i<=m;++i){
                res.push(A[i][n])
            }
            n--
            if(k<=m){
                for(let i=n;i>=l;--i){
                    res.push(A[m][i])
                }
                m--
            }
            if(l<=n){
                for(let i=m;i>=k;--i){
                   res.push(A[i][l]) 
                }
                l++
            }
        }
        return res
    }
}

let res = new Solution()
let A = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
]
console.log(res.spiralOrder(A))
