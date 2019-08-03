export interface Meta {
  code: number;
  requestId: string;
}

export interface Ne {
  lat: number;
  lng: number;
}

export interface Sw {
  lat: number;
  lng: number;
}

export interface SuggestedBound {
  ne: Ne;
  sw: Sw;
}

export interface Item {
  summary: string;
  type: string;
  reasonName: string;
}

export interface Reason {
  count: number;
  items: Item[];
}

export interface LabeledLatLng {
  label: string;
  lat: number;
  lng: number;
}

export interface Location {
  lat: number;
  lng: number;
  labeledLatLngs: LabeledLatLng[];
  distance: number;
  cc: string;
  country: string;
  formattedAddress: string[];
}

export interface Icon {
  prefix: string;
  suffix: string;
}

export interface Category {
  id: string;
  name: string;
  pluralName: string;
  shortName: string;
  icon: Icon;
  primary: boolean;
}

export interface Photo {
  count: number;
  groups: any[];
}

export interface Venue {
  id: string;
  name: string;
  location: Location;
  categories: Category[];
  photos: Photo;
}

export interface Item {
  reasons: Reason;
  venue: Venue;
  referralId: string;
}

export interface Group {
  type: string;
  name: string;
  items: Item[];
}

export interface Response {
  headerLocation: string;
  headerFullLocation: string;
  headerLocationGranularity: string;
  totalResults: number;
  suggestedBounds: SuggestedBound;
  groups: Group[];
}

export interface IMapData {
  meta: Meta;
  response: Response;
}
