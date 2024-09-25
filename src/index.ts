import express from "express";
import { router as UserRouter } from "./routes/user.router";
import { LoggerMiddleware } from "./middlewares/logger.middleware";
import { AppDataSource } from "./data-source";

const app = express();
const port = 3000;

app.use(LoggerMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", UserRouter);

AppDataSource.initialize()
  .then(() => {
    console.log("Database is connected");
    app.listen(port, () => {
      console.log("Server is running");
    });
  })
  .catch((error) => console.log(error));
