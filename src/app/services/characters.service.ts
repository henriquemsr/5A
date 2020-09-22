import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { ApiService } from "./api.service";
import { HelperService } from "../services/helper.service";
import { Body } from "../models/body.model";

import { environment } from "src/environments/environment";

import { Md5 } from "ts-md5/dist/md5";
import { HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CharactersService {
  constructor(private api: ApiService, private helperService: HelperService) {}

  public get({
    body,
    characterId,
  }: {
    body;
    characterId?: string;
  }): Observable<any> {
    body.ts = Number(new Date());
    body.hash = `${Md5.hashStr(
      `${body.ts}${environment.PRIVATE_KEY}${environment.PUBLIC_KEY}`
    )}`;
    body.apikey = environment.PUBLIC_KEY;

    let params = new HttpParams();
    params = this.helperService.GetParamsForPaged(params, body);
    return this.api.get(`characters${characterId}`, params);
  }

  public getComics({
    body,
    characterId,
  }: {
    body;
    characterId?: string;
  }): Observable<any> {
    body.ts = Number(new Date());
    body.hash = `${Md5.hashStr(
      `${body.ts}${environment.PRIVATE_KEY}${environment.PUBLIC_KEY}`
    )}`;
    body.apikey = environment.PUBLIC_KEY;

    let params = new HttpParams();
    params = this.helperService.GetParamsForPaged(params, body);
    return this.api.get(`characters${characterId}/comics`, params);
  }
}
