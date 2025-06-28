import { describe, it, expect, beforeEach } from "vitest";
import { Jobs } from "../index.js";
import { createJob, JobData } from "../create.js";
import { readJob } from "../read.js";

describe("read job", () => {
  beforeEach(() => {
    Jobs.clear(); // clean state before each test
  });

  it("should return a job by it's id.", async () => {
    createJob({
      id: "job1",
      schedule: "* * * * *",
      endpoint: "http://example.com/run"
    });
    
    const foundJob = await readJob("job1");
    expect(!!foundJob).toBe(true);
  });

  it("should return 'undefined' if id is not found.", async () => {
    const foundJob = await readJob("job1");
    expect(foundJob).toBe(undefined);
  });

});
