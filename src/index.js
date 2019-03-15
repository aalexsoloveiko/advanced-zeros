module.exports = function getZerosCount(number, base) {
  let newZeros = Number.MAX_VALUE;
  let newBase = base;
  for (let i = 2; i <= base; i++) {
    if (newBase % i === 0) {
      let divider = 0;
      while (newBase % i === 0) {
        newBase = newBase / i;
        divider++;
      }
      let dividend = 0;
      let z = Math.floor(number / i);
      while (z > 0) {
        dividend += z;
        z = Math.floor(z / i);
      }
     newZeros = Math.min (newZeros, Math.floor(dividend / divider))
    }
  }
  return newZeros;
};
