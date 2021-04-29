let x = 0,
  y = 5,
  z = -1;
if (x > 0 && y > 0 && z > 0) {
  console.log("signed +");
} else if (x > 0 && y < 0 && z < 0) {
  console.log("signed +");
} else if (x < 0 && y < 0 && z > 0) {
  console.log("signed +");
} else if (x < 0 && y > 0 && z < 0) {
  console.log("signed +");
} else if (x === 0 || y === 0 || z === 0) {
  console.log("note signed");
} else {
  console.log("signed -");
}
