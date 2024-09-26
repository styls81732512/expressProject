import { Response } from "express";
import { Controller, Res, TsoaResponse } from "tsoa";

class BaseResponse {
  constructor(code: string, data: any) {
    this.code = code;
    this.data = data;
  }
  data: any;
  code: string;
}

export class BaseController extends Controller {
  protected respondOk(data: any, response: TsoaResponse<200, any>) {
    return response(200, this.respond(data, "00"));
  }

  protected respondCreated(id: number, response: TsoaResponse<201, any>) {
    return response(201, this.respond({ id }, "00"));
  }

  protected respondNoContent(response: TsoaResponse<200, any>) {
    return response(200, this.respond(null, "00"));
  }

  protected respond(data: any, code: string) {
    return new BaseResponse(code, data);
  }
}
