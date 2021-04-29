let n = 845689;
let flag = "No";
while (n > 0) {
  r = n % 10;
  if (r == 1) {
    flag = "Yes";
    break;
  }
  n = (n - (n % 10)) / 10;
}
console.log(flag);
