let arr = [125, 35, 20];
for (i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i] + "even");
  } else if (arr[i] % 2 !== 0) {
    console.log(arr[i] + "odd");
  }
}
