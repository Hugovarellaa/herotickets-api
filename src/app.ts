import express, { Application } from "express";
import { connect } from "./infra/database";
import { errorMiddleware } from "./middlewares/error.middleware";

const PORT = 3333;

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.middlewaresInitialized();
    this.routesInitialized();
    this.interceptError();
    connect();
  }

  routesInitialized() {
    // this.app.use("/");
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
