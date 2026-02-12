
export interface CountryDto {
  countryId: number;
  name: string;
  code: string;
}

export interface StateDto {
  stateId: number;
  name: string;
  code: string;
  countryId: number;
  countryName: string;
}

export interface CityDto {
  cityId: number;
  name: string;
  code: string;
  stateId: number;
  stateName: string;
}