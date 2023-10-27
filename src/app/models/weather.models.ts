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
    location: string;
    selectedLocation: GeoLocation;
    locationList: GeoAPIResponse[];
    weather: object;
    error: string;
    status: 'idle' | 'loading' | 'error';
}


export interface CurrentWeather {
    weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
    }[];
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    };
}