const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

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

function performCalculation() {
  rl.question(
    "Enter the operation (add, subtract, multiply, divide, or exit to quit): ",
    (operation) => {
      if (operation === "exit") {
        rl.close();
        return;
      }

      rl.question("Enter the first number: ", (num1) => {
        rl.question("Enter the second number: ", (num2) => {
          try {
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);

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
                console.log(
                  "Invalid operation. Use add, subtract, multiply, divide, or exit."
                );
            }
          } catch (error) {
            console.error("Error:", error.message);
          }

          performCalculation();
        });
      });
    }
  );
}

performCalculation();
