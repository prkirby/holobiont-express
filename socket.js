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

  stop(data) {
    console.log("sending stop data of: " + data);
    this.io.emit("stop", { data: data });
  }

  start(data) {
    console.log("sending start data of: " + data);
    this.io.emit("start", { data: data });
  }
}

// const socket =

module.exports = new Socket();
