import { Service } from "typedi";
import { User } from "../entity/User";
import { getRepository } from "../repositories/ProductRepository";

@Service()
export class UserService {
    private userRepository = getRepository();

    // async getAllUsers(): Promise<User[]> {
    //     // get all users
    //     return await this.userRepository.find();
    // }

}
