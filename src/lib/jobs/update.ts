import { createJob, JobData } from "./create.js";
import { Jobs } from "./index.js";

export async function updateJob(data: JobData,  status?: string) {
  // TODO. validate parameter

  const foundJob = Jobs.get(data.id);
  if (!foundJob) return { error: "id not found." };

  if (!status && !data) return { error: "Should update status or data, none was provided" };

  if (status) {
    if (status === "enabled") await foundJob.start();
    await foundJob.stop();

    return { success: "Job status updated."};
  }
  
  await foundJob.destroy()
  Jobs.delete(data.id);

  return createJob(data);
  
}
