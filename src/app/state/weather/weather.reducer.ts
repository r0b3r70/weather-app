import { createReducer, on } from '@ngrx/store';
import { LocationActions, WeatherActions } from './weather.actions';
import {
    WeatherData,
    WeatherState,
    CurrentWeatherAPIResponse,
    ForecastWeatherAPIResponse,
    ForecastWeatherDayAPIResponse,
} from 'src/app/models';

export const weatherFeatureKey = 'weather';

// todo add status changes
export const initialState: WeatherState = {
    locationSearch: '',
    selectedLocation: {},
    locationList: null,
    weather: {},
    error: '',
    status: 'idle',
};

export const weatherReducer = createReducer(
    initialState,
    on(
        LocationActions.searchRequested,
        (state, { name }): WeatherState => ({
            ...initialState,
            locationSearch: name,
            status: 'loading',
        }),
    ),

    on(
        LocationActions.searchRequestSuccess,
        (state, { response }): WeatherState => ({
            ...state,
            locationList: response,
            error: '',
            status: 'idle',
        }),
    ),

    on(
        LocationActions.searchRequestFailure,
        (state, { error }): WeatherState => ({
            ...state,
            error: error,
            status: 'error',
        }),
    ),

    on(
        LocationActions.selected,
        (state, { selectedLocation }): WeatherState => ({
            ...initialState,
            selectedLocation: selectedLocation,
        }),
    ),

    on(
        WeatherActions.currentWeatherRequested,
        (state): WeatherState => ({
            ...state,
            status: 'loading',
        }),
    ),

    on(
        WeatherActions.currentWeatherRequestSuccess,
        (state, { response }): WeatherState => ({
            ...state,
            weather: {
                ...state.weather,
                current: mapToWeatherData(response).current,
            },
            error: '',
            status: 'idle',
        }),
    ),

    on(
        WeatherActions.currentWeatherRequestFailure,
        (state, { error }): WeatherState => ({
            ...state,
            error: error,
            status: 'error',
        }),
    ),

    on(
        WeatherActions.forecastWeatherRequested,
        (state): WeatherState => ({
            ...state,
            status: 'loading',
        }),
    ),

    on(
        WeatherActions.forecastWeatherRequestSuccess,
        (state, { response }): WeatherState => ({
            ...state,
            weather: {
                ...state.weather,
                forecast: mapToForecastData(response).forecast,
            },
            error: '',
            status: 'idle',
        }),
    ),

    on(
        WeatherActions.forecastWeatherRequestFailure,
        (state, { error }): WeatherState => ({
            ...state,
            error: error,
            status: 'error',
        }),
    ),
);

const mapToWeatherData = (response: CurrentWeatherAPIResponse): Partial<WeatherData> => {
    return {
        current: {
            location: response.name,
            country: response.sys.country,
            description: response.weather[0].description,
            temp: response.main.temp,
            temp_min: response.main.temp_min,
            temp_max: response.main.temp_max,
            wind: response.wind.speed,
            icon: response.weather[0].icon,
        },
    };
};

const mapToForecastData = (res: ForecastWeatherAPIResponse): Partial<WeatherData> => {
    return {
        forecast: res.list.map((day: ForecastWeatherDayAPIResponse) => ({
            dt: day.dt,
            temp: day.temp.day,
            temp_min: day.temp.min,
            temp_max: day.temp.max,
            description: day.weather[0].description,
            icon: day.weather[0].icon,
            wind: day.speed,
        })),
    };
};
