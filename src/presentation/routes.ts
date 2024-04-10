import { Router } from "express";
import { TodosController } from "./todos/controller.ddd";
import { TodoRoutes } from "./todos/routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();
    router.use("/api/todos", TodoRoutes.routes);
    return router;
  }
}
