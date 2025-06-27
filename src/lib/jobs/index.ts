import cron from "node-cron";

type JobsMap = Map<string, cron.ScheduledTask>;

export const Jobs: JobsMap = new Map();
