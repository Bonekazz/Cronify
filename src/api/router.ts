import { Router } from "express";
import { jobsRouter } from "./jobs/router.js";

const sourceRouter = Router();

sourceRouter.use("/jobs", jobsRouter);

export { sourceRouter };
