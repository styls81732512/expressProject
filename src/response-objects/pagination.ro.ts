import { IPagination } from "../interfaces/pagination.interface";

export class PaginationRo<T> {
  constructor(paginationResults: IPagination<T>) {
    this.total = paginationResults.total;
    this.current = +paginationResults.current;
    this.limit = +paginationResults.limit;
    this.data = paginationResults.data;
  }

  public total!: number;
  public current!: number;
  public limit!: number;
  public data!: T[];
}
