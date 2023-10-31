import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { WeatherService } from 'src/app/modules/weather/weather.service';
import { LocationActions, WeatherActions } from './weather.actions';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class WeatherEffects {
    loadLocations$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(LocationActions.searchRequested),
            exhaustMap((action) =>
                this.weatherService.getGeoLocation$(action.name).pipe(
                    map((response) => LocationActions.searchRequestSuccess({ response })),
                    catchError((error: HttpErrorResponse) =>
                        of(LocationActions.searchRequestFailure({ error: error.statusText })),
                    ),
                ),
            ),
        );
    });

    locationForCurrentWeatherSelected$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(LocationActions.selected),
            map((action) =>
                WeatherActions.currentWeatherRequested({ location: action.selectedLocation }),
            ),
        );
    });

    locationForForecastWeatherSelected$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(LocationActions.selected),
            map((action) =>
                WeatherActions.forecastWeatherRequested({ location: action.selectedLocation }),
            ),
        );
    });

    // todo: rename
    loadCurrentWeather$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(WeatherActions.currentWeatherRequested),
            exhaustMap((action) =>
                this.weatherService.getCurrentWeatherByLocation$(action.location).pipe(
                    map((response) => WeatherActions.currentWeatherRequestSuccess({ response })),
                    catchError((error: HttpErrorResponse) =>
                        of(LocationActions.searchRequestFailure({ error: error.statusText })),
                    ),
                ),
            ),
        );
    });

    loadWeatherForecast$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(WeatherActions.forecastWeatherRequested),
            exhaustMap((action) =>
                this.weatherService.getForecastByLocation$(action.location).pipe(
                    map((response) => WeatherActions.forecastWeatherRequestSuccess({ response })),
                    catchError((error: HttpErrorResponse) =>
                        of(LocationActions.searchRequestFailure({ error: error.statusText })),
                    ),
                ),
            ),
        );
    });

    constructor(
        private actions$: Actions,
        private weatherService: WeatherService,
    ) {}
}
