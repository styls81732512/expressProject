import { UserDao } from "../dao/user.dao";

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

  async create(body: any) {}

  async update(id: string, body: any) {}

  async delete(id: string) {}
}
