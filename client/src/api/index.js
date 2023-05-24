const socket = new WebSocket("ws://localhost:9000/ws");

export const connect = (cb) => {
  console.log("Connecting...");

  socket.onopen = () => {
    console.log("successfully connected");
  };

  socket.onmessage = (msg) => {
    console.log("Message from WebSocket:", msg);
    cb(msg);
  };

  socket.onclose = (event) => {
    console.log("socket closed connectio:n", event);
  };

  socket.onerror = (error) => {
    console.log("socket error", error);
  };
};

export const sendMsg = (msg) => {
  console.log("sending msg:", msg);
  socket.send(msg);
};
