import express from "express";
import { UserRequestInfo } from "../../types/userRequest";
import { AuthMiddleware } from "../../middleware/auth.middleware";
import { Response } from "express";
import * as UserController from "../controllers/user/user.controller";

const authRouter = express.Router();

authRouter.post("/register", UserController.register);
authRouter.post("/login", UserController.login);
authRouter.get(
  "/myPage",
  AuthMiddleware,
  (req: UserRequestInfo, res: Response) => {
    res.send("This is a protected route");
  }
);

authRouter.get(
  "/status",
  AuthMiddleware,
  (req: UserRequestInfo, res: Response) => {
    if (req.user) {
      res.status(200).json({ isAuthenticated: true, user: req.user });
    } else {
      res.status(401).json({ isAuthenticated: false });
    }
  }
);

export default authRouter;
