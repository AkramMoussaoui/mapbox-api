import { Component, OnInit } from "@angular/core";
import { IMapData, Item } from "./map.model";
import { MapDataService } from "./services/map-data.service";
import { faBars } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  opened: boolean = false;
  faBars = faBars;
  title: string = "mapbox";
  MapData: IMapData;
  places: Item[];
  filtredPlaces: Item[];
  popShow: { [k: string]: any } = {};
  _listFilter: string = "";
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filtredPlaces = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.places;
  }

  constructor(private mapService: MapDataService) {}

  performFilter(filterBy: string): Item[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.places.filter(
      (place: Item) =>
        place.venue.name.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  ngOnInit(): void {
    this.mapService.getMapData().subscribe(
      (data: IMapData) => {
        this.MapData = data;
        this.places = this.MapData.response.groups[0].items;
        this.filtredPlaces = this.places;
        let name;
        for (let i = 0; i < this.places.length; i++) {
          name = this.places[i].venue.name;
          this.popShow.name = false;
        }
      },
      err => console.log(err)
    );
  }

  open(name: string) {
    this.popShow[name] = !this.popShow[name];
  }

  close(name: string) {
    this.popShow[name] = false;
  }
}
