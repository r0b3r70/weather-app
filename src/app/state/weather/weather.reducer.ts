import { createReducer, on } from '@ngrx/store';

import { LocationActions, WeatherActions } from './weather.actions';
import { WeatherState } from 'src/app/models/weather.models';

export const weatherFeatureKey = 'weather';

// todo add status changes
export const initialState: WeatherState = {
    location: '',
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

  on(LocationActions.clear, ():WeatherState => ({
    location: '',
    locationList: [],
    selectedLocation: {},
    weather: {},
    error: '',
    status: 'idle',
  })),

  on(LocationActions.searchRequestSuccess , (state, { locations }):WeatherState => ({
    ...state,
    locationList: locations,
    error: '',
    status: 'idle',
  })),

  on(WeatherActions.currentWeatherRequestSuccess, (state, { weather }):WeatherState => ({
    ...state,
    weather: weather,
    error: '',
    status: 'idle',
  })),
  

);
