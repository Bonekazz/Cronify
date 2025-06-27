import { describe, it, expect, beforeEach } from "vitest";
import { Jobs } from "../index.js";
import { createJob, CronJobData } from "../create/create.js";
import { readJob } from "./read.js";

describe("createJob", () => {
  beforeEach(() => {
    Jobs.clear(); // clean state before each test
  });

  it("should return a job by it's id.", () => {
    createJob({
      id: "job1",
      schedule: "* * * * *",
      endpoint: "http://example.com/run"
    });
    
    const foundJob = readJob("job1");
    expect(!!foundJob).toBe(true);
  });

});
