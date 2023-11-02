const net = require("net");

const server = net.createServer((socket) => {
  console.log(
    "New client connected:",
    socket.remoteAddress + ":" + socket.remotePort
  );

  socket.on("data", (data) => {
    console.log("Received data from client:", data.toString());
    socket.write("Server: Message received - " + data.toString());
  });

  socket.on("end", () => {
    console.log("Client disconnected");
  });

  socket.on("error", (err) => {
    console.error("Error:", err);
  });

  socket.write("Server: Welcome to the server!\n");
});

const PORT = 9000;
server.listen(PORT, () => {
  console.log("Server listening on port:", PORT);
});
