import { Request } from "express";
// import { JwtPayload } from "jsonwebtoken";
import { User } from "../entity/User";
import { JwtPayload } from "jsonwebtoken";

export interface UserRequestInfo extends Request {
  user?: string | User | JwtPayload;
}
