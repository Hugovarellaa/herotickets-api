import { NextFunction, Request, Response } from "express";
import { HttpError } from "../interfaces/httpError";

export function errorMiddleware(
  err: HttpError,
  request: Request,
  response: Response,
  next: NextFunction
) {
  const status: number = err.status ?? 500;
  const message: string = err.message ?? "Internal Server Error";

  response.status(status).json({
    message,
    status,
  });
}
