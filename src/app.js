import express from "express";
import cors from "cors";
import apiRoutes from "./routes/apiRoutes.js";

const app = express();

// Global Middleware
app.use(cors());
app.use(express.json());

// Base Health Check Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Cymor Movie Hub API is operational",
  });
});

// API Routes Entry
app.use("/api", apiRoutes);

export default app;
