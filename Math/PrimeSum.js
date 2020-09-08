// Problem link https://www.interviewbit.com/problems/prime-sum/

class Solution {
    primesum = function(A){
        let primes = this.sieve(A)
        // console.log(primes)
        let res = []
        for(let i=0;i<primes.length;i++){
            if(primes[i] && primes[A-i]){
                res.push([i, A-i])
                break
            }
        }
        return res[0]
    }
    
    sieve = function(A){
        let primes = new Array(A+1).fill(1)
        primes[0] = 0
        primes[1] = 0
        for(let i=2;i<=Math.sqrt(A);i++){
            if(primes[i]==1){
                for(let j=2;i*j<=A;j++){
                    primes[i*j] = 0
                }
            }
        }
        
        return primes
    }
}


let res = new Solution();
let A = 7;
console.log(res.primesum(A));
