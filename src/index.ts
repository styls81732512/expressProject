import express from "express";
import { LoggerMiddleware } from "./middlewares/logger.middleware";
import { AppDataSource } from "./data-source";
import { RegisterRoutes } from "./routes/routes";
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "../build/swagger.json";

const app = express();
const port = process.env.PORT || 3000;

app.use(LoggerMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

RegisterRoutes(app);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

AppDataSource.initialize()
  .then(() => {
    console.log("Database is connected");
    app.listen(port, () => {
      console.log("Server is running");
    });
  })
  .catch((error) => console.log(error));
