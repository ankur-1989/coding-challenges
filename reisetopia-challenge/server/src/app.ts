import express, { Express } from "express";
import cors from "cors";
import { router } from "./routes";
const PORT = process.env.PORT || 3000;

const app: Express = express();

app.use(cors());
app.use("/api/hotels", router);
app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
