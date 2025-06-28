import { Jobs } from "./index.js";

export async function readJob(id: string) {
  // TODO. validate fields
  
  const foundJob = Jobs.get(id);

  if (!foundJob) return undefined;

  const status = await foundJob.getStatus();

  return { ...foundJob, status };
}
