import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  public httpOptions;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
  }

  public get(path: string, Params: HttpParams): Observable<any> {
    return this.http.get(`${environment.ROOT_URL}/${path}`, {
      params: Params,
      headers: this.httpOptions,
    });
  }
}
