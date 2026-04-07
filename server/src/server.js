import createApp from "./app.js";
import { env } from "./config/env.js";

// server instance
let server;

// STARTSERVER
const startServer = async () => {
  // Create app
  const app = createApp();
  // Start HTTP server
  server = app.listen(env.PORT, () => {
    console.log(
      `TARTIB API is running in ${process.env.NODE_ENV || "development"} mode`
    );
    console.log(`server running on port: ${env.PORT}`);
    console.log(server.address());
  });
};

export default startServer;
