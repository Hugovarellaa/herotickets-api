import express, { Application } from "express";

const PORT = 3333;

class App {
  public app: Application;

  constructor() {
    this.app = express();
  }

  listen() {
    this.app.listen(PORT, () =>
      console.log("Server listening on port: ", PORT)
    );
  }
}

export { App };
