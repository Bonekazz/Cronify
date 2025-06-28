import express from "express";
import { sourceRouter } from "./api/router.js";
import { syncJobsFromDB } from "./lib/Jobs/sync.js";

const api = express();
const PORT = 5000;

api.use(express.json());
api.use("/api", sourceRouter);

api.listen(PORT, async () => {
  console.log(`[API] Running at http://localhost:${PORT}`);
  await syncJobsFromDB();
});
