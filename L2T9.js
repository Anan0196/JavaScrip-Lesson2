let n = 121;
// let f = Math.sqrt(n);
for (let i = 2; i <= Math.sqrt(n); i++)
  if (n % i === 0) {
    console.log("Prime");
    break;
  } else {
    console.log("not Prime");
  }

console.log("Erevi");
