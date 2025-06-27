import express from "express";
import { srcRouter } from "./routes/index.js";

const api = express();
const PORT = 5000;

api.use(express.json());
api.use("/api", srcRouter);

api.listen(PORT, async () => {
  console.log(`[API] Running at http://localhost:${PORT}`);
  // await syncJobsFromDB();
});
