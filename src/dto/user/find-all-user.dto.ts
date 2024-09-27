import { PaginationDto } from "../base/pagination.dto";

export class FindAllUserDto extends PaginationDto {
  public readonly name?: string;
}
