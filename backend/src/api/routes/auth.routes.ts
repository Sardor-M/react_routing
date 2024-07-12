import express from "express";
import { UserController } from "../controllers/user.controller";
import { Request, Response } from "express";
import { checkJwt } from "../../middleware/checkJwt";

const router = express.Router();

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/myPage", [checkJwt], (req: Request, res: Response) => {
  res.send("This is a protected route");
});

export default router;
