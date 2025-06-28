import { Jobs } from "./index.js";
import cron from "node-cron";

export interface JobData {
  id: string,
  schedule: string,
  endpoint: string,
}

export function createJob(data: JobData) {
  if (Jobs.has(data.id)) return { error: "id conflict." };
  
  // validate data fields
  
  const newJob = cron.createTask(data.schedule, async () => {
    console.log("task info: ", data);
  }, { noOverlap: true });

  Jobs.set(data.id, newJob);

  return { success: "Job created!", newJob };
}
