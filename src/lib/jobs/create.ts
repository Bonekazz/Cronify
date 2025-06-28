import cron from "node-cron";
import { IMJob, IMJobs } from "./index.js";

type CreateJob = Omit<IMJob, "task"> & { schedule: string };

export async function createJob(data: CreateJob) {

  const { id, label, schedule, endpoint } = data;

  if (IMJobs.has(id)) return { error: "id conflict." };
  
  const task  = cron.schedule(schedule,() => {
    console.log(`[ ${label} ] Trigerred!`);

  }, { noOverlap: true});

  IMJobs.set(data.id, {
    id,
    label,
    endpoint,
    task,
  });

  const job = {
    id, label, endpoint, 
    status: await task.getStatus(),
  }

  return { success: "cron-created!", job};
}
