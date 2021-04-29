let Order = [45, 26, 78, -23, -456, 0];
function isBigger(a, b) {
  return a - b;
}
let AscendingOrder = Order.sort((a, b) => a - b);
console.log(AscendingOrder);
