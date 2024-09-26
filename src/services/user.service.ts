import { UserDao } from "../dao/user.dao";
import { CreateUserDto } from "../dto/user/create-user.dto";
import { FindAllUserDto } from "../dto/user/find-all-user.dto";
import { UpdateUserDto } from "../dto/user/update-user.dto";
import { PaginationRo } from "../response-objects/pagination.ro";

export class UserService {
  private userDao: UserDao;
  constructor() {
    this.userDao = new UserDao();
  }

  async findAll(query: FindAllUserDto) {
    const [users, total] = await this.userDao.findAll(query);

    return new PaginationRo({
      total: total,
      limit: query.limit,
      current: query.page,
      data: users,
    });
  }

  async findOne(id: string) {
    return await this.userDao.findOne(id);
  }

  async create(body: CreateUserDto) {
    return await this.userDao.create(body);
  }

  async update(id: string, body: UpdateUserDto) {
    return await this.userDao.update(id, body);
  }

  async delete(id: string) {
    return await this.userDao.delete(id);
  }
}
