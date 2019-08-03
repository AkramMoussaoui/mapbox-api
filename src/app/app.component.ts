import { Component, OnInit } from "@angular/core";
import { IMapData, Item } from "./map.model";
import { MapDataService } from "./services/map-data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "mapbox";
  MapData: IMapData;
  places: Item[];
  constructor(private mapService: MapDataService) {}
  ngOnInit(): void {
    this.mapService.getMapData().subscribe(
      (data: IMapData) => {
        this.MapData = data;
        this.places = this.MapData.response.groups[0].items;
      },
      err => console.log(err),
      () => console.log(this.MapData)
    );
  }
}
