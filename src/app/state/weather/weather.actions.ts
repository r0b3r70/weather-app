import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { GeoAPIResponse } from 'src/app/models/api.models';
import { CurrentWeather, GeoLocation } from 'src/app/models/weather.models';

export const LocationActions = createActionGroup({
  source: 'Location',
  events: {
    'Search Requested': props<{ name: string }>(),
    'Search Request Success': props<{ locations: GeoAPIResponse[] }>(),
    'Search Request Failure': props<{ error: string }>(),
    
    'Selected': props<{ selectedLocation: GeoLocation }>(),
    'Clear': emptyProps(),
  },
});

export const WeatherActions = createActionGroup({
  source: 'Weather',
  events: {
    'Current Weather Requested': props<{ location: GeoLocation }>(),
    'Current Weather Request Success': props<{ weather: CurrentWeather }>(),
    'Current Weather Request Failure': props<{ error: string }>(),
  }
});



