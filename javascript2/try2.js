function fib(N){
    if(N=== 0) return 0;
    if (N===1 | N===2) return 1;
    let arr = [0,1];
    if(N > 2) {
        for(let i = 0;i<N - 1;i++){
            let res = arr[i] + arr[i+1];
            arr.push(res);
        }
        return arr[N-1];
    }
}

let N = 3 ; 
console.log(fib(N));
