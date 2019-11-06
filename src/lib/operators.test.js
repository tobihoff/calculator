import { sum, sub, countDigits } from "./operators";

test("adds 1 + 2 equal 3", function() {
  const result = sum(1, 2);
  expect(result).toBe(3);
});

test("adds 1 - 2 equal -1", function() {
  const result = sub(1, 2);
  expect(result).toBe(-1);
});

test("count digits of 213", function() {
  const result = countDigits(213);
  expect(result).toBe(3);
});

test("count digits of 3129823", function() {
  const result = countDigits(3129823);
  expect(result).toBe(7);
});

test("count digits of -231", function() {
  const result = countDigits(-231);
  expect(result).toBe(4);
});

test("count digits of 0", function() {
  const result = countDigits(0);
  expect(result).toBe(1);
});
