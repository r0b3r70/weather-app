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
    location: string;                       // ToDo: rename to search string
    selectedLocation: GeoLocation;          // One, mapped response from locationList[]
    locationList: GeoAPIResponse[];         // API response from GeoDB with list of locations
    weather: WeatherData;                   // Mapped data
    error: string;                          // error message from API
    status: 'idle' | 'loading' | 'error';
}

// export interface CurrentWeather {
//     weather: {
//         id: number;
//         main: string;
//         description: string;
//         icon: string;
//     }[];
//     main: {
//         temp: number;
//         feels_like: number;
//         temp_min: number;
//         temp_max: number;
//         pressure: number;
//         humidity: number;
//     };
// }

export interface WeatherData {

    current?: {
        description: string; //weather.description
        temp: number;       // main.temp
        temp_min: number;   // main.temp_min
        temp_max: number;   // main.temp_max
        wind: number;       // wind.speed
    };
    
    forecast?: {       // list->
        dt: number;          // dt
        temp: number;        // temp.day
        temp_min: number;    // temp.min
        temp_max: number;    // temp.max
        description: string; // weather.description
        wind: number;        // speed
    }[];
}