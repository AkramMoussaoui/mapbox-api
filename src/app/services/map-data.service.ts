import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { IMapData } from "../map.model";
import { Observable, throwError } from "rxjs";
import { tap, catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class MapDataService {
  constructor(private http: HttpClient) {}

  getMapData(): Observable<IMapData> {}
}
