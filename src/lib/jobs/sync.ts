import { prisma } from "../prisma.js";
import { createJob } from "./create.js";

export async function syncJobsFromDB() {
  const jobsFromDB = await prisma.job.findMany({});
  jobsFromDB.map((job) => {
    const { id, label, schedule, endpoint } = job;
    createJob({id, label, schedule, endpoint});
  });
  console.log("Jobs from DB synchronized.");
}
