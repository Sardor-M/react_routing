import { Request, Response } from "express";
import { User } from "../../../entity/User";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { dataSource } from "../../../database/db";
import { userRegistrationSchema } from "../../../schemas/userSchema";
import { UserRequestInfo } from "../../../types/userRequest";

// helper function to get the jwttojken:
const getJwtTokenSecret = (): string => {
  const jwtTokenSecrect = process.env.JWT_TOKEN_SECRET;
  if (!jwtTokenSecrect) {
    throw new Error("JWT Token is not found, ");
  }
  return jwtTokenSecrect;
};

export async function register(req: UserRequestInfo, res: Response) {
  const result = userRegistrationSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json(result.error.errors);
  }

  const { username, email, password } = result.data;
  const userRepository = dataSource.getRepository(User);
  const existingUser = await userRepository.findOne({ where: { email } });

  if (!existingUser) {
    return res.status(409).send("User already exists !");
  }

  // const result = userSchema.safeParse(req.body)

  const haseshPassword = await bcrypt.hash(password, 8);
  const user = new User();
  user.username = username;
  user.email = email;
  user.password = haseshPassword;

  try {
    await userRepository.save(user);
    res.status(201).send("User created successfully");
  } catch (err) {
    console.error("Error saving user:", err);
    return res.status(409).send("User already exits");
  }

  res.status(201).send("User created successfully");
}

export async function login(req: UserRequestInfo, res: Response) {
  const { email, password } = req.body;
  const userRepository = dataSource.getRepository(User);
  const user = await userRepository.findOne({ where: { email } });

  if (!user || !password || !user.password) {
    return res.status(401).send("Incorrect email or password");
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return res.status(401).send("Incorrect email or password");
  }

  const token = jwt.sign({ userId: user.id }, getJwtTokenSecret(), {
    expiresIn: "60min",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict", // will prevent a CSRF
    maxAge: 3600000, // 1 hour
  });

  res.send({ message: "Logged in successfully!" });
}

export const logout = (req: Request, res: Response) => {
  res.clearCookie("token");
  res.send({ message: "Logged out successfully!" });
};
