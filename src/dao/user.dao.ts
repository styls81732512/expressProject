import { Repository } from "typeorm";
import { User } from "../entities/user.entity";
import { AppDataSource } from "../data-source";
import {
  CreateUserRequest,
  UpdateUserRequest,
} from "../interfaces/user-request.interface";

export class UserDao {
  private repo: Repository<User>;
  constructor() {
    this.repo = AppDataSource.getRepository(User);
  }

  async findAll(): Promise<User[]> {
    return this.repo.find();
  }

  async findOne(id: string): Promise<User | null> {
    return this.repo.findOne({ where: { id: +id } });
  }

  async create(data: CreateUserRequest): Promise<User> {
    return this.repo.save(data);
  }

  async update(id: string, data: UpdateUserRequest) {
    return this.repo.update({ id: +id }, data);
  }

  async delete(id: string) {
    return this.repo.softDelete({ id: +id });
  }
}
