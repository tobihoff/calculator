import { sum, sub } from "./operators";

test("adds 1 + 2 equal 3", function() {
  const result = sum(1, 2);
  expect(result).toBe(3);
});

test("adds 1 - 2 equal -1", function() {
  const result = sub(1, 2);
  expect(result).toBe(-1);
});
