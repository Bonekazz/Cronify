import { Jobs } from "../index.js";

export function readJob(id?: string) {
  if (!id) return Jobs.values();
  const foundJob = Jobs.get(id);

  if (!foundJob) return null;

  return foundJob;
}
