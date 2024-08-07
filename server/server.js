const io = require("socket.io")(3001, {
  cors: {
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("Connection established");
  socket.on("get-document", (documentId) => {
    const data = "";
    socket.join(documentId);
    socket.emit("load-document", data);
    socket.on("send-changes", (changes) => {
      socket.broadcast.to(documentId).emit("receive-changes", changes);
    });
  });
});
