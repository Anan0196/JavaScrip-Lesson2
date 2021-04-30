let number = 1033;
let string = number.toString().split("");
let array = [];

// for (let i = 0; i < string.length; i++) {
//   array.push(string[i]);
//   console.log(array);
//   if ((array[i] * array[i + 1]) % (array[i] + array[i + 1]) == 0) {
//     console.log(`vrodi`);
//   } else {
//     console.log(array[1] * array[2]);
//   }
// }

let digit = 1;

for (let i = 0; i < string.length; i++) {
  if (string[i] === 0) {
    console.log(`can't calculate`);
  } else {
    digit *= string[i];
  }
}

let sum = 0;

for (let i = 0; i < string.length; i++) {
  sum += +string[i];
}

if (digit % sum === 0) {
  console.log(`Quotient is ${digit / sum}`);
} else {
  a = digit % sum;
  console.log(`Reminder is ${a}`);
}
