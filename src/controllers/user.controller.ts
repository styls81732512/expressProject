import { Request, Response } from "express";
import { BaseController } from "../core/controllers/base.controller";
import { UserService } from "../services/user.service";

export class UserController extends BaseController {
  private userService: UserService;
  constructor() {
    super();
    this.userService = new UserService();
  }

  async findAll(req: Request, res: Response) {
    const users = await this.userService.findAll();

    return this.respondOk(users, res);
  }

  async findOne(req: Request, res: Response) {
    const user = await this.userService.findOne(req.params.id);

    return this.respondOk(user, res);
  }

  async create(req: Request, res: Response) {
    console.log(req.body);
  }

  async update(req: Request, res: Response) {
    return this.respondNoContent(res);
  }

  async delete(req: Request, res: Response) {
    return this.respondNoContent(res);
  }
}
