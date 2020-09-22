import { Injectable } from "@angular/core";
import { Body } from "../models/body.model";
import { HttpParams } from "@angular/common/http";

@Injectable()
export class HelperService {
  public GetParamsForPaged(params: HttpParams, body: Body) {
    params = params.append("limit", body.limit.toString());
    params = params.append("offset", body.offset.toString());
    params = params.append("ts", body.ts.toString());
    params = params.append("apikey", body.apikey);
    params = params.append("hash", body.hash);
    body.orderBy && (params = params.append("orderBy", body.orderBy));
    body.nameStartsWith &&
      (params = params.append("nameStartsWith", body.nameStartsWith));

    return params;
  }
}
