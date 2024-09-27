import { Repository } from "typeorm";
import { User } from "../entities/user.entity";
import { AppDataSource } from "../data-source";
import { FindAllUserDto } from "../dto/user/find-all-user.dto";
import { CreateUserDto } from "../dto/user/create-user.dto";
import { UpdateUserDto } from "../dto/user/update-user.dto";

export class UserDao {
  private repo: Repository<User>;
  constructor() {
    this.repo = AppDataSource.getRepository(User);
  }

  async findAll(query: FindAllUserDto): Promise<[User[], number]> {
    const queryBuilder = this.repo.createQueryBuilder("user");

    if (query.name) {
      queryBuilder.where("user.name = :name", { name: query.name });
    }

    return queryBuilder
      .take(+query.limit)
      .skip((+query.page - 1) * +query.limit)
      .getManyAndCount();
  }

  async findOne(id: string): Promise<User | null> {
    return this.repo.findOne({ where: { id: +id } });
  }

  async create(data: CreateUserDto): Promise<User> {
    return this.repo.save(data);
  }

  async update(id: string, data: UpdateUserDto) {
    return this.repo.update({ id: +id }, data);
  }

  async delete(id: string) {
    return this.repo.softDelete({ id: +id });
  }
}
