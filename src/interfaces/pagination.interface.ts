export interface IPagination<T> {
  total: number;

  current: string;

  limit: string;

  data: T[];
}
