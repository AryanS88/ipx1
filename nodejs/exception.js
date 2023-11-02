function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  if (y === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return x / y;
}

const operation = process.argv[2];
const num1 = parseFloat(process.argv[3]);
const num2 = parseFloat(process.argv[4]);

try {
  switch (operation) {
    case "add":
      console.log(`Result: ${add(num1, num2)}`);
      break;
    case "subtract":
      console.log(`Result: ${subtract(num1, num2)}`);
      break;
    case "multiply":
      console.log(`Result: ${multiply(num1, num2)}`);
      break;
    case "divide":
      console.log(`Result: ${divide(num1, num2)}`);
      break;
    default:
      console.log("Invalid operation. Use add, subtract, multiply, or divide.");
  }
} catch (error) {
  console.error("Error:", error.message);
}
