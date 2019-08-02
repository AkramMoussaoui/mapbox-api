import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { IMapData } from "../map.model";
import { Observable, throwError } from "rxjs";
import { tap, catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class MapDataService {
  private token: string =
    "pk.eyJ1IjoiYWtyYW0yNSIsImEiOiJjanl1M2ZyanYwOXc0M21wcml4dGRjbzcyIn0.Mqgp71vVsF24E9m6FFilCw";
  private api: string =
    "https://api.mapbox.com/datasets/v1/akram25/cjyul8wru0f022op1495rxbk0/features?access_token=";
  private url: string = `${this.api}${this.token}`;
  constructor(private http: HttpClient) {}

  getMapData(): Observable<IMapData> {
    return this.http.get<IMapData>(this.url);
  }
}
