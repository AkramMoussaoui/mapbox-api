export interface IProperty {
  name: string;
}

export interface IGeometry {
  coordinates: number[];
  type: string;
}

export interface IFeature {
  type: string;
  properties: IProperty;
  geometry: IGeometry;
  id: string;
}

export interface IMapData {
  type: string;
  features: IFeature[];
}
