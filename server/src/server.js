import createApp from "./app.js";

// server instance
let server;
let PORT = process.env.PORT || 4000;

// STARTSERVER
const startServer = async () => {
  // Create app
  const app = createApp();
  // Start HTTP server
  server = app.listen(PORT, () => {
    console.log(
      `TARTIB API is running in ${process.env.NODE_ENV || "development"} mode`
    );
    console.log(`server running on port: ${PORT}`);
    console.log(server.address());
  });
};

export default startServer;
