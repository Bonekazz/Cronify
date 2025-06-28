import { describe, it, expect, beforeEach } from "vitest";
import { Jobs } from "../index.js";
import { createJob } from "../create.js";
import { deleteJob } from "../delete.js";

describe("delele job", () => {
  beforeEach(() => {
    Jobs.clear(); // clean state before each test
  });

  it("should delete a Job by it's id;", async () => {
    createJob({
      id: "job1",
      schedule: "* * * * *",
      endpoint: "http://example.com/run"
    });

    const result = await deleteJob("job1");
    expect(result.error).toBe(undefined);
    expect(!!result.success).toBe(true);
  });
  
});
