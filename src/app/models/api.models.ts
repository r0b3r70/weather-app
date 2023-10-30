/* https://app.quicktype.io
 */

export interface apiErrorResponse {
    cod: string;
    message: string;
}

export interface GeoAPIResponse {
    name: string;
    local_names?: { [key: string]: string };
    lat: number;
    lon: number;
    country: string;
    state: string;
}

export interface ForecastWeatherAPIResponse {
    city: {
        id: number;
        name: string;
        coord: {
            lon: number;
            lat: number;
        };
        country: string;
        population: number;
        timezone: number;
    };
    cod: string;
    message: number;
    cnt: number;
    list: ForecastWeatherDayAPIResponse[];
}

export interface ForecastWeatherDayAPIResponse {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: {
        day: number;
        min: number;
        max: number;
        night: number;
        eve: number;
        morn: number;
    };
    feels_like: {
        day: number;
        night: number;
        eve: number;
        morn: number;
    };
    pressure: number;
    humidity: number;
    weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
    }[];
    speed: number;
    deg: number;
    gust: number;
    clouds: number;
    pop: number;
    rain: number;
}

export interface CurrentWeatherAPIResponse {
    coord: {
        lon: number;
        lat: number;
    };
    weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
    }[];
    base: string;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    };
    visibility: number;
    wind: {
        speed: number;
        deg: number;
    };
    rain: {
        '1h': number;
    };
    clouds: {
        all: number;
    };
    dt: number;
    sys: {
        type: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
}
