const socketio = require("socket.io");

class Socket {
  constructor() {
    this.io;
  }

  listen(server) {
    this.io = socketio.listen(server);

    this.io.on("connection", () => {
      console.log("A client connected");
    });
  }

  stop() {
    this.io.emit("stop");
  }

  start() {
    this.io.emit("start");
  }

  reset() {
    this.io.emit("reset");
  }
}

// const socket =

module.exports = new Socket();
