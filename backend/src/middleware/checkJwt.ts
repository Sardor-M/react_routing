import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  const token = <string>req.headers["authorization"];
  let jwtPayload;

  try {
    jwtPayload = jwt.verify(token, process.env.JWT_TOKEN_SECRET || "");
    res.locals.jwtPayload = jwtPayload;
  } catch (error) {
    return res.status(401).send("Unauthorized");
  }

  const { userId } = jwtPayload;
  const newToken = jwt.sign({ userId }, process.env.JWT_TOKEN_SECRET || "", {
    expiresIn: "1h",
  });
  res.setHeader("token", newToken);
};
