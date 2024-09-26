import { Request, Response } from "express";
import { BaseController } from "../core/controllers/base.controller";
import { UserService } from "../services/user.service";
import {
  CreateUserRequest,
  UpdateUserRequest,
} from "../interfaces/user-request.interface";

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
    const user = await this.userService.create(req.body as CreateUserRequest);

    return this.respondCreated(user.id, res);
  }

  async update(req: Request, res: Response) {
    await this.userService.update(req.params.id, req.body as UpdateUserRequest);

    return this.respondNoContent(res);
  }

  async delete(req: Request, res: Response) {
    await this.userService.delete(req.params.id);

    return this.respondNoContent(res);
  }
}
