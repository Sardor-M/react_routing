import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";
export interface UserRequestInfo extends Request {
  user?: string | JwtPayload; // or any other type
}
