import { createCron, CronFormData } from "./create.js";
import { CronList } from "./index.js";

export async function updateCron(data: CronFormData) {
  const foundCron = CronList.get(data.id);
  if (!foundCron) return { error: "not-found." };

  await foundCron.task.destroy()
  CronList.delete(data.id);

  const updatedCron = createCron(data);
  return { success: "cron-updated.", cronjob: updatedCron.cronjob };
}

type CronStatus = "enabled" | "disabled";
export async function updateCronStatus(id: string, status: CronStatus) {

  const foundCron = CronList.get(id);
  if (!foundCron) return { error: "not-found." };

  status === "enabled" ? await foundCron.task.start() : await foundCron.task.stop();
  const updatedStatus = await foundCron.task.getStatus();

  return { success: "status-updated.", status: updatedStatus};
}
