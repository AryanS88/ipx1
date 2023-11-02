const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading input.txt:", err);
    return;
  }

  data = data
    .replace(/1/g, "one")
    .replace(/2/g, "two")
    .replace(/3/g, "three")
    .replace(/4/g, "four")
    .replace(/5/g, "five")
    .replace(/6/g, "six")
    .replace(/7/g, "seven")
    .replace(/8/g, "eight")
    .replace(/9/g, "nine")
    .replace(/0/g, "zero");

  data = data.toUpperCase();

  fs.writeFile("output.txt", data, (err) => {
    if (err) {
      console.error("Error writing to output.txt:", err);
      return;
    }
    console.log("Data transformation and writing completed.");
  });
});
