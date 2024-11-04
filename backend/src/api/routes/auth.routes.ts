import { Router } from "express";
import { UserRequestInfo } from "../../types/userRequest";
import { AuthMiddleware } from "../../middleware/auth.middleware";
import { Response } from "express";
import * as UserController from "../controllers/user/user.controller";
import { makeInvoker } from "awilix-express";

const authRouter = Router();
const authController = makeInvoker(UserController.UserController);


authRouter.post("/register", authController("register"));
authRouter.post("/login", authController("login"));
authRouter.post("/status", authController("status"));
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
