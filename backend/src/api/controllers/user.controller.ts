import { Request, Response } from "express";
import { User } from "../../entity/User";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { dataSource, userSchema } from "../../database/db";

export class UserController {
  static get jwtToken(): string {
    const jwtToken = process.env.JWT_TOKEN_SECRET;
    if (!jwtToken) {
      throw new Error("JWT_TOKEN is not set");
    }
    return jwtToken;
  }

  static register = async (req: Request, res: Response) => {
    const result = userSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json(result.error.errors);
    }

    const { username, email, password } = result.data;

    // const result = userSchema.safeParse(req.body)

    const userRepository = dataSource.getRepository(User);
    const user = new User();
    user.username = username;
    user.email = email;
    user.password = bcrypt.hashSync(password, 8);

    try {
      await userRepository.save(user);
    } catch (error) {
      return res.status(409).send("User already exits");
    }

    res.status(201).send("User created successfully");
  };

  static login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const userRepository = dataSource.getRepository(User);
    const user = await userRepository.findOne({ where: { email } });

    if (!user || !password || !user.password) {
      return res.status(401).send("Incorrect email or password");
    }

    const passwordMatch = bcrypt.compareSync(password, user.password);

    if (!passwordMatch) {
      return res.status(401).send("Incorrect email or password");
    }

    if (typeof this.jwtToken !== "string") {
      return res.status(500).send("Internal server error");
    }

    const token = jwt.sign({ userId: user.id }, this.jwtToken, {
      expiresIn: "10min",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: this.jwtToken === "production",
      maxAge: 3600000,
    });

    res.send({ message: "Logged in successfully!" });
  };

  static logout = (req: Request, res: Response) => {
    res.clearCookie("token");
    res.send({ message: "Logged out successfully!" });
  };
}
