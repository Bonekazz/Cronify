import { createJob } from "@/lib/Jobs/create.js";
import { prisma } from "@/lib/prisma.js";
import { Request, Response } from "express";

export async function POST(req: Request, res: Response) {
  try {
    // (1) TODO. validate fields
    // const body = req.body;
    
    // (1) TODO. create a job in database 
    const jobInDB = await prisma.job.create({
      data: {
        label: "job1",
        schedule: "* * * * *",
        endpoint: "http://eae.com"
      }
    });

    const { id, label, schedule, endpoint } = jobInDB;

    // (2) TODO. create a job in memory 
    const {job} = await createJob({
      id, label, schedule, endpoint,
    })

    // (3) return in memory job
    res.status(200).json({success: "job created!", job});

  } catch (err) {
    console.error("Error: ", err);
    res.status(500).json({ error: "internal server error." });
  }
}
