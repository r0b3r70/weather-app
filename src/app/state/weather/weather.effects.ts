import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { WeatherService } from 'src/app/modules/weather/weather.service';
import { LocationActions, WeatherActions } from './weather.actions';

@Injectable()
export class WeatherEffects {
    loadLocations$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(LocationActions.searchRequested),
            exhaustMap((action) =>
                this.weatherService.getGeoLocation$(action.name).pipe(
                    map((locations) => LocationActions.searchRequestSuccess({ locations })),
                    catchError((error) => of(LocationActions.searchRequestFailure({ error }))),
                ),
            ),
        );
    });

    loadWeather$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(LocationActions.selected),
            exhaustMap((action) => 
            this.weatherService.getCurrentWeatherByLocation$(action.selectedLocation).pipe(
                map((response) => WeatherActions.currentWeatherRequestSuccess({ weather: response })),
                catchError((error) => of(LocationActions.searchRequestFailure({ error }))),
            ),
            ),
        );
    });

    constructor(
        private actions$: Actions,
        private weatherService: WeatherService,
    ) {}
}

