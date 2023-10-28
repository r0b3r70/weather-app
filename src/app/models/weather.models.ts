import { GeoAPIResponse } from "./api.models";

// make all properties optional
export interface GeoLocation {
    name?: string;
    lat?: number;
    lon?: number;
    country?: string;
    state?: string;
}


export interface WeatherState {
    locationSearch: string;                 // String from search input
    selectedLocation: GeoLocation;          // One, mapped response from locationList[]
    locationList: GeoAPIResponse[];         // API response from GeoDB with list of locations
    weather: WeatherData;                   // Mapped data
    error: string;                          // error message from API
    status: 'idle' | 'loading' | 'error';   // status of API call
}

export interface WeatherData {
    current?: WeatherDataCurrent;
    forecast?: WeatherDataForecast[];
}

export interface WeatherDataCurrent {
    description: string; //weather.description
    temp: number;       // main.temp
    temp_min: number;   // main.temp_min
    temp_max: number;   // main.temp_max
    wind: number;       // wind.speed
}

export interface WeatherDataForecast {       
    dt: number;          // dt
    temp: number;        // temp.day
    temp_min: number;    // temp.min
    temp_max: number;    // temp.max
    description: string; // weather.description
    wind: number;        // speed
}
