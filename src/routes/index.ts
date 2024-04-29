import express from "express";
import petRouter from "../routes/petRouter";
import adopterRouter from "../routes/adopterRoute";
const router = (app: express.Router) => {
  app.use("/pets", petRouter);
  app.use("/adopters", adopterRouter); 
};
export default router;
