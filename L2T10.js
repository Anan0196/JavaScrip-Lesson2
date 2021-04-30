// let n = 9;

// // function returns the Fibonacci number
// function fib(n) {
//   if (n <= 1) return n;
//   return fib(n - 1) + fib(n - 2);
// }

// //function call
// // console.log(fib(n));

let num = 15;
let arr = [0, 1];

for (i = 2; i <= num; i++) {
  arr.push(arr[i - 1] + arr[i - 2]);
}

console.log(arr);
