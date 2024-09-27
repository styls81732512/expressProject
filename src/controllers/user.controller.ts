import { BaseController } from "../core/controllers/base.controller";
import { UserService } from "../services/user.service";
import {
  Body,
  Delete,
  Get,
  Path,
  Post,
  Put,
  Queries,
  Res,
  Route,
  Tags,
  TsoaResponse,
} from "tsoa";
import { User } from "../entities/user.entity";
import { FindAllUserDto } from "../dto/user/find-all-user.dto";
import { PaginationRo } from "../response-objects/pagination.ro";
import { UpdateUserDto } from "../dto/user/update-user.dto";
import { CreateUserDto } from "../dto/user/create-user.dto";

@Route("user")
@Tags("User")
export class UserController extends BaseController {
  private userService: UserService;
  constructor() {
    super();
    this.userService = new UserService();
  }

  @Get("/list")
  async findAll(
    @Queries() dto: FindAllUserDto,
    @Res() response: TsoaResponse<200, PaginationRo<User[]>>
  ) {
    const users = await this.userService.findAll(dto);

    return this.respondOk(users, response);
  }

  @Get("/:id")
  async findOne(@Path() id: string, @Res() response: TsoaResponse<200, User>) {
    const user = await this.userService.findOne(id);

    return this.respondOk(user, response);
  }

  @Post("")
  async create(
    @Body() dto: CreateUserDto,
    @Res() response: TsoaResponse<201, { id: number }>
  ) {
    const user = await this.userService.create(dto);

    return this.respondCreated(user.id, response);
  }

  @Put("/:id")
  async update(
    @Path() id: string,
    @Body() dto: UpdateUserDto,
    @Res() response: TsoaResponse<200, null>
  ) {
    await this.userService.update(id, dto);

    return this.respondNoContent(response);
  }

  @Delete("/:id")
  async delete(@Path() id: string, @Res() response: TsoaResponse<200, null>) {
    await this.userService.delete(id);

    return this.respondNoContent(response);
  }
}
