import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WeatherState } from 'src/app/models';
import { weatherFeatureKey } from './weather.reducer';

export const selectWeather = createFeatureSelector<WeatherState>(weatherFeatureKey);

export const selectLocationList = createSelector(
    selectWeather,
    (state: WeatherState) => state.locationList,
);

export const selectWeatherToday = createSelector(
    selectWeather,
    (state: WeatherState) => state.weather,
);