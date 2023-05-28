import express, { Application } from "express";

const PORT = 3333;

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.middlewaresInitialized();
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
