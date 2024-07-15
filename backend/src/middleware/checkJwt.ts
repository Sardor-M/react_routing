import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { UserRequestInfo } from "../../../backend/src/types/userRequest";

export const checkJwt = (
  req: UserRequestInfo,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).send("Unauthorized");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_TOKEN_SECRET as string);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).send("Unauthorized");
  }
};
