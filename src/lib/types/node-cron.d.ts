import 'node-cron';

declare module 'node-cron' {
  interface ScheduledTask {
    cronExpression: string;
    stateMachine: {
      state: string;
    };
  }
}
