import { NextFunction } from "express";

class ErrorExtended extends Error {
  statusCode: number;
  constructor(statusCode: number, message: string) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

const throwErr = (statusCode: number, message: string, next: NextFunction) => {
  const error = new ErrorExtended(statusCode, message);
  next(error);
};

export default throwErr;
