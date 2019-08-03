import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";
import { IMapData } from "../map.model";
import { Observable, throwError } from "rxjs";
import { tap, catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class MapDataService {
  private url: string = "https://api.foursquare.com/v2/venues/explore?";
  constructor(private http: HttpClient) {}

  getMapData(): Observable<IMapData> {
    const params = new HttpParams()
      .set("client_id", "GINGZW45KUK4AE4QSEBNBVK5UVWQL5MCZUNL1VO0AJCXGQH4")
      .set("client_secret", "CLGCECZC1PMSO1Q5P1WDFXR11HA0VTDHWYE405RX4Q4TON1S")
      .set("v", "20190803")
      .set("limit", "50")
      .set("ll", "36.7665832,2.954818")
      .set("section", "topPicks")
      .set("radius", "2000");
    return this.http.get<IMapData>(this.url, { params });
  }
}
