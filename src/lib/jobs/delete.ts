import { CronList } from "./index.js";

export async function deleteCron(id: string) {
  const foundJob = CronList.get(id);
  if (!foundJob) return { error: "not-found" };
  
  await foundJob.task.stop();
  await foundJob.task.destroy();
  CronList.delete(id);

  return { success: "deleted." };
} 
