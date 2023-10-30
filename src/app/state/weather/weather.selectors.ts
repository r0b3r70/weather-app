import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WeatherState } from 'src/app/models';
import { weatherFeatureKey } from './weather.reducer';

export const selectWeather = createFeatureSelector<WeatherState>(weatherFeatureKey);

export const selectLocationList = createSelector(
    selectWeather,
    (state: WeatherState) => state.locationList,
);

export const selectWeatherCurrent = createSelector(
    selectWeather,
    (state: WeatherState) => state.weather.current,
);

export const selectWeatherForecast = createSelector(
    selectWeather,
    (state: WeatherState) => state.weather.forecast,
);

export const selectWeatherLoading = createSelector(
    selectWeather,
    (state: WeatherState) => state.status === 'loading',
);
