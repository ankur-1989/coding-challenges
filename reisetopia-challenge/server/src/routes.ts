import express, { Router, Request, Response } from "express";
import { getHotels } from "./controller/hotelController";
const router: Router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const allHotels = await getHotels();
    res.json(allHotels);
  } catch (error: any) {
    res
      .status(error?.status || 500)
      .json({ status: "Failed", data: { error: error?.message || error } });
  }
});

export { router };
