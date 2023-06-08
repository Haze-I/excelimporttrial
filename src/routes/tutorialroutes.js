import { Router } from "express";
const router = Router();
import { upload as _upload, getTutorials } from "../controllers/tutorials/excelcontroller";
import { single } from "../middleware/upload"

let routes = (app) => {
  router.post("/upload", single("file"), _upload);
  router.get("/tutorials", getTutorials);

  app.use("/api/excel", router);
};

export default routes;