import express, { Application } from "express";
import { connect } from "./infra/database";
import { errorMiddleware } from "./middlewares/error.middleware";
import { EventRoutes } from "./routes/event.routes";

const PORT = 3333;

class App {
  public app: Application;
  private eventRoutes = new EventRoutes();

  constructor() {
    this.app = express();
    this.middlewaresInitialized();
    this.routesInitialized();
    this.interceptError();
    connect();
  }

  routesInitialized() {
    this.app.use("/events", this.eventRoutes.router);
  }

  interceptError() {
    this.app.use(errorMiddleware);
  }

  middlewaresInitialized() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  listen() {
    this.app.listen(PORT, () =>
      console.log("Server listening on port: ", PORT)
    );
  }
}

export { App };
