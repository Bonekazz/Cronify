import { IMJobs } from "./index.js"

export async function getAllInMemoryJobs() {
  const jobsArray = Array.from(IMJobs.values());
  const jobs = await Promise.all(jobsArray.map( async (job) => {
    return {
      id: job.id,
      label: job.label,
      endpoint: job.endpoint,
      status: await job.task.getStatus(),
      schedule: job.task.cronExpression,
    }
  }));
  return jobs;
}
