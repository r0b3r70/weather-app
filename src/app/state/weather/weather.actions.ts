import { createActionGroup, emptyProps, props } from '@ngrx/store';
import {
    GeoLocation,
    CurrentWeatherAPIResponse,
    ForecastWeatherAPIResponse,
    GeoAPIResponse,
} from 'src/app/models';

export const LocationActions = createActionGroup({
    source: 'Location',
    events: {
        'Search Requested': props<{ name: string }>(),
        'Search Request Success': props<{ response: GeoAPIResponse[] }>(),
        'Search Request Failure': props<{ error: string }>(),
        'Selected': props<{ selectedLocation: GeoLocation }>(),
    },
});

export const WeatherActions = createActionGroup({
    source: 'Weather',
    events: {
        'Current Weather Requested': props<{ location: GeoLocation }>(),
        'Current Weather Request Success': props<{ response: CurrentWeatherAPIResponse }>(),
        'Current Weather Request Failure': props<{ error: string }>(),

        'Forecast Weather Requested': props<{ location: GeoLocation }>(),
        'Forecast Weather Request Success': props<{ response: ForecastWeatherAPIResponse }>(),
        'Forecast Weather Request Failure': props<{ error: string }>(),
    },
});
