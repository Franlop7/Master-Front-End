export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  location: Location;
  image: string;
}

export interface Origin {
  name: string;
  url: string;
}

export interface Location {
  name: string;
  url: string;
}

export interface LocationApi {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}
