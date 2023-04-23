// Karatsuba multiplication
const isNumDigitsOdd = (number) => String(number).length % 2 !== 0;

const split = (number, expCount) => {
  const divisor = 10 ** expCount;
  const firstHalf = Math.trunc(number / divisor);
  const secondHalf = number % divisor;

  return [firstHalf, secondHalf];
};

const multiply = (x, y) => {
  if (x < 10 && y < 10) {
    return x * y;
  }

  const n = Math.max(String(x).length, String(y).length);
  const nHalf = Math.round(n / 2);

  const [a, b] = split(x, nHalf);
  const [c, d] = split(y, nHalf);


  const ac = multiply(a, c);
  const bd = multiply(b, d);
  const magic = multiply(b + a, d + c) - ac - bd;

  return ac * 10 ** n + magic * 10 ** nHalf + bd;
};

function karatsubaIntMultiply(x, y) {
  let base = 0;
  let normalizedX = x;
  let normalizedY = y;
  if (isNumDigitsOdd(x)) {
    base += 1;
    normalizedX = x * 10;
  }

  if (isNumDigitsOdd(y)) {
    base += 1;
    normalizedY = y * 10;
  }
  const divisor = !base ? 1 : 10 ** base;
  const result = multiply(normalizedX, normalizedY) / divisor;
  console.log(`Karatsuba multiplication result: ${result}`);
  return result;
};

module.exports = karatsubaIntMultiply;
karatsubaIntMultiply(222, 333);

