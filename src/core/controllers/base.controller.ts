import { Response } from "express";

class BaseResponse {
  constructor(code: string, data: any) {
    this.code = code;
    this.data = data;
  }
  data: any;
  code: string;
}

export class BaseController {
  protected respondOk(data: any, response: Response) {
    return response.status(200).send(this.respond(data, "00"));
  }

  protected respondCreated(id: number, response: Response) {
    return response.status(201).send(this.respond(id, "00"));
  }

  protected respondNoContent(response: Response) {
    if (response) return response.status(200).send(this.respond(null, "00"));
    return this.respond(null, "00");
  }

  protected respond(data: any, code: string) {
    return new BaseResponse(code, data);
  }
}
