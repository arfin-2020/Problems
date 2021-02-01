// var fibo = [0,1];
// for(var i=2;i<=10;i++){
//     fibo[i]=fibo[i-1]+fibo[i-2];
// }
// console.log(fibo);

// function fibonacci(n) {
//   fibo = [0, 1];
//   for (var i = 2; i <= n; i++) {
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
//   }
//   return fibo;
// }
// result = fibonacci(10);
// console.log(result);

// //Third way

// function fibonacci(num) {
//   var fibo = [0, 1];
//   for (var i = 2; i <= num; i++) {
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
//   }
//   return fibo;
// }
// result = fibonacci(10);
// console.log(result);

function fibonacci(num){
    var fibo =[0,1];
    for(i=2;i<=num;i++){
        var nexfibo = fibo[i-1] +fibo[i-2];
        fibo.push(nexfibo);
    }
    return fibo;
}
result = fibonacci(10);
console.log(result);
