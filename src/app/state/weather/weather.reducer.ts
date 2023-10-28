import { createReducer, on } from '@ngrx/store';

import { LocationActions, WeatherActions } from './weather.actions';
import { WeatherData, WeatherState } from 'src/app/models/weather.models';
import { CurrentWeatherAPIResponse, ForecastWeatherAPIResponse, ForecastWeatherDayAPIResponse } from 'src/app/models/api.models';

export const weatherFeatureKey = 'weather';

// todo add status changes
export const initialState: WeatherState = {
    locationSearch: '',
    selectedLocation: {},
    locationList: [],
    weather: {},
    error: '',
    status: 'idle',
};

export const weatherReducer = createReducer(
  initialState,
  on(LocationActions.selected, (state, { selectedLocation }):WeatherState => ({
    ...state,
    selectedLocation: selectedLocation,
    error: '',
    status: 'idle',
  })),

  on(LocationActions.searchRequestSuccess , (state, { response }):WeatherState => ({
    ...state,
    locationList: response,
    error: '',
    status: 'idle',
  })),

  on(LocationActions.clear, ():WeatherState => ({
    locationSearch: '',
    locationList: [],
    selectedLocation: {},
    weather: {},
    error: '',
    status: 'idle',
  })),

  on(WeatherActions.currentWeatherRequestSuccess, (state, { response }):WeatherState => ({
    ...state,
    weather: {
      ...state.weather,
      current: mapToWeatherData(response).current,
    },
    error: '',
    status: 'idle',
  })),

  on(WeatherActions.forecastWeatherRequestSuccess, (state, { response }):WeatherState => ({
    ...state,
    weather: {
      ...state.weather,
      forecast: mapToForecastData(response).forecast,
    },
    error: '',
    status: 'idle',
  })),  
  
);

const mapToWeatherData = (response: CurrentWeatherAPIResponse): Partial<WeatherData> => {
  return {
      current: {
          description: response.weather[0].description,
          temp: response.main.temp,
          temp_min: response.main.temp_min,
          temp_max: response.main.temp_max,
          wind: response.wind.speed,
      },
  };
}

const mapToForecastData = (res: ForecastWeatherAPIResponse): Partial<WeatherData> => {
    return {
        forecast: res.list.map((day: ForecastWeatherDayAPIResponse) => ({
            dt: day.dt,
            temp: day.temp.day,
            temp_min: day.temp.min,
            temp_max: day.temp.max,
            description: day.weather[0].description,
            wind: day.speed,
        })),
    };
};