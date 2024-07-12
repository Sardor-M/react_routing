import { Request, Response } from "express";
import { getRepository } from "../../repositories/ProductRepository";
import { User } from "../../entity/User";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { dataSource } from "../../database/db";

export class UserController {
  static jwtToken = process.env.JWT_TOKEN_SECRET || "";

  static register = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
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

    if (!user || !password || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).send("Incorrect email or password");
    }

    if (typeof this.jwtToken !== "string") {
      return res.status(500).send("Internal server error");
    }

    const token = jwt.sign({ userId: user.id }, this.jwtToken, {
      expiresIn: "10min",
    });

    res.send({ token });
  };
}
