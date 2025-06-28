import { Router } from "express";
import { GET } from "./get.js";
import { POST } from "./post.js";

const jobsRouter = Router();

jobsRouter.get("/", GET);
jobsRouter.post("/", POST);
// jobsRouter.put("/", PUT);
// jobsRouter.delete("/", DELETE);

export { jobsRouter }
