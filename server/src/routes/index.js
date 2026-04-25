import authRouter from "../modules/auth/auth.routes.js";

// ─── Route Handler
// registers all app routes and handles unknown routes
const routerHandler = (app) => {
  // ─── Health Check
  app.all("/", (req, res) => {
    res.send("hello from tartib server.");
  });
  app.use("/api/auth", authRouter);

  // ─── API Routes

  // ─── Unknown Route Handler
  app.use((req, res) => {
    res.status(404).json({ message: "this Router is not found!" });
  });
};

export default routerHandler;
