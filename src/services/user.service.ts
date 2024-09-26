import { UserDao } from "../dao/user.dao";
import {
  CreateUserRequest,
  UpdateUserRequest,
} from "../interfaces/user-request.interface";

export class UserService {
  private userDao: UserDao;
  constructor() {
    this.userDao = new UserDao();
  }

  async findAll() {
    return await this.userDao.findAll();
  }

  async findOne(id: string) {
    return await this.userDao.findOne(id);
  }

  async create(body: CreateUserRequest) {
    return await this.userDao.create(body);
  }

  async update(id: string, body: UpdateUserRequest) {
    return await this.userDao.update(id, body);
  }

  async delete(id: string) {
    return await this.userDao.delete(id);
  }
}
