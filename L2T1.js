// let arr = [125, 35, 20];
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     console.log(arr[i] + "even");
//   } else if (arr[i] % 2 !== 0) {
//     console.log(arr[i] + "odd");
//   }
// }

// const number = 32;
// if (number % 2 === 0) {
//   console.log(`Even`);
// } else {
//   console.log(`Odd`);
// }

let number = 132;
while (number > 0) {
  number -= 1;
  if (number % 2 === 0) {
    console.log(`${number} - Even`);
  } else {
    console.log(`${number} - Odd`);
  }
}
