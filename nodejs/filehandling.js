const fs = require("fs");

const filePath = "sample.txt";

function getCurrentTimestamp() {
  const now = new Date();
  const timestamp = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
  return timestamp;
}

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  const timestamp = getCurrentTimestamp();
  const message = `${timestamp}: This is a new message.`;

  const modifiedContent = data + "\n" + message;

  fs.writeFile(filePath, modifiedContent, (err) => {
    if (err) {
      console.error("Error writing to the file:", err);
      return;
    }
  });
});


// const fs = require('fs');

// fs.writeFile('example.txt', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });

// // b. Read the data from file
// fs.readFile('example.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading file:', err);
//     return;
//   }
//   console.log('Data read from file:', data);
// });

// // c. Write the data to a file
// fs.appendFile('example.txt', '\nNew content appended!', err => {
//   if (err) {
//     console.error('Error writing to file:', err);
//     return;
//   }
//   console.log('Data written to file!');
// });

// // d. Rename a file
// fs.rename('example.txt', 'noob.txt', err => {
//   if (err) {
//     console.error('Error renaming file:', err);
//     return;
//   }
//   console.log('File renamed successfully!');
// });

// // e. Delete a file
// fs.unlink('noob.txt', err => {
//   if (err) {
//     console.error('Error deleting file:', err);
//     return;
//   }
//   console.log('File deleted successfully!');
// });






