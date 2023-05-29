import express, { Application } from "express";

const PORT = 3333;

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.middlewaresInitialized();
    this.routesInitialized();
    this.interceptError();
  }

  routesInitialized() {
    // this.app.use("/");
  }

  interceptError() {
    // this.app.use()
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
