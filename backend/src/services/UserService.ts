
import { User } from "../entity/User";
import { UserRepository } from '../repositories/UserRepository';

export class UserService {
    private userRepository: UserRepository;

    constructor({userRepository} : {userRepository : UserRepository}) {
        this.userRepository = userRepository;
    }

    async getAllUsers(): Promise<User[]> {
        // get all users
        return this.userRepository.find({});
    }

}
