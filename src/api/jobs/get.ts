import { getAllInMemoryJobs } from "@/lib/Jobs/read.js";
import { Request, Response } from "express";

export async function GET(req: Request, res: Response) {
  try {
    // (1) get in memory jobs
    const jobs = await getAllInMemoryJobs();

    // (2) return
    res.status(200).json(jobs);
  } catch (err) {

    res.status(500).json({ error: "internal server error." });
  }
}
