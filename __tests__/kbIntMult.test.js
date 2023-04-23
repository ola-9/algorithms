const karatsubaIntMultiply = require('../src/kbIntMult.cjs');

https://jestjs.io/docs/api#describename-fn

describe('karatsuba multiplication', () => {
  
  test('both are even number of digits', () => {
    expect(karatsubaIntMultiply(5678, 1234)).toBe(7006652);
  });

  test('both are odd number of digits', () => {
    expect(karatsubaIntMultiply(222, 333)).toBe(73926);
  });

  test('odd and even', () => {
    expect(karatsubaIntMultiply(374, 1234)).toBe(461516);
  })
})
