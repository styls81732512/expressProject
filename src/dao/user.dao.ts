import { DataSource, Repository } from "typeorm";
import { User } from "../entities/user.entity";
import { AppDataSource } from "../data-source";

export class UserDao {
  private repo: Repository<User>;
  constructor() {
    this.repo = AppDataSource.getRepository(User);
  }

  async findAll() {
    return this.repo.find();
  }

  async findOne(id: string) {
    return this.repo.findOne({ where: { id: +id } });
  }

  async create() {}

  async update() {}

  async delete(id: string) {
    return this.repo.softDelete({ id: +id });
  }
}
