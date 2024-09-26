import { DataSource } from "typeorm";
import { env } from "process";
import * as dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: env.DB_HOST,
  port: +(env.DB_PORT ?? 5432),
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  database: env.DB_DATABASE,
  synchronize: false,
  logging: env.TYPEORM_LOGGING === "true",
  entities: ["src/entities/**/*.ts"],
  migrations: ["src/migrations/**/*.ts"],
});
