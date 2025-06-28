import cron from "node-cron";

// Only necessary fields
export interface IMJob {
  id: string,
  label: string,
  endpoint: string,
  task: cron.ScheduledTask;
}

type IMJobMap = Map<string, IMJob>;

export const IMJobs: IMJobMap = new Map();
