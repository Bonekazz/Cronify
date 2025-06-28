import { Jobs } from "./index.js";

export async function deleteJob(id: string) {
  const foundJob = Jobs.get(id);
  if (!foundJob) return { error: "id not found" };
  
  await foundJob.destroy();
  Jobs.delete(id);

  return { success: "Job deleted." };
} 
