import express, { Router } from "express";
import { UserController } from "../controllers/user.controller";

export const router: Router = express.Router();
const userController = new UserController();

// NOTE: 新增
router.post("", (req, res) => userController.create(req, res));

// NOTE: 查詢多筆
router.get("/list", (req, res) => userController.findAll(req, res));

// NOTE: 查詢單筆，修改，刪除
router
  .route("/:id")
  .get((req, res) => userController.findOne(req, res))
  .put((req, res) => userController.update(req, res))
  .delete((req, res) => userController.delete(req, res));
