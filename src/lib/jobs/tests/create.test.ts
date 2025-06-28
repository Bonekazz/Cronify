import { describe, it, expect, beforeEach } from "vitest";
import { Jobs } from "../index.js";
import { createJob, JobData } from "../create.js";

describe("create job", () => {
  beforeEach(() => {
    Jobs.clear(); // clean state before each test
  });

  it("should create a new job", () => {
    const job: JobData = {
      id: "job1",
      schedule: "* * * * *",
      endpoint: "http://example.com/run"
    };

    const result = createJob(job);
    expect(!!result.success).toBe(true);
    expect(Jobs.has("job1")).toBe(true);
  });

  it("should not create duplicate jobs", () => {
    const job: JobData = {
      id: "job1",
      schedule: "* * * * *",
      endpoint: "http://example.com/run"
    };

    createJob(job);
    const result = createJob(job);
    expect(!!result.error).toBe(true);
  });

  it("should create a job with status 'stopped'.", () => {
    const job: JobData = {
      id: "job2",
      schedule: "*/5 * * * * *",
      endpoint: "http://example.com/5sec"
    };

    const result = createJob(job);
    expect(!!result.success).toBe(true);
    expect(Jobs.get("job2")?.getStatus()).toBe("stopped");
  });
});
