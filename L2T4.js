let arr = [21, 35, 13, 420, 24];
for (i = 0; i < arr.length; i++) {
  if (arr[i] % 3 === 0 && arr[i] % 7 === 0 && arr[i] % 5 === 0) {
    console.log(arr[i] + " is a multiple of all");
  } else if (arr[i] % 3 === 0 && arr[i] % 7 === 0) {
    console.log(arr[i] + " is a multiple of 3 and 7");
  } else if (arr[i] % 3 === 0) {
    console.log(arr[i] + " is a multiple of 3");
  } else if (arr[i] % 3 !== 0 && arr[i] % 7 !== 0 && arr[i] % 5 !== 0) {
    console.log(arr[i] + " is not a multiple of 3,5 and 7");
  } else if (arr[i] % 3 !== 0 && arr[i] % 7 === 0 && arr[i] % 5 === 0) {
    console.log(arr[i] + " is a multiple of 5 and 7");
  }
}
