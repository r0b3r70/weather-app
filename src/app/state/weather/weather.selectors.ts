import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WeatherState } from 'src/app/models/weather.models';

export const featureKey = 'weather';
export const selectWeather = createFeatureSelector<WeatherState>(featureKey);

export const selectLocationList = createSelector(
    selectWeather,
    (state: WeatherState) => state.locationList,
);

export const selectWeatherToday = createSelector(
    selectWeather,
    (state: WeatherState) => state.weather,
);