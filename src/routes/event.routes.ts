import { Request, Response, Router } from "express";

class EventRoutes {
  public router: Router;

  constructor() {
    this.router = Router();
  }

  initRoutes() {
    this.router.post("/", (request: Request, response: Response) => {});
  }
}

export { EventRoutes };
