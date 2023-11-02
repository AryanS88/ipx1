const net = require("net");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const client = new net.Socket();

client.connect(9000, "localhost", () => {
  console.log("Connected to the server");

  client.on("data", (data) => {
    console.log("Received data from server:", data.toString());
  });

  client.on("end", () => {
    console.log("Connection to the server closed");
  });

  rl.on("line", (input) => {
    client.write("Client: " + input);
  });
});
