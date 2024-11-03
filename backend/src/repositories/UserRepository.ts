import { DataSource, FindManyOptions, Repository } from "typeorm";
import { User } from "../entity/User";

export class UserRepository {
    private repository: Repository<User>;

    constructor({dataSource}: {dataSource: DataSource}) {
        this.repository = dataSource.getRepository(User);
    }

    async find(options: FindManyOptions<User>): Promise<User[]> {
        return this.repository.find(options);
    }
}