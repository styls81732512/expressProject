import { randomUUID } from "crypto";
import { Request, Response, NextFunction } from "express";

export const LoggerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const seq = randomUUID();

  try {
    const record = {
      message: "REQUEST",
      method: req.method,
      url: req.url,
      params: req.body,
      seq: seq,
    };
    console.log(JSON.stringify(record));
  } catch (error) {
    console.log(`Failed to log request body: ${error}`);
  }

  next();
};
