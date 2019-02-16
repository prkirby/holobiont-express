const socketio = require("socket.io");
let io;

module.exports.listen = function(server) {
  io = socketio.listen(server);

  io.on("connection", () => {
    console.log("connected!");
  });
};

module.exports.stop = function(data) {
  console.log("sending some data");
  console.log(data);
  io.emit("stop", { data: data });
};
