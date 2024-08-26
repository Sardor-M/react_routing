import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { dataSource } from "../database/db";
import { User } from "../entity/User";
import { UserRequestInfo } from "../types/userRequest";

interface JwtPayload {
  userId: number;
}

export async function AuthMiddleware(
  req: UserRequestInfo, // this has to be double checked
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).json({ message: "Authorization header missing" });
  }

  const token = authHeader.split("")[1]; // we expect a Bearer token
  if (!token) {
    return res.status(401).json({ message: "Acess token is missing" });
  }
  console.log("Token: ", token);

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_TOKEN_SECRET as string
    ) as JwtPayload;

    // token payload dagi userId orqali userni db dan topamiz
    const userRepository = dataSource.getRepository(User);
    const user = await userRepository.findOne({
      where: { id: decoded.userId },
    });

    if (!user) {
      return res.status(401).json({ message: "User not found !" });
    }

    // user objectni requestga bog'laymiz
    req.user = user;

    next(); // keyingi middleware yoki controllerga boglanadi
  } catch (error) {
    console.error("JWT verification failed: ", error);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}
