import { Router, Request, Response, NextFunction } from "express";
import throwErr from "../../utils/errHandler";

const router = Router();

// ANCHOR: Route Handling
router.use("/test", (req: Request, res: Response, next: NextFunction) => {
  res.send("test");
});

// ANCHOR: 404 Error Handling
router.all("*", (req: Request, res: Response, next: NextFunction) => {
  throwErr(404, "Route not found in root router of v1", next);
});

export default router;
