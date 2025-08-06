import Calculator from "./calculator.js";

describe("Calculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test("should add two numbers correctly", () => {
    const result = calculator.add(2, 3);
    expect(result).toBe(5);
  });

  



  test("should multiply two numbers correctly", () => {
    const result = calculator.multiply(4, 5);
    expect(result).toBe(20);
  });

  test("should divide numbers correctly", () => {
    const result = calculator.divide(10, 2);
    
    expect(result).toBe(5);
  });

  test("should handle division by zero", () => {
    const result = calculator.divide(10, 0);
    expect(result).toBe(Infinity);
  });

  test('should subtract two numbers correctly', () => { const result = calculator.subtract(5, 3); expect(result).toBe(2); });
  test('should handle negative results', () => { const result = calculator.subtract(3, 5); expect(result).toBe(-2); });
  
});

